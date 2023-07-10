import { Component, Host, Prop, Watch, h } from '@stencil/core';
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import esriConfig from "@arcgis/core/config.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import Graphic from "@arcgis/core/Graphic.js";
import ServiceAreaParameters from "@arcgis/core/rest/support/ServiceAreaParameters.js";
import FeatureSet from "@arcgis/core/rest/support/FeatureSet.js";
import * as serviceArea from "@arcgis/core/rest/serviceArea.js";
import * as networkService from "@arcgis/core/rest/networkService.js";
// import TravelMode from "@arcgis/core/rest/support/TravelMode.js";

@Component({
  tag: 'hub-compass-map',
  styleUrl: 'hub-compass-map.css',
  shadow: false,
})
export class HubCompassMap {

  /**
   * Optional Map id to display
   */
  @Prop() mapId: string = null;

  /**
   * Optional [longitude, latitude] map center
   */
  @Prop() center: [number, number] = [0,0];
  
  /**
   * Optional map zoom level
   */
  @Prop() zoom: number = 10;

  /**
   * Optional array of datasets to add to map
   */
  @Prop() datasetIds: string[] = [];

  /**
   * TODO: only add new datasets, likely by diffing with old list
   */
  @Watch('datasetIds')
  updateDatasets(newDatasetIds) {
    newDatasetIds.forEach((datasetId) => {
      const datasetLayer = new FeatureLayer({
        portalItem: {
          id: datasetId
        }
      });

      console.debug('adding dataset layer', {datasetId, datasetLayer});
      
      this.webMap.add(datasetLayer);
    });
  }

  /**
   * Optional travel mode: walking, etc.
   *  TODO fix travel mode type and values
   */
  @Prop({mutable: true, reflect: true}) travelMode: any = null;

  /**
   * Optional location to calculate service center.
   * Changing this will update the point
   */
  @Prop({mutable: true, reflect: true}) serviceAreaPoint = null;

  @Watch('serviceAreaPoint')
  updateServiceArea(newServicePoint) {
    this.createServiceAreas(newServicePoint);
  }

  mapEl: HTMLDivElement;
  webMap: Map;
  mapView: MapView;
  serviceAreaUrl = "https://route-api.arcgis.com/arcgis/rest/services/World/ServiceAreas/NAServer/ServiceArea_World";
  componentDidRender() {
    esriConfig.apiKey = "AAPK42ebee6b2e134974bffd492cdf7f365dXxAPfRSdf05kJ3AtuEevSfJqUEZ34Vhy2UfrxPtSXrQAfwL04Zij-GfOEQU9OD_9";

    this.webMap = new Map({
      basemap: "arcgis-topographic" // Basemap layer service
    });
    this.mapView = new MapView({
      map: this.webMap,
      center: this.center, // Longitude, latitude
      zoom: this.zoom, // Zoom level
      container: this.mapEl // Div element
    });

    this.mapView.when(() => {
      // this.createServiceAreas(this.mapView.center);
      const graphic = this.createGraphic(this.mapView.center);
      this.mapView.graphics.addMany([graphic], 0);

    });

    this.mapView.on("click", (event) => {
      this.createServiceAreas(event.mapPoint);
    });
    
    if(!!this.datasetIds && this.datasetIds.length > 0) {
      this.updateDatasets(this.datasetIds)
    }
  }
  private createServiceAreas(point) {
    // Remove any existing graphics
    this.mapView.graphics.removeAll();
    const locationGraphic = this.createGraphic(point);
    this.findServiceArea(locationGraphic);
  }
  // Create the location graphic
  private createGraphic(geometry) {
    let markerSymbol = {
      type: "simple-marker",
      color: "white",
      size: 8
    }
    // Create a and add the point
    const graphic = new Graphic({
      geometry,
      symbol: markerSymbol
    });
    this.mapView.graphics.add(graphic);
    return graphic;
  }

  async findServiceArea(locationFeature) {
    if (!this.travelMode) {
      const networkDescription = await networkService.fetchServiceDescription(this.serviceAreaUrl);
      this.travelMode = networkDescription.supportedTravelModes.find(
        (travelMode) => travelMode.name === "Walking Distance"
      );
    }
    console.debug('travelMode', this.travelMode)
    const serviceAreaParameters = new ServiceAreaParameters({
      facilities: new FeatureSet({
        features: [locationFeature]
      }),
      defaultBreaks: [2.5], // km
      travelMode: this.travelMode,
      travelDirection: "to-facility",
      outSpatialReference: this.mapView.spatialReference,
      trimOuterPolygon: true
    });
    const { serviceAreaPolygons } = await serviceArea.solve(this.serviceAreaUrl, serviceAreaParameters);
    this.showServiceAreas(serviceAreaPolygons);
  }
  showServiceAreas(serviceAreaPolygons) {
    const graphics = serviceAreaPolygons.features.map((g)=>{
      g.symbol = {
        type: "simple-fill",
        color: "rgba(255, 0, 0, 0.25)"
      }
      return g
    })
    this.mapView.graphics.addMany(graphics, 0);
  }
  render() {
    
    return (
      <Host>
        <slot></slot>
        <div id="mapWrapper">
        <div 
          ref={(el) => this.mapEl = el as HTMLDivElement}
          id="mapDiv"></div>
          </div>
      </Host>
    );
  }

}
