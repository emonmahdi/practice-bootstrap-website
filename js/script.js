$('#searchBtn').click(function(){
    $('#searchRes').text('Your Search Result Present Here!')
})

function dateTime() {
    var dateAndTime = new Date();
    var hours = dateAndTime.getHours();
    var minutes = dateAndTime.getMinutes();
    var seconds = dateAndTime.getSeconds();

    var watch = hours + " : " + minutes + " : " + seconds;

    var dateTimeElement = document.getElementById('dateTimeShow');

    if (dateTimeElement) { // Check if element exists
        dateTimeElement.innerHTML = watch;
    } else {
        console.error("Element with ID 'dateTimeShow' not found!");
    }
}

setInterval(dateTime, 1000);
