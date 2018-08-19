var worksCodeIgniter = require('./codeigniter');
var worksDefault = [];


function pushTo( arrTo, arrFrom ) {
    arrFrom.forEach(function(item) {
        arrTo.push(item);
    });
}




pushTo( worksDefault, worksCodeIgniter );


module.exports = worksDefault;