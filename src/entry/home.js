var loadmore = require('../logic/ajax/loadmore');

var template = {
    body: require('../templates/partials/Body/home.handlebars')
};

var data = {
    nav: {
        main: require('../data/navitems'),
        works: {
            categories: require('../data/pages/works/categories').data
        },
        categories: require('../data/pages/works/categories').link
    },
    works: {
        first: require('../data/works/category/default').slice(0,2),
        last: require('../data/works/category/default').slice(2)
    },
    page: require('../data/pages/home'),
};





loadmore( data.works.last );




document.addEventListener("DOMContentLoaded", function() {

    var div = document.createElement('div');

    div.innerHTML = template.body({
        NavItems: data.nav.main,
        NavCategories: data.nav.works.categories,
        NavCategoriesLink: data.nav.categories,
        works: data.works.first,
        dataPage: data.page
    });

    // console.log(div.innerHTML);

    document.body.appendChild(div);
});


