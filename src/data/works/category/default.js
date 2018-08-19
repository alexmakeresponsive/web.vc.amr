var worksCodeIgniter = require('./codeigniter');
var worksWordpress = require('./wordpress');
var worksDefault = [];


function pushTo( arrTo, arrFrom ) {
    arrFrom.forEach(function(item) {
        arrTo.push(item);
    });
}




pushTo( worksDefault, worksCodeIgniter );
pushTo( worksDefault, worksWordpress );


module.exports = worksDefault;