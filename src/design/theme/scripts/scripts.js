var a = [
    1,2,3,4
];

var ob = {
    row1: 'val 1',
    row2: 'val 2'
};

// console.log($('.header'));

var $ = vendorScripts.jQuery;
// console.log($2);
// var $ = jQuery;

// var $ = $;

// console.log('$ is -', $);

$( document ).ready(function() {
    // console.log( "ready!" );


    $('.header').css({color:'#4c4c4c'});



    var modalWrapper = $('#exampleModal');

    // console.log(modalWrapper);

    modalWrapper.modal('show');


    function hideModal() {
        modalWrapper.modal('hide');
        console.log('modal closed!');
    }

    setTimeout(hideModal, 2000);




    var modalFind = $('body').find('#exampleModal');

    // console.log(modalFind);
});





//
// $(document).on('click','#btnModal',function(){
//     console.log('click to btn modal. use delegate');
// });
//
//
//
// $(document).on( 'click', 'body', function(){
//     console.log('btn modal - ' +$('#exampleModal'));
// });



// $( "#btnModal" ).click(function() {
//     console.log('click to btn modal. without delegate');
// });
