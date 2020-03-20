var getNavItems = require('../../../../logic/getNavItems');

function getCategory() {
    var pre = window.location.pathname.replace( /\/works\//g, '' );
    var result = pre.replace( /.html/g, '' );

    // console.log(pre);
    // console.log(result);


    if (result.length === 0) {
        return 'default';
    }

    return result;
}

function getId() {
    return window.location.search.replace( /^\D+/g, '') * 1;
}


var template = {
    body: require('../../../../templates/partials/Body/single/work/category/default.handlebars')
};

var data = {
    nav:   require('../../../../data/navitems'),
    work: {
        category: require('../../../../data/works/category/' + getCategory() )
    },
    works: {
        all: require('../../../../data/works/category/default')
    },
    self: {
        all: require('../../../../data/self/category/default')
    }
};



var postId = getId();
var posts  = data.work.category;


function findPostId(array, postId) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].id === postId) return i;
    }
    return false;
}

var currentPostIndex = findPostId(posts, postId);
var work;
var error = '';

if ( currentPostIndex !== false ) {
    work = posts[currentPostIndex];
} else {
    work = {};
    error = 'Post not found';
}

// console.log(work);

function getWeb() {
    if ( work.web.length !== 0 ) {
        return work.web;
    }

    return null;
}

document.addEventListener("DOMContentLoaded", function() {
    var div = document.createElement('div');
    div.innerHTML = template.body({
        NavItems: getNavItems( data.nav, data.works.all, data.self.all ),
        title: work.title,
        text: work.text,
        imgSrc: work.imgSrc,
        imgAlt: work.imgAlt,
        createDate: work.createDate,
        features: work.features,
        time: work.time,
        web: getWeb(),
        error: error,
    });
    document.body.appendChild(div);
});


