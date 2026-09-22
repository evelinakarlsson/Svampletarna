
const rattNamn = "Kalle";
const rattLosenord = "qwe123";

const namnInput = document.getElementById("namn");
const losenordInput = document.getElementById("losenord");
const msgElem = document.getElementById("message");
const loginForm = document.getElementById("loginForm");
const logoutBtn = document.getElementById("btn2");

logoutBtn.style.display = "none";

document.getElementById("btn1").addEventListener("click", loggaIn);
document.getElementById("btn2").addEventListener("click", loggaUt);

function loggaIn() {
    if (namnInput.value === rattNamn && losenordInput.value === rattLosenord) {
        msgElem.innerHTML = "Välkommen " + namnInput.value + ", du är nu inloggad";

        loginForm.style.display = "none";
        logoutBtn.style.display = "inline-block";
    } else {
        msgElem.innerHTML = "Felaktiga inloggningsuppgifter";
    }
}

function loggaUt() {
    loginForm.style.display = "block"; 
    logoutBtn.style.display = "none";
    msgElem.innerHTML = "";
    namnInput.value = "";
    losenordInput.value = "";
}

