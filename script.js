
// var month = d.getMonth()+1;
// var day = d.getDate();

// var minutes = d.getMinutes();

// var output =
// (month < 10 ? '0' : '') + month + '-' +
// (day < 10 ? '0' : '') + day + '-' +
// d.getFullYear() + " // " +
// d.getHours() + ":" +
// d.getMinutes();

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));


var d = new Date();
var hours = d.getHours();

function checkPresent() {

    for (time =6; time < 23; time++) {
        var timeblock = $("#" + time);
        console.log($("#" + time))

        if(time == hours) {
            timeblock.addClass("present")
        } else if (time < hours) {
            timeblock.addClass("past")
        } else {
            timeblock.addClass("future")
        }
        $("#" + time).val(localStorage.getItem("" + time));

    }
}
checkPresent();

function toDoEvent(event) {
    var userInput = $(this).siblings("input").val().trim();
    var hourId = $(this).siblings("input").attr("id");

    localStorage.setItem(hourId, userInput);
}

$(".saveBtn").on("click", toDoEvent)

//trash button delete input area and local storage data

function trashEvent(event) {

    var hoursId = $(this).siblings("input").attr("id");

    localStorage.removeItem(hoursId);
    $(this).siblings("input[type='text']").val(" ");

}

$(".trashBtn").on("click", trashEvent) 










