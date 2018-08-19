


var template = {
    body: require('../../templates/partials/Body/works/category.handlebars')
};

var data = {
    nav:  require('../../data/navitems'),
    page: require('../../data/pages/works/category'),
};



document.addEventListener("DOMContentLoaded", function() {
    var div = document.createElement('div');
    div.innerHTML = template.body({
        dataPage: data.page,
        NavCategories: null,
        NavItems: data.nav
    });
    document.body.appendChild(div);
});
