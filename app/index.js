window.jQuery = require('jquery');
import './style.css'
import angular from 'angular';
import {ngRoute} from 'angular-route';
import './navbar/navbar.module';
import './schedule/schedule.module';
import './mainItem/mainItem.module';
import './result/result.module';
import homeRoute from  './routes/home.html'
import resultRoute from  './routes/result.html'
const app = angular.module('app', ['ngRoute','navbar','schedule', 'mainItem', 'result']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        template : homeRoute
    })
    .when("/london", {
        template : "london.htm",
    })
    .when("/paris", {
        template : "paris.htm",
    })
    .when("/result", {
        template : resultRoute,
    })
    .otherwise({
        template: homeRoute
    });
});
