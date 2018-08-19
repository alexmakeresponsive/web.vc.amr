var homeprojectsCodeIgniter = require('./codeigniter');
var homeprojectsWordpress = require('./wordpress');
var homeprojectsDefault = [];


function pushTo( arrTo, arrFrom ) {
    arrFrom.forEach(function(item) {
        arrTo.push(item);
    });
}




pushTo( homeprojectsDefault, homeprojectsCodeIgniter );
pushTo( homeprojectsDefault, homeprojectsWordpress );


module.exports = homeprojectsDefault;