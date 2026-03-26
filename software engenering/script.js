function login() {
    window.location.href = "dashboard.html";
}

function addEvent() {
    let name = document.getElementById("eventName").value;
    let time = document.getElementById("eventTime").value;

    if (name === "" || time === "") {
        alert("Please enter event name and time");
        return;
    }

    let li = document.createElement("li");
    li.innerText = name + " at " + time;

    document.getElementById("eventList").appendChild(li);
}

function submitFeedback() {
    let feedback = document.getElementById("feedback").value;
    alert("Feedback submitted: " + feedback);
}

function suggestTime() {
    let times = ["09:00", "12:00", "15:00", "18:00"];
    let random = times[Math.floor(Math.random() * times.length)];
    alert("Suggested time: " + random);
}