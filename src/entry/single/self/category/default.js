function getCategory() {
    var pre = window.location.pathname.replace( /\/self\//g, '' );
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
    body: require('../../../../templates/partials/Body/single/self/category/default.handlebars')
};

var data = {
    nav:   require('../../../../data/navitems'),
    self: {
        category: require('../../../../data/self/category/' + getCategory() )
    }
};



var postId = getId();
var posts  = data.self.category;


function findPostId(array, postId) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].id === postId) return i;
    }
    return false;
}

var currentPostIndex = findPostId(posts, postId);
var self;
var error = '';

if ( currentPostIndex !== false ) {
    self = posts[currentPostIndex];
} else {
    self = {};
    error = 'Post not found';
}

// console.log(self);

function getWeb() {
    if ( self.web.length !== 0 ) {
        return self.web;
    }

    return null;
}

document.addEventListener("DOMContentLoaded", function() {
    var div = document.createElement('div');
    div.innerHTML = template.body({
        NavItems: data.nav,
        title: self.title,
        text: self.text,
        imgSrc: self.imgSrc,
        imgAlt: self.imgAlt,
        createDate: self.createDate,
        features: self.features,
        time: self.time,
        web: getWeb(),
        error: error,
    });
    document.body.appendChild(div);
});


