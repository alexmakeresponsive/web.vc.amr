var bookListingTemplate = require("../templates/partials/Body/BodyAbout.handlebars");

var NavItemsData = require('../data/navitems');


// import '../hub.js';



document.addEventListener("DOMContentLoaded", function() {
    var div = document.createElement('div');
    div.innerHTML = bookListingTemplate({
        username: "test",
        books: [
            { title: "About A book", synopsis: "With a description" },
            { title: "About Another book", synopsis: "From a very good author" },
            { title: "About Book without synopsis" }
        ],
        NavItems: NavItemsData
    });
    document.body.appendChild(div);
});
