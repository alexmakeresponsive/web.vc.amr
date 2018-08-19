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
    works: require('../data/works/category/default'),
    page: require('../data/pages/home'),
};


document.addEventListener("DOMContentLoaded", function() {

    var div = document.createElement('div');

    div.innerHTML = template.body({
        NavItems: data.nav.main,
        NavCategories: data.nav.works.categories,
        NavCategoriesLink: data.nav.categories,
        works: data.works,
        dataPage: data.page
    });

    // console.log(div.innerHTML);

    document.body.appendChild(div);
});


