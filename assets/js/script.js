// get current date
$(document).ready(function () {
    $('#9 .desc').val(localStorage.getItem('9'));
    $('#10 .desc').val(localStorage.getItem('10'));
    $('#11 .desc').val(localStorage.getItem('11'));
    $('#12 .desc').val(localStorage.getItem('12'));
    $('#13 .desc').val(localStorage.getItem('13'));
    $('#14 .desc').val(localStorage.getItem('14'));
    $('#15 .desc').val(localStorage.getItem('15'));
    $('#16 .desc').val(localStorage.getItem('16'));
    $('#17 .desc').val(localStorage.getItem('17'));



    for (i = 9; i < 15; i++){
        var currentHour = moment().hours();
        var boxHour = i;
        if (currentHour > boxHour) {
            $(`.desc #${i}`).removeClass('box');
            $(`.desc #${i}`).addClass('past');
        } 
    }



    let saveBtnEl = $('.saveBtn');
    saveBtnEl.on('click', function () {
        // get nearby values
        var value = $(this).siblings('.desc').val();
        var time = $(this).parent().attr('id');
        // save in localStorage
        localStorage.setItem(time, value);


    var currentDate = moment().format("dddd, MMMM Do YYYY");

    $("#currentDay").text(currentDate);
});

});
// previous attempt at generating timeboxes with js
// var containerEl = $("#container")
// var rowEl = $("#row1");
// var rowEl = $("#row1");
// var timesEl = $("#times");
// for (i = 9; i < 17; i ++) {
//     $(timesEl).text(i);
//     $(rowEl).clone().appendTo(containerEl);
//     console.log(i); 
    //
    // let i = 0;
// }
// var x = document.getElementById("container");
// x.children[0]
// if (x.style.display === "none") {
//   x.style.display = "block";
// } else {
//   x.style.display = "none";
// }
// var y = document.getElementById("pullquestions");
// if (y.style.display === "block") {
//   y.style.display = "none";
// } else {
//   y.style.display = "block";
// }
// $(timesEl).text(i);

// var timeBlocks = $(body.container.col-1);
// for (let i = 9; i < 12; i += 1) {
//     $("timeBlocks").text(`${i}AM`)
