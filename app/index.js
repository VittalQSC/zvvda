window.jQuery = require('jquery');
import './style.css';
import './static/css/flags.css';
import angular from 'angular';
import './../node_modules/angularjs-datepicker/src/css/angular-datepicker.css';
import 'angularjs-datepicker';
import {ngRoute} from 'angular-route';
import './navbar/navbar.module';
import './schedule/schedule.module';
import './mainItem/mainItem.module';
import './result/result.module';
import './resultNavigation/resultNavigation.module';
import './details/details.module';
import './regulations/regulations.module';
import './admin/createTournamentPage/createTournamentPage.module';
import homeRoute from  './routes/home.html'
import resultRoute from  './routes/result.html'
import regulationsRoute from  './routes/regulations.html'
import adminRoute from  './routes/admin.html'
const app = angular.module('app', ['ngRoute','navbar','schedule', 'mainItem', 'result', 
'resultNavigation', 'details', 'regulations', 'createTournamentPage', '720kb.datepicker']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        template : homeRoute
    })
    .when("/result", {
        template : resultRoute,
    })
    .when("/regulations", {
        template : regulationsRoute,
    })
    .when("/admin", {
        template : adminRoute,
    })
    .otherwise({
        template: homeRoute
    });
});
