var urlHostPath = require('../../../hosting/path.js');
var linkValue   = urlHostPath + 'self/yii.html';


var works = [
    {
        id: 1,
        link: linkValue,
        title: 'Admin part for website',
        text:  '',
        imgSrc: urlHostPath + 'assets/images/works/category/codeigniter/1/1.png',
        imgAlt: '',
        createDate: '20-08-2016',
        letter: 'Y',
        color: {
            color: '#ffffff',
            background: '#3980b4'
        },
        web: [
            {
                label: 'view',
                url: 'https://alexmakeresponsive.ru'
            }
        ],
        features: [
            'Yii 1',
            'MySQL'
        ],
        time: {
            plan: '5 days',
            real: '5 days'
        }
    }
];

module.exports = works;