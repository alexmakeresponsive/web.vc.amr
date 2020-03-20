var urlHostPath = require('../../../hosting/path.js');
var linkValue   = urlHostPath + 'self/php.html';


var works = [
    {
        id: 1,
        link: linkValue,
        title: 'PHP App',
        text:  'Devschool: My Graduation work',
        imgSrc: urlHostPath + 'assets/images/works/category/codeigniter/1/1.png',
        imgAlt: '',
        createDate: '20-06-2016',
        letter: 'P',
        color: {
            color: '#ffffff',
            background: '#873342'
        },
        web: [
            {
                label: 'view',
                url: 'http://89-108-103-235.cloudvps.regruhosting.ru/projects/self/php/devschool/'
            }
        ],
        features: [
            'PHP',
            'MySQL',
            'dbsimple',
            'Ajax',
            'jQuery',
        ],
        time: {
            plan: '21 days',
            real: '21 days'
        }
    }
];

module.exports = works;