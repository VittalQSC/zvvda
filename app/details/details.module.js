import angular from 'angular'
import detailsComponent from './details.component'

const details = angular.module('details', [])
              .component('details2', detailsComponent)
              .name;

export default details;