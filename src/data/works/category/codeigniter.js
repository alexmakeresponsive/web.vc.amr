var urlHostPath = require('../../../hosting/path.js');
var linkValue   = urlHostPath + 'works/codeigniter.html';


var works = [
    {
        id: 1,
        link: linkValue,
        title: 'Launchmaps',
        text:  'Extend some options on backend',
        imgSrc: urlHostPath + 'assets/images/works/category/codeigniter/1/1.png',
        imgAlt: '',
        createDate: '01-03-2018',
        letter: 'L',
        color: {
            color: '#ffffff',
            background: '#007cbe'
        },
        web: [
            {
                label: 'result',
                url: 'https://launchmaps.com/'
            }
        ],
        features: [
            'Codeigniter',
            'PHP',
            'SQL',
            'jQuery'
        ],
        time: {
            plan: '5 days',
            real: '5 days'
        }
    }
];

module.exports = works;