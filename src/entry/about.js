


var template = {
    body: require('../templates/partials/Body/about.handlebars')
};

var data = {
    nav:  require('../data/navitems'),
    page: require('../data/pages/about'),
};



document.addEventListener("DOMContentLoaded", function() {
    var div = document.createElement('div');
    div.innerHTML = template.body({
        dataPage: data.page,
        NavItems: data.nav
    });
    document.body.appendChild(div);
});
