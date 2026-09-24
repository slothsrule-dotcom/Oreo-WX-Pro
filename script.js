function updateGraphics() {
    
    /* Day 1 */

    var selectedIcon = document.getElementById("day-one-icon").value;
    document.getElementById("img-one").querySelector("img").src = "icons/" + selectedIcon;


    var selectedDate = document.getElementById("day-one-day").value;
    document.getElementById("date-one").querySelector("h2").innerText = selectedDate;


    document.getElementById("cond-one").innerText = document.getElementById("day-one-text").value;
    document.getElementById("high-one").innerText = document.getElementById("day-one-high").value;
    document.getElementById("low-one").innerText = document.getElementById("day-one-low").value;

    /* Day 2 */

    var selectedIcon = document.getElementById("day-two-icon").value;
    document.getElementById("img-two").querySelector("img").src = "icons/" + selectedIcon;

    var selectedDate = document.getElementById("day-two-day").value;
    document.getElementById("date-two").querySelector("h2").innerText = selectedDate;

    document.getElementById("cond-two").innerText = document.getElementById("day-two-text").value;
    document.getElementById("high-two").innerText = document.getElementById("day-two-high").value;
    document.getElementById("low-two").innerText = document.getElementById("day-two-low").value;

    /* Day 3 */

    var selectedIcon = document.getElementById("day-three-icon").value;
    document.getElementById("img-three").querySelector("img").src = "icons/" + selectedIcon;

    var selectedDate = document.getElementById("day-three-day").value;
    document.getElementById("date-three").querySelector("h2").innerText = selectedDate;

    document.getElementById("cond-three").innerText = document.getElementById("day-three-text").value;
    document.getElementById("high-three").innerText = document.getElementById("day-three-high").value;
    document.getElementById("low-three").innerText = document.getElementById("day-three-low").value;

    /* Day 4 */

    var selectedIcon = document.getElementById("day-four-icon").value;
    document.getElementById("img-four").querySelector("img").src = "icons/" + selectedIcon;

    var selectedDate = document.getElementById("day-four-day").value;
    document.getElementById("date-four").querySelector("h2").innerText = selectedDate;

    document.getElementById("cond-four").innerText = document.getElementById("day-four-text").value;
    document.getElementById("high-four").innerText = document.getElementById("day-four-high").value;
    document.getElementById("low-four").innerText = document.getElementById("day-four-low").value;

    /* Day 5 */

    var selectedIcon = document.getElementById("day-five-icon").value;
    document.getElementById("img-five").querySelector("img").src = "icons/" + selectedIcon;

    var selectedDate = document.getElementById("day-five-day").value;
    document.getElementById("date-five").querySelector("h2").innerText = selectedDate;

    document.getElementById("cond-five").innerText = document.getElementById("day-five-text").value;
    document.getElementById("high-five").innerText = document.getElementById("day-five-high").value;
    document.getElementById("low-five").innerText = document.getElementById("day-five-low").value;

    /* Day 6 */

    var selectedIcon = document.getElementById("day-six-icon").value;
    document.getElementById("img-six").querySelector("img").src = "icons/" + selectedIcon;

    var selectedDate = document.getElementById("day-six-day").value;
    document.getElementById("date-six").querySelector("h2").innerText = selectedDate;

    document.getElementById("cond-six").innerText = document.getElementById("day-six-text").value;
    document.getElementById("high-six").innerText = document.getElementById("day-six-high").value;
    document.getElementById("low-six").innerText = document.getElementById("day-six-low").value;

    /* Day 7 */

    var selectedIcon = document.getElementById("day-seven-icon").value;
    document.getElementById("img-seven").querySelector("img").src = "icons/" + selectedIcon;

    var selectedDate = document.getElementById("day-seven-day").value;
    document.getElementById("date-seven").querySelector("h2").innerText = selectedDate;

    document.getElementById("cond-seven").innerText = document.getElementById("day-seven-text").value;
    document.getElementById("high-seven").innerText = document.getElementById("day-seven-high").value;

    /* Normal high & low */

    document.getElementById("norm-high").querySelector("strong").innerText = document.getElementById("norm-high-input").value;
    document.getElementById("norm-low").querySelector("strong").innerText = document.getElementById("norm-low-input").value;
}

function downloadGraphic() {
    var targetGraphic = document.querySelector(".graphicDisplay");

    html2canvas(targetGraphic, { scale: 2, useCORS: true }).then(function(canvas) {
        var pngImage = canvas.toDataURL("image/png");
        var downloadLink = document.createElement("a");
        downloadLink.download = "OreoWeather_Forecast.png";
        downloadLink.href = pngImage;
        downloadLink.click();
    });
}

