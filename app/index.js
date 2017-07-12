window.jQuery = require('jquery');
import './style.css';
import './../static/css/flags.css';
import angular from 'angular';
import './../node_modules/angularjs-datepicker/src/css/angular-datepicker.css';
import 'angularjs-datepicker';
import {ngRoute} from 'angular-route';
import './components/navbar/navbar.module';
import './components/schedule/schedule.module';
import './components/mainItem/mainItem.module';
import './components/result/result.module';
import './components/resultNavigation/resultNavigation.module';
import './components/details/details.module';
import './components/regulations/regulations.module';
import './components/admin/createTournamentPage/createTournamentPage.module';
import homeRoute from  './routes/home.html'
import resultRoute from  './routes/result.html'
import regulationsRoute from  './routes/regulations.html'
import adminRoute from  './routes/admin.html'

import 'angular-translate';


const app = angular.module('app', ['ngRoute','navbar','schedule', 'mainItem', 'result', 
'resultNavigation', 'details', 'regulations', 'createTournamentPage', '720kb.datepicker']);

app
.config(function($routeProvider, $qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
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
