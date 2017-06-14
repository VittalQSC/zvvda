window.jQuery = require('jquery');
import './style.css'
import angular from 'angular';
import './navbar/navbar.module';
import './schedule/schedule.module';
import './mainItem/mainItem.module';
const app = angular.module('app', ['navbar','schedule', 'mainItem'])
