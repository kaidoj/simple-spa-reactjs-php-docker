import angular from 'angular';
import appComponent from './app.component';
import ComponentsModule from './components/components';
import AppService from './app.service';

angular.module('app', [
  ComponentsModule.name,
]).component('app', appComponent)
  .service('AppService', AppService)
  .directive("directiveWhenScrolled", function() {
    return function(scope, elm, attr) {
      var raw = elm[0];
  
      elm.bind('scroll', function() {
        if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
          scope.$apply(attr.directiveWhenScrolled);
        }
      });
    };
  });