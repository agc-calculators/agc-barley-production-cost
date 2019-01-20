/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import './stencil.core';




export namespace Components {

  interface AgcBarleyProductionCostInputs {
    'socket': string;
  }
  interface AgcBarleyProductionCostInputsAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcBarleyProductionCostProgress {
    'socket': string;
  }
  interface AgcBarleyProductionCostProgressAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcBarleyProductionCostResultsPlaceholder {}
  interface AgcBarleyProductionCostResultsPlaceholderAttributes extends StencilHTMLAttributes {}

  interface AgcBarleyProductionCostResults {
    'socket': string;
  }
  interface AgcBarleyProductionCostResultsAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcBarleyProductionCost {
    'mode': "full" | "step";
    'socket': string;
    'tract': string;
    'units': any;
  }
  interface AgcBarleyProductionCostAttributes extends StencilHTMLAttributes {
    'mode'?: "full" | "step";
    'onAgcCalculated'?: (event: CustomEvent) => void;
    'onAgcStepChanged'?: (event: CustomEvent) => void;
    'socket'?: string;
    'tract'?: string;
    'units'?: any;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AgcBarleyProductionCostInputs': Components.AgcBarleyProductionCostInputs;
    'AgcBarleyProductionCostProgress': Components.AgcBarleyProductionCostProgress;
    'AgcBarleyProductionCostResultsPlaceholder': Components.AgcBarleyProductionCostResultsPlaceholder;
    'AgcBarleyProductionCostResults': Components.AgcBarleyProductionCostResults;
    'AgcBarleyProductionCost': Components.AgcBarleyProductionCost;
  }

  interface StencilIntrinsicElements {
    'agc-barley-production-cost-inputs': Components.AgcBarleyProductionCostInputsAttributes;
    'agc-barley-production-cost-progress': Components.AgcBarleyProductionCostProgressAttributes;
    'agc-barley-production-cost-results-placeholder': Components.AgcBarleyProductionCostResultsPlaceholderAttributes;
    'agc-barley-production-cost-results': Components.AgcBarleyProductionCostResultsAttributes;
    'agc-barley-production-cost': Components.AgcBarleyProductionCostAttributes;
  }


  interface HTMLAgcBarleyProductionCostInputsElement extends Components.AgcBarleyProductionCostInputs, HTMLStencilElement {}
  var HTMLAgcBarleyProductionCostInputsElement: {
    prototype: HTMLAgcBarleyProductionCostInputsElement;
    new (): HTMLAgcBarleyProductionCostInputsElement;
  };

  interface HTMLAgcBarleyProductionCostProgressElement extends Components.AgcBarleyProductionCostProgress, HTMLStencilElement {}
  var HTMLAgcBarleyProductionCostProgressElement: {
    prototype: HTMLAgcBarleyProductionCostProgressElement;
    new (): HTMLAgcBarleyProductionCostProgressElement;
  };

  interface HTMLAgcBarleyProductionCostResultsPlaceholderElement extends Components.AgcBarleyProductionCostResultsPlaceholder, HTMLStencilElement {}
  var HTMLAgcBarleyProductionCostResultsPlaceholderElement: {
    prototype: HTMLAgcBarleyProductionCostResultsPlaceholderElement;
    new (): HTMLAgcBarleyProductionCostResultsPlaceholderElement;
  };

  interface HTMLAgcBarleyProductionCostResultsElement extends Components.AgcBarleyProductionCostResults, HTMLStencilElement {}
  var HTMLAgcBarleyProductionCostResultsElement: {
    prototype: HTMLAgcBarleyProductionCostResultsElement;
    new (): HTMLAgcBarleyProductionCostResultsElement;
  };

  interface HTMLAgcBarleyProductionCostElement extends Components.AgcBarleyProductionCost, HTMLStencilElement {}
  var HTMLAgcBarleyProductionCostElement: {
    prototype: HTMLAgcBarleyProductionCostElement;
    new (): HTMLAgcBarleyProductionCostElement;
  };

  interface HTMLElementTagNameMap {
    'agc-barley-production-cost-inputs': HTMLAgcBarleyProductionCostInputsElement
    'agc-barley-production-cost-progress': HTMLAgcBarleyProductionCostProgressElement
    'agc-barley-production-cost-results-placeholder': HTMLAgcBarleyProductionCostResultsPlaceholderElement
    'agc-barley-production-cost-results': HTMLAgcBarleyProductionCostResultsElement
    'agc-barley-production-cost': HTMLAgcBarleyProductionCostElement
  }

  interface ElementTagNameMap {
    'agc-barley-production-cost-inputs': HTMLAgcBarleyProductionCostInputsElement;
    'agc-barley-production-cost-progress': HTMLAgcBarleyProductionCostProgressElement;
    'agc-barley-production-cost-results-placeholder': HTMLAgcBarleyProductionCostResultsPlaceholderElement;
    'agc-barley-production-cost-results': HTMLAgcBarleyProductionCostResultsElement;
    'agc-barley-production-cost': HTMLAgcBarleyProductionCostElement;
  }


}
