//function that takes aray of floating points
// rounds them
// and pushes them into a new array

//var numArray = [1.25, 2.75, 0.90, 5.10];
//
//function roundNums(numArray) {
//    roundedArray = [];
//    for (i = 0; i < numArray.length; i++) {
//        var nums = Math.round(numArray[i]);
//        roundedArray.push(nums);
//    }
//
//    console.log(roundedArray);
//}
//
//roundNums(numArray);


//function creates random in range and outputs an array
//----------------------------------------------------//
//function randomNum(min, max) {
//    var newArray = [];
//    for (i = 0; i < 10; i++) {
//        var randomInRange = Math.floor(Math.random() * (max - min + 1) + min);
//        newArray.push(randomInRange);
//    }
//    return newArray;
//}

//Function that creates a few variables which store
// the whole date, one for current hour, one for the current minute, and one for the current second.

function formatTime(timeDenom) {
    if (timeDenom < 10) {
        return "0" + timeDenom;
    } else {
        return timeDenom;
    }
}

function displayTime() {
    var now = new Date();
    var hh = formatTime(now.getHours());
    var mm = formatTime(now.getMinutes());
    var ss = formatTime(now.getSeconds());

    if (hh > 12) {
        var clock = "" + (hh - 12) + ":" + mm + ":" + ss + "" + " PM";
    } else {
        var clock = "" + hh + ":" + mm + ":" + ss + "" + "AM";
    }
    document.getElementById("clock").innerText = clock;

    setInterval('displayTime()', 1000);
}

function displayDate() {
    var now = new Date();
    var mm = formatTime(now.getMonth());
    var dd = formatTime(now.getDate());
    var yy = formatTime((now.getYear() + 1900));

    var date = "" + (mm + 1) + "/" + dd + "/" + yy + "";
    document.getElementById("calendar").innerText = date;
    setInterval('displayDate()', 86400000)
}

displayTime();
displayDate();
