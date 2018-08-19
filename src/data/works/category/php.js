var urlHostPath = require('../../../hosting/path.js');
var linkValue   = urlHostPath + 'works/php.html';


var works = [
    {
        id: 1,
        link: linkValue,
        title: 'Центр помощи дольщикам',
        text:  'Clean and send mail via PHP',
        imgSrc: urlHostPath + 'assets/images/works/category/php/1/1.png',
        imgAlt: '',
        createDate: '01-08-2018',
    },
    {
        id: 2,
        link: linkValue,
        title: 'Сервис предоставлени кредитов',
        text:  'Clean and send mail via PHP',
        imgSrc: urlHostPath + 'assets/images/works/category/php/2/1.png',
        imgAlt: '',
        createDate: '10-08-2018',
    }
];

module.exports = works;