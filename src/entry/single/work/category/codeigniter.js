
var template = {
    body: require('../../../../templates/partials/Body/single/work/category/default.handlebars')
};

var data = {
    nav:   require('../../../../data/navitems'),
    // post: {
    //     category: require('../../../../data/posts/categoryDefault/posts')
    // },
    work: {
        category: require('../../../../data/works/category/codeigniter')
    }
};


var postId = window.location.search.replace( /^\D+/g, '') * 1;
var posts  = data.work.category;


function findPostId(array, postId) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].id === postId) return i;
    }
    return false;
}

var currentPostIndex = findPostId(posts, postId);
var postData;
var error = '';

if ( currentPostIndex !== false ) {
    postData = posts[currentPostIndex];
} else {
    postData = {};
    error = 'Post not found';
}

// console.log(postData);


document.addEventListener("DOMContentLoaded", function() {
    var div = document.createElement('div');
    div.innerHTML = template.body({
        NavItems: data.nav,
        title: postData.title,
        text: postData.text,
        imgSrc: postData.imgSrc,
        imgAlt: postData.imgAlt,
        createDate: postData.createDate,
        error: error,
    });
    document.body.appendChild(div);
});


