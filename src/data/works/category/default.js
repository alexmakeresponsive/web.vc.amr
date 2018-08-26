var worksCodeIgniter = require('./codeigniter');
var worksWordpress   = require('./wordpress');
var worksMagento     = require('./magento');
var worksPHP     = require('./php');
var worksTemplates     = require('./templates-webpage');
var worksEMails     = require('./templates-e-mail');

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
pushTo( worksDefault, worksTemplates );
pushTo( worksDefault, worksEMails );


// console.log('count of works = ', worksDefault.length);

module.exports = worksDefault;