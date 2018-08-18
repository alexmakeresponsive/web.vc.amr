import bookListingTemplate from "../../../../templates/partials/Body/single/post/BodySinglePostDefault.handlebars";

import NavItemsData from '../../../../data/navitems';
import postsCategoryDefaultData from '../../../../data/posts/categoryDefault/posts';


// import '../../../../hub.js';


var postId = window.location.search.replace( /^\D+/g, '') * 1;
var posts  = postsCategoryDefaultData;


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
    div.innerHTML = bookListingTemplate({
        NavItems: NavItemsData,
        title: postData.title,
        text: postData.text,
        imgSrc: postData.imgSrc,
        imgAlt: postData.imgAlt,
        createDate: postData.createDate,
        error: error,
    });
    document.body.appendChild(div);
});


