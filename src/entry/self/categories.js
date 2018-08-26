

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

var getNavItems = require('../../logic/getNavItems');
var getNavCategoriesItems = require('../../logic/getNavCategoriesItems');

var template = {
    body: require('../../templates/partials/Body/self/categories.handlebars')
};

var data = {
    nav: {
        main: require('../../data/navitems'),
        self: {
            categories: require('../../data/pages/self/categories').data
        }
    },
    self: {
        first: require('../../data/self/category/' + getCategory() ).slice(0,2),
        last: require('../../data/self/category/' + getCategory() ).slice(2),
        all: require('../../data/self/category/default')
    },
    works: {
        all: require('../../data/works/category/default')
    }
};

window.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelector('#selfCategoriesContainer');
    var button    = document.querySelector('#buttonSelfCategoriesLoadMore');

    console.log( data.self.first );

    loadmore( data.self.last, container, button );
});



document.addEventListener("DOMContentLoaded", function() {
    var div = document.createElement('div');
    div.innerHTML = template.body({
        dataPage: data.page,
        NavCategories: getNavCategoriesItems( data.nav.self.categories, 'self' ),
        NavItems: getNavItems( data.nav.main, data.works.all, data.self.all ),
        self: data.self.first
    });
    document.body.appendChild(div);
});
