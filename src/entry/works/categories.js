

function getCategory() {
    var result;
    var pre = window.location.search.replace( /\?id_category=/g, '' );
    var pos = pre.search( /&/i );


    if ( pos === -1 ) {
        // console.log(pos);
        result = pre.slice( 0, pre.length );
    } else {
        result = pre.slice( 0, pos );
    }
    // console.log( result );


    if (result.length === 0) {
        return 'default';
    }

  return result;
}

var loadmore = require('../../logic/ajax/loadmore');

var template = {
    body: require('../../templates/partials/Body/works/categories.handlebars')
};

var data = {
    nav: {
        main: require('../../data/navitems'),
        works: {
            categories: require('../../data/pages/works/categories').data
        }
    },
    works: {
        first: require('../../data/works/category/' + getCategory() ).slice(0,2),
        last: require('../../data/works/category/' + getCategory() ).slice(2)
    },
};

window.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelector('#worksCategoriesContainer');
    var button    = document.querySelector('#buttonWorksCategoriesLoadMore');

    loadmore( data.works.last, container, button );
});



document.addEventListener("DOMContentLoaded", function() {
    var div = document.createElement('div');
    div.innerHTML = template.body({
        dataPage: data.page,
        NavCategories: data.nav.works.categories,
        NavItems: data.nav.main,
        works: data.works.first
    });
    document.body.appendChild(div);
});
