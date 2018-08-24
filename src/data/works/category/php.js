var urlHostPath = require('../../../hosting/path.js');
var linkValue   = urlHostPath + 'works/php.html';


var works = [
    {
        id: 1,
        link: linkValue,
        title: 'Центр помощи дольщикам',
        text:  'Clean and send mail via PHP',
        imgSrc: urlHostPath + 'assets/images/works/category/php/1/1.png',
        imgAlt: '',
        createDate: '16-07-2018',
        letter: 'D',
        color: {
            color: '#ffffff',
            background: '#232321'
        },
        web: [
            {
                label: 'result',
                url: 'http://ddurf.ru/'
            },
            // {
            //     label: 'bitbucket',
            //     url: 'https://bitbucket.org/alexmakeresponsive/-PROJECT-NAME-/src'
            // }
        ],
        features: [
            'PHP',
            'hosting'
        ],
        time: {
            plan: '2 days',
            real: '3 days'
        }
    },
    {
        id: 2,
        link: linkValue,
        title: 'Сервис предоставлени кредитов',
        text:  'Clean and send mail via PHP. Create 3 step form',
        imgSrc: urlHostPath + 'assets/images/works/category/php/2/1.png',
        imgAlt: '',
        createDate: '18-08-2018',
        letter: 'H',
        color: {
            color: '#ffffff',
            background: '#3db67a'
        },
        web: [
            {
                label: 'result',
                url: 'http://heeelp.ru/credit'
            },
            {
                label: 'result',
                url: 'http://heeelp.ru/credit/step2'
            },
            {
                label: 'result',
                url: 'http://heeelp.ru/work'
            },
            // {
            //     label: 'bitbucket',
            //     url: 'https://bitbucket.org/alexmakeresponsive/-PROJECT-NAME-/src'
            // }
        ],
        features: [
            'PHP',
            'jQuery'
        ],
        time: {
            plan: '10 days',
            real: '10 days'
        }
    },
    {
        id: 3,
        link: linkValue,
        title: 'Траснпортная компания Дилижанс ДВ',
        text:  'Clean and send mail via PHP',
        imgSrc: urlHostPath + 'assets/images/works/category/php/3/1.png',
        imgAlt: '',
        createDate: '11-11-2017',
        letter: 'D',
        color: {
            color: '#38414a',
            background: '#48becb'
        },
        web: [
            {
                label: 'result',
                url: 'http://www.dilijansdv.ru/'
            },
            // {
            //     label: 'bitbucket',
            //     url: 'https://bitbucket.org/alexmakeresponsive/-PROJECT-NAME-/src'
            // }
        ],
        features: [
            'PHP Mailer',
        ],
        time: {
            plan: '1 day',
            real: '1 day'
        }
    }
];

module.exports = works;