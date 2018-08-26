var urlHostPath = require('../../../hosting/path.js');
var linkValue   = urlHostPath + 'self/api.html';


var works = [
    {
        id: 1,
        link: linkValue,
        title: 'VK API',
        text:  'Use vk api via jQuery',
        imgSrc: urlHostPath + 'assets/images/works/category/codeigniter/1/1.png',
        imgAlt: '',
        createDate: '05-06-2018',
        letter: 'V',
        color: {
            color: '#ffffff',
            background: '#678095'
        },
        web: [
            {
                label: 'bitbucket',
                url: 'https://bitbucket.org/alexmakeresponsive/jquery-vk-api/src/master/'
            }
        ],
        features: [
            'VK API',
            'jQuery'
        ],
        time: {
            plan: '7 days',
            real: '7 days'
        }
    },
    {
        id: 2,
        link: linkValue,
        title: 'VK API',
        text:  'Use vk api via NodeJS',
        imgSrc: urlHostPath + 'assets/images/works/category/codeigniter/1/1.png',
        imgAlt: '',
        createDate: '10-06-2018',
        letter: 'V',
        color: {
            color: '#ffffff',
            background: '#345b8e'
        },
        web: [
            {
                label: 'bitbucket',
                url: 'https://bitbucket.org/alexmakeresponsive/nodejs-vk-api-via-promises/src/master/'
            }
        ],
        features: [
            'VK API',
            'Express',
            'Promises',
        ],
        time: {
            plan: '7 days',
            real: '7 days'
        }
    },
];

module.exports = works;