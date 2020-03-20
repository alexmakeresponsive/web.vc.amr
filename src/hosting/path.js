/*
* Create path for hosting sources
* */

var locationOrigin = window.location.origin;
var urlHostPath;


if ( locationOrigin === 'https://alexmakeresponsive.ru' ) {
    urlHostPath = locationOrigin + '/projects/self/html/amr/hbs/';
} else {
    urlHostPath = locationOrigin + '/';
}


module.exports = urlHostPath;