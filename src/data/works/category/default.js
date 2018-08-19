var worksCodeIgniter = require('./codeigniter');
var worksWordpress   = require('./wordpress');
var worksMagento     = require('./magento');
var worksPHP     = require('./php');

var worksDefault = [];


function pushTo( arrTo, arrFrom ) {
    arrFrom.forEach(function(item) {
        arrTo.push(item);
    });
}




pushTo( worksDefault, worksCodeIgniter );
pushTo( worksDefault, worksWordpress );
pushTo( worksDefault, worksMagento );
pushTo( worksDefault, worksPHP );


module.exports = worksDefault;