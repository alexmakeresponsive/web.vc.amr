var urlHostPath = require('../../../hosting/path.js');
var linkValue   = urlHostPath + 'self/javascript.html';


var works = [
    {
        id: 1,
        link: linkValue,
        title: 'Event emitter',
        text:  'Test: how event emiter worked',
        imgSrc: urlHostPath + 'assets/images/works/category/codeigniter/1/1.png',
        imgAlt: '',
        createDate: '05-07-2018',
        letter: 'E',
        color: {
            color: '#ffffff',
            background: '#6f7370'
        },
        web: [
            {
                label: 'view',
                url: 'https://alexmakeresponsive.ru'
            }
        ],
        features: [
            'ES5',
        ],
        time: {
            plan: '1 days',
            real: '1 days'
        }
    },
    {
        id: 2,
        link: linkValue,
        title: 'RequireJS: Easy start',
        text:  'create minimal boilerplate with RequireJS',
        imgSrc: urlHostPath + 'assets/images/works/category/codeigniter/1/1.png',
        imgAlt: '',
        createDate: '09-06-2018',
        letter: 'R',
        color: {
            color: '#ffffff',
            background: '#2a5173'
        },
        web: [
            {
                label: 'view',
                url: 'https://alexmakeresponsive.ru'
            }
        ],
        features: [
            'RequireJS',
        ],
        time: {
            plan: '1 days',
            real: '1 days'
        }
    }
];

module.exports = works;