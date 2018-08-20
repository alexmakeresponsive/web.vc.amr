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


window.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelector('#worksHomeContainer');
    var button    = document.querySelector('#buttonWorksHomeLoadMore');

    // console.log( container );
    // console.log( button );

    loadmore( data.works.last, container, button );
});



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


