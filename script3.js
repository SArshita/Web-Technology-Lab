// JavaScript for the running message
var runningMessage = document.getElementById("runningMessage");
var messageText = "This is a running message that scrolls horizontally. ";

function updateRunningMessage() {
    messageText = messageText.substring(1) + messageText[0];
    runningMessage.textContent = messageText;
}

setInterval(updateRunningMessage, 100);

// JavaScript for the link to another page
var linkToAnotherPage = document.getElementById("linkToAnotherPage");
linkToAnotherPage.addEventListener("click", function() {
    // You can add additional actions here if needed
    alert("Redirecting to another page!");
});