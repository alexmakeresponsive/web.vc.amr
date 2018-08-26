var urlHostPath = require('../../../hosting/path.js');
var linkValue   = urlHostPath + 'self/express.html';


var works = [
    {
        id: 1,
        link: linkValue,
        title: 'Express Authentification',
        text:  'Create secure pages for valid users',
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
            'Mongo',
            'Mongoose',
            'AsyncJS',
            'CryptoJS',
        ],
        time: {
            plan: '5 days',
            real: '5 days'
        }
    },
    {
        id: 2,
        link: linkValue,
        title: 'Express Simple CRUD',
        text:  'Create simple CRUD',
        imgSrc: urlHostPath + 'assets/images/works/category/codeigniter/1/1.png',
        imgAlt: '',
        createDate: '09-06-2018',
        letter: 'E',
        color: {
            color: '#ffffff',
            background: '#263f4a'
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
            plan: '1 days',
            real: '1 days'
        }
    }
];

module.exports = works;