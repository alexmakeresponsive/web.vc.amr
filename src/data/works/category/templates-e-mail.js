var urlHostPath = require('../../../hosting/path.js');
var linkValue   = urlHostPath + 'works/templates-e-mail.html';


var works = [
    {
        id: 1,
        link: linkValue,
        title: 'Biglead',
        text:  'Create E-mail template',
        imgSrc: urlHostPath + 'assets/images/works/category/e-mails/1/1.png',
        imgAlt: '',
        createDate: '02-06-2017',
        letter: 'B',
        color: {
            color: '#ffffff',
            background: '#be442f'
        },
        web: [
            {
                label: 'view',
                url: 'http://89-108-103-235.cloudvps.regruhosting.ru/projects/customer/templates-e-mail/biglead'
            },
            // {
            //     label: 'bitbucket',
            //     url: 'https://bitbucket.org/alexmakeresponsive/-PROJECT-NAME-/src'
            // }
        ],
        features: [
            'HTML', 'SASS', 'Bootstrap', 'jQuery', 'IE9+ Support'
        ],
        time: {
            plan: '1 days',
            real: '1 days'
        }
    },
    {
        id: 2,
        link: linkValue,
        title: 'Shtab Opmoscow',
        text:  'Create E-mail template',
        imgSrc: urlHostPath + 'assets/images/works/category/e-mails/2/1.png',
        imgAlt: '',
        createDate: '28-07-2018',
        letter: 'S',
        color: {
            color: '#ffffff',
            background: '#00b9f7'
        },
        web: [
            // {
            //     label: 'view',
            //     url: 'http://89-108-103-235.cloudvps.regruhosting.ru/'
            // }
        ],
        features: [
            'XHTML'
        ],
        time: {
            plan: '1 days',
            real: '1 days'
        }
    },
    {
        id: 3,
        link: linkValue,
        title: 'Evenza',
        text:  'Create E-mail template',
        imgSrc: urlHostPath + 'assets/images/works/category/e-mails/3/1.png',
        imgAlt: '',
        createDate: '03-02-2018',
        letter: 'E',
        color: {
            color: '#ffffff',
            background: '#d00b0f'
        },
        web: [
            {
                label: 'view',
                url: 'http://89-108-103-235.cloudvps.regruhosting.ru/projects/customer/templates-e-mail/evenza'
            }
        ],
        features: [
            'XHTML'
        ],
        time: {
            plan: '3 days',
            real: '3 days'
        }
    },
    {
        id: 4,
        link: linkValue,
        title: 'Nail Lifehacks',
        text:  'Create E-mail template',
        imgSrc: urlHostPath + 'assets/images/works/category/e-mails/4/1.png',
        imgAlt: '',
        createDate: '19-07-2017',
        letter: 'N',
        color: {
            color: '#ffffff',
            background: '#852e61'
        },
        web: [
            {
                label: 'view',
                url: 'http://89-108-103-235.cloudvps.regruhosting.ru/projects/customer/templates-e-mail/nail-lifehacks'
            }
        ],
        features: [
            'XHTML'
        ],
        time: {
            plan: '1 days',
            real: '1 days'
        }
    },
];

module.exports = works;