var urlHostPath = require('../../../hosting/path.js');
var linkValue   = urlHostPath + 'works/magento.html';


var works = [
    {
        id: 1,
        link: linkValue,
        title: 'Magento 1. Koltorah Online',
        text:  'Fix frontend bags',
        imgSrc: urlHostPath + 'assets/images/works/category/magento/1/1.png',
        imgAlt: '',
        createDate: '01-10-2017',
    },
    {
        id: 2,
        link: linkValue,
        title: 'Magento 2. Create FAQ Extension',
        text:  'Write logic via PHP',
        imgSrc: urlHostPath + 'assets/images/works/category/magento/2/1.png',
        imgAlt: '',
        createDate: '01-02-2018',
    }
];

module.exports = works;