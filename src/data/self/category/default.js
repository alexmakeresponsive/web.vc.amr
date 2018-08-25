var worksApi = require('./api');
var worksExpress = require('./express');
var worksReact = require('./react');
var worksReactNative = require('./reactnative');
var worksCodeIgniter = require('./codeigniter');
var worksWordpress   = require('./wordpress');
var worksEZPlatform   = require('./ezplatform');
var worksOctober   = require('./october');
var worksMagento     = require('./magento');
var worksPHP     = require('./php');
var worksYii     = require('./yii');
var worksTemplates     = require('./templates-webpage');

var worksDefault = [];


function pushTo( arrTo, arrFrom ) {
    arrFrom.forEach(function(item) {
        arrTo.push(item);
    });
}




pushTo( worksDefault, worksApi );
pushTo( worksDefault, worksExpress );
pushTo( worksDefault, worksReact );
pushTo( worksDefault, worksReactNative );
pushTo( worksDefault, worksCodeIgniter );
pushTo( worksDefault, worksWordpress );
pushTo( worksDefault, worksEZPlatform );
pushTo( worksDefault, worksOctober );
pushTo( worksDefault, worksMagento );
pushTo( worksDefault, worksPHP );
pushTo( worksDefault, worksYii );
pushTo( worksDefault, worksTemplates );


module.exports = worksDefault;