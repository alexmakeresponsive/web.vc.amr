var urlHostPath = require('../../../hosting/path.js');
var linkValue   = urlHostPath + 'works/wordpress.html';


var works = [
    {
        id: 1,
        link: linkValue,
        title: 'Career Woman',
        text:  'Extend theme, change styles',
        imgSrc: urlHostPath + 'assets/images/works/category/wordpress/1/1.png',
        imgAlt: '',
        createDate: '01-10-2016',
        letter: 'C',
        color: {
            color: '#ffffff',
            background: '#232321'
        }
    },
    {
        id: 2,
        link: linkValue,
        title: 'White Plains Hospital',
        text:  'Create wordpress theme, use plugins',
        imgSrc: urlHostPath + 'assets/images/works/category/wordpress/2/1.png',
        imgAlt: '',
        createDate: '05-06-2017',
        letter: 'W',
        color: {
            color: '#ffffff',
            background: '#427290'
        }
    }
];

module.exports = works;