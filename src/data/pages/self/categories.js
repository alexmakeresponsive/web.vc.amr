var urlHostPath = require('../../../hosting/path.js');
var linkValue   = urlHostPath + 'self/categories.html';
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
    title: 'Selp projects by categories',
    text: 'Select category',
    link: linkValue,
    data: [
        {
            id: 'default',
            label: 'Default',
            link: linkValue
        },
        {
            id: 'api',
            label: 'API',
            link: linkValue
        },
        {
            id: 'codeigniter',
            label: 'Codeigniter',
            link: linkValue
        },
        {
            id: 'express',
            label: 'Express Framework',
            link: linkValue
        },
        {
            id: 'react',
            label: 'React',
            link: linkValue
        },
        {
            id: 'javascript',
            label: 'Javascript',
            link: linkValue
        },
        // {
        //     id: 'reactnative',
        //     label: 'React Native',
        //     link: linkValue
        // },
        // {
        //     id: 'ezplatform',
        //     label: 'EZ Platform',
        //     link: linkValue
        // },
        // {
        //     id: 'wordpress',
        //     label: 'CMS Wordpress',
        //     link: linkValue
        // },
        // {
        //     id: 'october',
        //     label: 'CMS October',
        //     link: linkValue
        // },
        // {
        //     id: 'magento',
        //     label: 'CMS Magento',
        //     link: linkValue
        // },
        {
            id: 'php',
            label: 'Pure PHP',
            link: linkValue
        },
        {
            id: 'yii',
            label: 'Yii',
            link: linkValue
        },
        {
            id: 'css',
            label: 'CSS Tricks',
            link: linkValue
        },,
        {
            id: 'templates-webpage',
            label: 'HTML and React Templates',
            link: linkValue
        },
    ]
};

module.exports = data;