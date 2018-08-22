var urlHostPath = require('../../../hosting/path.js');
var linkValue   = urlHostPath + 'works/magento.html';


var works = [
    {
        id: 1,
        link: linkValue,
        title: 'Magento 1. Koltorah Online',
        text:  'Fix frontend bags',
        imgSrc: urlHostPath + 'assets/images/works/category/magento/1/1.png',
        imgAlt: '',
        createDate: '01-10-2017',
        letter: 'B',
        color: {
            color: '#ffffff',
            background: '#cb593a'
        },
        web: [
            {
                label: 'result',
                url: 'https://www.koltorahonline.com/'
            }
        ],
        features: [
            'Magento 1',
            'PHP',
            'SQL',
            'jQuery',
            'Google Captha'
        ],
        time: {
            plan: '7 days',
            real: '7 days'
        }
    },
    {
        id: 2,
        link: linkValue,
        title: 'Magento 2. Create FAQ Extension',
        text:  'Write magento module',
        imgSrc: urlHostPath + 'assets/images/works/category/magento/2/1.png',
        imgAlt: '',
        createDate: '01-02-2018',
        letter: 'F',
        color: {
            color: '#ffffff',
            background: '#9b9e84'
        },
        web: [
            {
                label: 'bitbucket',
                url: 'https://bitbucket.org/alexmakeresponsive/-PROJECT-NAME-/src'
            }
        ],
        features: [
            'Magento 2',
            'PHP',
            'SQL',
            'jQuery',
        ],
        time: {
            plan: '21 days',
            real: '21 days'
        }
    }
];

module.exports = works;