import angular from 'angular'
import regulationsComponent from './regulations.component'

const regulations = angular.module('regulations', [])
              .component('regulations', regulationsComponent)
              .name;

export default regulations;