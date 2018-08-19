

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
    works: require('../../data/works/category/' + getCategory() ),
};



document.addEventListener("DOMContentLoaded", function() {
    var div = document.createElement('div');
    div.innerHTML = template.body({
        dataPage: data.page,
        NavCategories: data.nav.works.categories,
        NavItems: data.nav.main,
        works: data.works
    });
    document.body.appendChild(div);
});
