import * as ng from '@angular/core';

import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdRadioButton, MdRadioGroup, MdRadioDispatcher} from '@angular2-material/radio';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

//import {AppComponent} from './app.component';
import { Component, ViewChild } from '@angular/core';
import { MapComponent } from './map.component';
import { SearchComponent } from './search.component';
import { LegendComponent } from './legend.component';
import { BasemapSelect } from './basemapselect.component';
import { LayerComponent } from './layer.component';

//import {DynamicComponent} from './DynamicComponent';

@ng.Component({
  selector: 'my-app',
  templateUrl:'app/pup.html',
  styleUrls: ['app/pup.css'],
  directives: [
    //DynamicHTMLOutlet,
    //AppComponent,
    MapComponent, SearchComponent, LegendComponent, BasemapSelect, LayerComponent,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdInput,
    MdCheckbox,
    MdRadioGroup,
    MdRadioButton,
    MdIcon
  ],
  providers: [MdIconRegistry, MdRadioDispatcher],

})
export class PupComponent {
// references to child components
  @ViewChild(MapComponent) mapComponent:MapComponent;
  @ViewChild(SearchComponent) searchComponent:SearchComponent;
  @ViewChild(LegendComponent) legendComponent:LegendComponent;
  @ViewChild(BasemapSelect) basemapSelect:BasemapSelect;
  @ViewChild(LayerComponent) LayerComponent:LayerComponent;

  title = 'Map Title';

  // map config
  itemId = '8e42e164d4174da09f61fe0d3f206641';
  public mapOptions = {
    basemap: 'gray',
    center: [-97, 38], // lon, lat
    zoom: 5
  };

  // search config
  public searchOptions = {
    enableButtonMode: true, //this enables the search widget to display as a single button
    enableLabel: false,
    enableInfoWindow: true,
    showInfoWindowOnSelect: false,
  };

  // once the map loads
  onMapLoad(response) {
    const map = response.map;

    // bind the search dijit to the map
    this.searchComponent.setMap(map);
    // initialize the leged dijit with map and layer infos
    this.legendComponent.init(map, response.layerInfos);
    // set the selected basemap
    this.basemapSelect.selectedBasemap = response.basemapName;
    // bind the map title
    this.title = response.itemInfo.item.title;
    //bind the legendlayer
    this.LayerComponent.init(response);
  }

  // set map's basemap in response to user changes
  onBasemapSelected(basemapName) {
    this.mapComponent.setBasemap(basemapName);
  }

}
