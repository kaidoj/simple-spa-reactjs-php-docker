
import angular from 'angular';

const ComponentsModule = angular.module('app.components', []);

import AppHeader from './app-header/app-header.component';
ComponentsModule.component('appHeader', AppHeader);

import Leftbar from './leftbar/leftbar.component';
ComponentsModule.component('leftbar', Leftbar);

import Rightbar from './rightbar/rightbar.component';
ComponentsModule.component('rightbar', Rightbar);

import Tags from './tags/tags.component';
ComponentsModule.component('tags', Tags);

import Items from './items/items.component';
ComponentsModule.component('items', Items);

import Toolbar from './toolbar/toolbar.component';
ComponentsModule.component('toolbar', Toolbar);

import SearchInput from './search-input/search-input.component';
ComponentsModule.component('searchInput', SearchInput);

export default ComponentsModule;
