var urlHostPath = require('../hosting/path.js');


var NavItems = [
    {label: 'Blog',  href: urlHostPath + 'blog.html'},
    {label: 'About', href: urlHostPath + 'about.html'},
    {label: 'Works for customers', href: urlHostPath + 'works/categories.html'},
    {label: 'Self Experiments', href: urlHostPath + 'self/categories.html'},

    // {label: '', href: '', className: 'spacerLogo'},
];

module.exports = NavItems;