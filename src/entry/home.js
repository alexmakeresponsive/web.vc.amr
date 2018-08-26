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
        last: require('../data/works/category/default').slice(2),
        all: require('../data/works/category/default')
    },
    self: {
        all: require('../data/self/category/default')
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



function getNavItems() {
    var result = [];

    function getItemWorks(item) {
        item.count = data.works.all.length;
        return item;
    }

    function getItemSelf(item) {
        item.count = data.self.all.length;
        return item;
    }

    // console.log(data.nav.main);

    data.nav.main.forEach(function (item, index) {
        // console.log(item);
        if (index === 2) {
            result[index] = getItemWorks(item);
            return;
        }

        if (index === 3) {
            result[index] = getItemSelf(item);
            return;
        }
        result[index] = item;
    });

    // console.log(result);

    return result;
}


document.addEventListener("DOMContentLoaded", function() {

    var div = document.createElement('div');

    div.innerHTML = template.body({
        NavItems: getNavItems(),
        NavCategories: data.nav.works.categories,
        NavCategoriesLink: data.nav.categories,
        works: data.works.first,
        dataPage: data.page
    });

    // console.log(div.innerHTML);

    document.body.appendChild(div);
});


