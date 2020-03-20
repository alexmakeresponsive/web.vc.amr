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
        },
        web: [
            {
                label: 'result',
                url: 'http://careerwoman.ru/'
            }
        ],
        features: [
            'Wordpress',
            'PHP',
            'SQL',
            'jQuery',
            'CSS'
        ],
        time: {
            plan: '10 days',
            real: '10 days'
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
        },
        web: [
            // {
            //     label: 'view',
            //     url: 'http://89-108-103-235.cloudvps.regruhosting.ru/'
            // },
            {
                label: 'instagram',
                url: 'https://www.instagram.com/wphospital/'
            },
            // {
            //     label: 'bitbucket',
            //     url: 'https://bitbucket.org/alexmakeresponsive/-PROJECT-NAME-/src'
            // }
        ],
        features: [
            'Wordpress',
            'PHP',
            'SQL',
        ],
        time: {
            plan: '25 days',
            real: '25 days'
        }
    },
    {
        id: 3,
        link: linkValue,
        title: 'Аренда автовышек',
        text:  'optimize index page speed for Goorle PageSpeedInsights, write plugin',
        imgSrc: urlHostPath + 'assets/images/works/category/wordpress/2/1.png',
        imgAlt: '',
        createDate: '01-09-2018',
        letter: 'A',
        color: {
            color: '#2e2c2d',
            background: '#ffc229'
        },
        web: [
            {
                label: 'result',
                url: 'http://arenda-autovishka.ru/'
            }
        ],
        features: [
            'Wordpress',
            'PHP',
            'SQL',
        ],
        time: {
            plan: '3 days',
            real: '3 days'
        }
    }
];

module.exports = works;