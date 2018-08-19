var template = {
    body: require('../templates/partials/Body/home.handlebars')
};

var data = {
    nav: {
        main: require('../data/navitems'),
        works: {
            categories: require('../data/pages/works/categories')
        }
    },
    // posts: require('../data/posts/categoryDefault/posts'),
    works: require('../data/works/category/default')
};


document.addEventListener("DOMContentLoaded", function() {

    var div = document.createElement('div');

    div.innerHTML = template.body({
        NavItems: data.nav.main,
        NavCategories: data.nav.works.categories,
        works: data.works
        // postsCategoryDefault: data.posts,
    });

    // console.log(div.innerHTML);

    document.body.appendChild(div);
});


