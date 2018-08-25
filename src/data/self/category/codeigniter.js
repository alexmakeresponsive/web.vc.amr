var urlHostPath = require('../../../hosting/path.js');
var linkValue   = urlHostPath + 'self/codeigniter.html';


var works = [
    {
        id: 1,
        link: linkValue,
        title: 'Routing',
        text:  'Create 3 pages for blog',
        imgSrc: urlHostPath + 'assets/images/works/category/codeigniter/1/1.png',
        imgAlt: '',
        createDate: '01-03-2018',
        letter: 'C',
        color: {
            color: '#ffffff',
            background: '#2c6c76'
        },
        web: [
            {
                label: 'view',
                url: 'https://alexmakeresponsive.ru'
            }
        ],
        features: [
            'Codeigniter',
            'PHP',
            'SQL',
            'jQuery'
        ],
        time: {
            plan: '3 days',
            real: '3 days'
        }
    }
];

module.exports = works;