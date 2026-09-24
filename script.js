// Deklarerar konstanter för rätt namn och rätt lösenord vid inloggning
const rattNamn = "Kalle";
const rattLosenord = "qwe123";

// Skapar konstanter med referenser till HTML-element för att kunna läsa av eller ändra dem i JavaScript
const namnInput = document.getElementById("namn");
const losenordInput = document.getElementById("losenord");
const msgElem = document.getElementById("message");
const loginForm = document.getElementById("loginForm");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

// Gömmer logga ut-knappen eftersom ingen är inloggad när sidan laddas
logoutBtn.style.display = "none";

// Kopplar funktioner till knapparna, så att något händer när man klickar på dem. När logga in-knappen klickas körs
// funktionen loggaIn och när logga ut-knappen klickas körs loggaUt
loginBtn.addEventListener("click", loggaIn);
logoutBtn.addEventListener("click", loggaUt);

// Funktion som körs när man klickar på logga in-knappen
function loggaIn() {
    // Först kollar funktionen om det man skrivit i fälten stämmer med både rätt namn och lösenord
    // om det stämmer visas ett välkomstmeddelande
    if (namnInput.value === rattNamn && losenordInput.value === rattLosenord) {
        msgElem.textContent = "Välkommen " + namnInput.value + ", du är nu inloggad";
        msgElem.style.color = ""; // Återställer textfärgen om man testat att logga in och uppgivit felaktiga uppgifter,
                                  // för då blir texten röd, och behöver därför nollställas för att välkomsttexten inte också ska bli röd

        // När man är inloggad göms inloggningsformuläret och logga ut-knappen visas
        loginForm.style.display = "none";
        logoutBtn.style.display = "inline-block";
    } else {
        // Om namn eller lösenord är fel så visas ett felmeddelande i röd text
        msgElem.textContent = "Felaktiga inloggningsuppgifter";
        msgElem.style.color = "red";
    }
}

// Denna funktion körs när man klickar på logga ut-knappen
function loggaUt() {
    loginForm.style.display = "grid"; // Visar inloggningsformuläret igen
    logoutBtn.style.display = "none"; // Logga ut-knappen döljs

    // Rensar bort eventuella tidigare meddelanden samt tömmer inmatningsfälten
    msgElem.textContent = "";
    namnInput.value = "";
    losenordInput.value = "";
}