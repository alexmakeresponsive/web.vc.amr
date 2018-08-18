var urlHostPath = require('../../../hosting/path.js');
var linkValue   = urlHostPath + 'default.html';


var posts =[
    {
        id: 1,
        link: linkValue,
        title: 'Title 1',
        text:  'Text 1',
        imgSrc: urlHostPath + 'assets/images/img-1.jpg',
        imgAlt: 'alt 1',
        createDate: '19-05-2018'
    },
    {
        id: 2,
        link: linkValue,
        title: 'Title 2',
        text:  'Text 2',
        imgSrc: urlHostPath + 'assets/images/img-2.jpg',
        imgAlt: 'alt 2',
        createDate: '21-05-2018'
    },
    {
        id: 3,
        link: linkValue,
        title: 'Blackbox Linux 4',
        text:  'This penetration testing Linux distribution is based on Ubuntu. It comes with a wide range of security assessment tools that help you in web and network analysis etc.\n',
        imgSrc: urlHostPath + 'assets/images/img-3.jpg',
        imgAlt: 'alt 3',
        createDate: '24-05-2018'
    }
];

module.exports = posts;