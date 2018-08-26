

module.exports = function ( nav, works, self ) {
    var result = [];

    function getItemWorks(item) {
        item.count = works.length;
        return item;
    }

    function getItemSelf(item) {
        item.count = self.length;
        return item;
    }

    // console.log(data.nav.main);

    nav.forEach(function (item, index) {
        // console.log(item);
        if (index === 2) {
            result[index] = getItemWorks(item);
            return;
        }

        if (index === 3) {
            result[index] = getItemSelf(item);
            return;
        }
        result[index] = item;
    });

    // console.log(result);

    return result;
}