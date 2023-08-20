// To debug this code, open wixDefaultCustomElement.js in Developer Tools.

const H3_1_TEXT = 'View its code by clicking the Settings button and pasting the Server URL into a new browser tab.';
const DEBUG_TEXT = 'Loading the code for Custom Element \'wix-default-custom-element\'. To debug this code, open wixDefaultCustomElement.js in Developer Tools.';
const MAPBOX_KEY = 'pk.eyJ1IjoiY2F0YWx5emVzdiIsImEiOiJjazZ4d2RoN2gwa2QyM2tydnF6dG1zbjNrIn0.erXugBYot80KgmE2egMXCA';

const createH3 = (id, text) => {
    const h3Element = document.createElement('h3');
    h3Element.id = id;
    h3Element.textContent = text;
    return h3Element;
};

const createTextContainer = () => {
    const textContainer = document.createElement('div');
    textContainer.id = 'wdce-text-container';
    textContainer.appendChild(createH3('wdce-h3-1', H3_1_TEXT));
    return textContainer;
};

const createGeocoder = () => {
    const geocoder_element = document.createElement('div');
    const geocoder = new MapboxGeocoder({
        accessToken: MAPBOX_KEY,
        countries: 'us',
        proximity: [-121.898395, 37.322972],
        // localGeocoder: forwardGeocoder,
        placeholder: "Search address",
    });
    geocoder.addTo(geocoder_element);
    return geocoder_element;
}

const createStyle = () => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
    @import url("https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.css");
  `;
    return styleElement;
};

const createJS = () => {
    const jsElement = document.createElement('script');
    jsElement.src = "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.min.js";
    return jsElement;
}

class WixDefaultCustomElement extends HTMLElement {
    constructor() {
        super();
        console.log(DEBUG_TEXT);
    }
    connectedCallback() {
        this.appendChild(createJS());
        this.appendChild(createStyle());
        this.appendChild(createTextContainer());
        this.appendChild(createGeocoder());
    }
}
customElements.define('wix-default-custom-element', WixDefaultCustomElement);