var urlHostPath = require('../../../hosting/path.js');
var linkValue   = urlHostPath + 'works/categories.html';
// var data = {
//     title: 'Page for select category',
//     text: 'Hello, select category please',
//
//     categories: [
//         {
//             id: 'codeigniter',
//             label: 'CodeIgniter',
//             link: '/link/path'
//         }
//     ]
// };

var data = {
    title: 'Works by categories',
    text: 'Select category',
    link: linkValue,
    data: [
        {
            id: 'default',
            label: 'Default',
            link: linkValue
        },
        {
            id: 'codeigniter',
            label: 'CodeIgniter',
            link: linkValue
        },
        {
            id: 'wordpress',
            label: 'CMS Wordpress',
            link: linkValue
        },
        {
            id: 'magento',
            label: 'CMS Magento',
            link: linkValue
        },
        {
            id: 'php',
            label: 'Pure PHP',
            link: linkValue
        },
        {
            id: 'templates-html',
            label: 'HTML Templates',
            link: linkValue
        },
        {
            id: 'templates-e-mail',
            label: 'E-mail Templates',
            link: linkValue
        }
    ]
};

module.exports = data;