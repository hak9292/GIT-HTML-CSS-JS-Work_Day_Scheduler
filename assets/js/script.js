// get current date
var currentDate = moment().format("dddd, MMMM Do YYYY");
// console.log(currentDate);
// put in timeblocks in html
    //use rows and columns--
// jquery set text
$("#currentDay").text(currentDate);
































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
// }