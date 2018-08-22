module.exports = function ( data, container, button  ) {
        // console.log(container);
        // console.log(button);


        if ( !button && !container ) {
            // console.log( container );
            // console.log( button );
            console.log('return!');
            return;
        }

        // console.log( container );
        // console.log( button );


        var works = {
            last: data
        };


        button.addEventListener('click', function () {
            console.log('load 2 works!');

            works.last.forEach(function (work, index) {
                if ( index > 1 ) {
                    return;
                }

                var item = document.createElement('div');
                    item.classList.add('item');
                var body;

                body = '';
                body += '<a class="link" href="' + work.link + '?id=' + work.id + '">';
                // body += '<div class="imgWr">';
                // body += '<img class="imgH" src="' + work.imgSrc + '" alt="">';
                // body += '</div>';
                body += '<div class="wr" style="background-color: ' + work.color.background + '; color: ' + work.color.color + '">';
                body += '<span>' + work.letter + '</span>';
                body += '</div>';
                body += '</a>';
                // body += '<a class="link" href="' + work.link + '?id=' + work.id + '">';
                // body += '<h3>';
                // body += work.title;
                // body += '</h3>';
                // body += '</a>';
                // body += '<div class="text">';
                // body += work.text;
                // body += '</div>';
                // body += '<span class="date">';
                // body += work.createDate;
                // body += '</span>';

                item.innerHTML = body;

                container.appendChild(item);
            });

            works.last = works.last.slice(2);

            console.log(works.last);
        })

};
