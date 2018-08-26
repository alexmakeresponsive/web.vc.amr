module.exports = function ( nav, type ) {
    var result = [];

    function getCategoryItemWorks(item) {
        item.count = require('../data/' + type + '/category/' + item.id ).length;
        return item;
    }

    nav.forEach(function (item, index) {
        // console.log(item.id);
        result[index] = getCategoryItemWorks(item);
    });

    // console.log(result);

    return result;
};