/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface HubCompassMap {
        "center": [number, number];
        "datasetIds": string[];
        "mapId": string;
        "travelMode": any;
        "zoom": number;
    }
}
declare global {
    interface HTMLHubCompassMapElement extends Components.HubCompassMap, HTMLStencilElement {
    }
    var HTMLHubCompassMapElement: {
        prototype: HTMLHubCompassMapElement;
        new (): HTMLHubCompassMapElement;
    };
    interface HTMLElementTagNameMap {
        "hub-compass-map": HTMLHubCompassMapElement;
    }
}
declare namespace LocalJSX {
    interface HubCompassMap {
        "center"?: [number, number];
        "datasetIds"?: string[];
        "mapId"?: string;
        "travelMode"?: any;
        "zoom"?: number;
    }
    interface IntrinsicElements {
        "hub-compass-map": HubCompassMap;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "hub-compass-map": LocalJSX.HubCompassMap & JSXBase.HTMLAttributes<HTMLHubCompassMapElement>;
        }
    }
}
