var urlHostPath = require('../../../hosting/path.js');
var linkValue   = urlHostPath + 'works/templates-e-mail.html';


var works = [
    {
        id: 1,
        link: linkValue,
        title: 'Biglead',
        text:  'Create E-mail template',
        imgSrc: urlHostPath + 'assets/images/works/category/e-mails/1/1.png',
        imgAlt: '',
        createDate: '-',
        letter: 'B',
        color: {
            color: '#ffffff',
            background: '#be442f'
        }
    },
    {
        id: 2,
        link: linkValue,
        title: 'Shtab Opmoscow',
        text:  'Create E-mail template',
        imgSrc: urlHostPath + 'assets/images/works/category/e-mails/2/1.png',
        imgAlt: '',
        createDate: '-',
        letter: 'S',
        color: {
            color: '#ffffff',
            background: '#00b9f7'
        }
    },
    {
        id: 3,
        link: linkValue,
        title: 'Evenza',
        text:  'Create E-mail template',
        imgSrc: urlHostPath + 'assets/images/works/category/e-mails/3/1.png',
        imgAlt: '',
        createDate: '-',
        letter: 'E',
        color: {
            color: '#ffffff',
            background: '#d00b0f'
        }
    },
    {
        id: 4,
        link: linkValue,
        title: 'Nail Lifehacks',
        text:  'Create E-mail template',
        imgSrc: urlHostPath + 'assets/images/works/category/e-mails/4/1.png',
        imgAlt: '',
        createDate: '-',
        letter: 'N',
        color: {
            color: '#ffffff',
            background: '#852e61'
        }
    },
];

module.exports = works;