var urlHostPath = require('../../../hosting/path.js');
var linkValue   = urlHostPath + 'self/express.html';


var works = [
    {
        id: 1,
        link: linkValue,
        title: 'Express Authentification',
        text:  '',
        imgSrc: urlHostPath + 'assets/images/works/category/codeigniter/1/1.png',
        imgAlt: '',
        createDate: '01-07-2018',
        letter: 'E',
        color: {
            color: '#ffffff',
            background: '#43454a'
        },
        web: [
            {
                label: 'view',
                url: 'https://alexmakeresponsive.ru'
            }
        ],
        features: [
            'Express',
            'Mongo'
        ],
        time: {
            plan: '5 days',
            real: '5 days'
        }
    }
];

module.exports = works;