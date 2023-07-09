import { Component, Host, Prop, h } from '@stencil/core';
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import esriConfig from "@arcgis/core/config.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import Graphic from "@arcgis/core/Graphic.js";
import ServiceAreaParameters from "@arcgis/core/rest/support/ServiceAreaParameters.js";
import FeatureSet from "@arcgis/core/rest/support/FeatureSet.js";
import * as serviceArea from "@arcgis/core/rest/serviceArea.js";
import networkService from "@arcgis/core/rest/networkService.js";
// import TravelMode from "@arcgis/core/rest/support/TravelMode.js";

@Component({
  tag: 'hub-compass-map',
  styleUrl: 'hub-compass-map.css',
  shadow: false,
})
export class HubCompassMap {

  @Prop() mapId: string = null;
  @Prop() center: [number, number] = [0,0];
  @Prop() datasetIds: string[] = [];
  @Prop() zoom: number = 10;
  // TODO fix travel mode
  @Prop() travelMode: any = null;
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
      this.createServiceAreas(this.mapView.center);
    });
    this.mapView.on("click", (event) => {
      this.createServiceAreas(event.mapPoint);
    });    
    
    if(!!this.datasetIds && this.datasetIds.length > 0) {
      this.datasetIds.forEach((datasetId) => {
        const datasetLayer = new FeatureLayer({
          portalItem: {
            id: datasetId
          }
        });

        console.debug('adding dataset layer', {datasetId, datasetLayer});
        
        this.webMap.add(datasetLayer);
      });
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
    // Create a and add the point
    const graphic = new Graphic({
      geometry,
      symbol: {
        // type: "simple-marker",
        color: "white",
        // size: 8
      }
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
