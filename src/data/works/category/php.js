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
        letter: 'D',
        color: {
            color: '#ffffff',
            background: '#232321'
        }
    },
    {
        id: 2,
        link: linkValue,
        title: 'Сервис предоставлени кредитов',
        text:  'Clean and send mail via PHP',
        imgSrc: urlHostPath + 'assets/images/works/category/php/2/1.png',
        imgAlt: '',
        createDate: '10-08-2018',
        letter: 'H',
        color: {
            color: '#ffffff',
            background: '#3db67a'
        }
    },
    {
        id: 3,
        link: linkValue,
        title: 'Траснпортная компания Дилижанс ДВ',
        text:  'Clean and send mail via PHP',
        imgSrc: urlHostPath + 'assets/images/works/category/php/3/1.png',
        imgAlt: '',
        createDate: '10-11-2017',
        letter: 'D',
        color: {
            color: '#38414a',
            background: '#48becb'
        }
    }
];

module.exports = works;