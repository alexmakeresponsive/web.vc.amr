

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
        last: require('../../data/self/category/' + getCategory() ).slice(2)
    },
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
        NavCategories: data.nav.self.categories,
        NavItems: data.nav.main,
        self: data.self.first
    });
    document.body.appendChild(div);
});
