let question = document.getElementById("q");

let a1 = document.getElementById("alternativ1");
let a2 = document.getElementById("alternativ2");
let a3 = document.getElementById("alternativ3");

let i1 = document.getElementById("i1");
let i2 = document.getElementById("i2");
let i3 = document.getElementById("i3");

let button = document.getElementById("nesteKnapp");

let form = document.getElementById("form");

let exit = false;

sporsmal = [
    "Hvis Erling Braut Haaland scorer et landslagsmål, hvordan reagerer du?",
    "Hvor skråsikker er du på dine egne meninger?",
    "Hvor aktiv er du på sosiale medier?",
    "Hvem ville du hatt på laget ditt?",
    "Hvilket forhold har du til trøndere?",
];

alternativ = [
    [
        "Vet ikke hvem Haaland er",
        "Blir glad, men har betta på at han scorer to mål og Norge vinner, så tar ikke helt av enda.",
        "Blir utrolig glad og roper så stemmebåndet sprekker",
    ],
    [
        "Litt usikker og bruker en del mellomord når du skal argumentere for din sak",
        "Ikke veldig sikker, men later som jeg er skråsikker",
        "Veldig sikker og har ingen problemer med å stå for det",
    ],
    [
        "Bruker nesten ikke sosiale medier",
        "Er en liten luring på snapchat og instagram",
        "Jeg tweeter mange ganger daglig",
    ],
    ["Zlatan Ibrahimovic", "Cristiano Ronaldo", "Nicklas Bendtner"],
    [
        "Kan ikke fordra dem",
        "Nøytralt forhold",
        "Jeg er trønder selv og trives med det",
    ],
];

gutta = [
    { navn: "Kjetil Rekdal", score: 0 },
    { navn: "Øyvind Alsaker", score: 0 },
    { navn: "Kåre Ingebrigtsen", score: 0 },
    { navn: "Morten Langli", score: 0 },
    { navn: "Bernt Hulsker", score: 0 },
];

let index = 0;

function next_question() {
    if (exit == false) {
        question.innerHTML = "Spørsmål " + (index + 1) + ": " + sporsmal[index];
        i1.innerHTML = alternativ[index][0];
        i2.innerHTML = alternativ[index][1];
        i3.innerHTML = alternativ[index][2];
    } else {
        let i = 0;
        for (let y = 0; y < gutta.length; y++) {
            if (gutta[y].score >= gutta[i].score) {
                i = y;
            }
        }
        question.innerHTML =
            "Du matcher " + gutta[i].score *10 + "% med " + gutta[i].navn + "!";
    }
    
}

button.addEventListener("click", () => {
    if (exit == false) {
        if (!a1.checked && !a2.checked && !a3.checked) {
            return;
        }

        if (index == 0) {
            if (a1.checked) {
                gutta[0].score += 0;
                gutta[1].score += 0;
                gutta[2].score += 1;
                gutta[3].score += 0;
                gutta[4].score += 0;
            } else if (a2.checked) {
                gutta[0].score += 1;
                gutta[1].score += 0;
                gutta[2].score += 0;
                gutta[3].score += 2;
                gutta[4].score += 0;
            } else if (a3.checked) {
                gutta[0].score += 1;
                gutta[1].score += 2;
                gutta[2].score += 0;
                gutta[3].score += 0;
                gutta[4].score += 2;
            } else {
                return;
            }
        }
        if (index == 1) {
            if (a1.checked) {
                gutta[0].score += 0;
                gutta[1].score += 1;
                gutta[2].score += 2;
                gutta[3].score += 0;
                gutta[4].score += 0;
            } else if (a2.checked) {
                gutta[0].score += 1;
                gutta[1].score += 1;
                gutta[2].score += 1;
                gutta[3].score += 0;
                gutta[4].score += 2;
            } else if (a3.checked) {
                gutta[0].score += 2;
                gutta[1].score += 1;
                gutta[2].score += 0;
                gutta[3].score += 2;
                gutta[4].score += 0;
            } else {
                return;
            }
        }
        if (index == 2) {
            if (a1.checked) {
                gutta[0].score += 0;
                gutta[1].score += 0;
                gutta[2].score += 2;
                gutta[3].score += 0;
                gutta[4].score += 0;
            } else if (a2.checked) {
                gutta[0].score += 0;
                gutta[1].score += 0;
                gutta[2].score += 0;
                gutta[3].score += 0;
                gutta[4].score += 2;
            } else if (a3.checked) {
                gutta[0].score += 1;
                gutta[1].score += 1;
                gutta[2].score += 0;
                gutta[3].score += 2;
                gutta[4].score += 1;
            } else {
                return;
            }
        }
        if (index == 3) {
            if (a1.checked) {
                gutta[0].score += 0;
                gutta[1].score += 1;
                gutta[2].score += 0;
                gutta[3].score += 1;
                gutta[4].score += 1;
            } else if (a2.checked) {
                gutta[0].score += 2;
                gutta[1].score += 1;
                gutta[2].score += 0;
                gutta[3].score += 2;
                gutta[4].score += 0;
            } else if (a3.checked) {
                gutta[0].score += 0;
                gutta[1].score += 0;
                gutta[2].score += 2;
                gutta[3].score += 0;
                gutta[4].score += 1;
            } else {
                return;
            }
        }
        if (index == 4) {
            if (a1.checked) {
                gutta[0].score += 2;
                gutta[1].score += 2;
                gutta[2].score += 0;
                gutta[3].score += 0;
                gutta[4].score += 0;
            } else if (a2.checked) {
                gutta[0].score += 0;
                gutta[1].score += 0;
                gutta[2].score += 0;
                gutta[3].score += 1;
                gutta[4].score += 1;
            } else if (a3.checked) {
                gutta[0].score += 0;
                gutta[1].score += 0;
                gutta[2].score += 2;
                gutta[3].score += 0;
                gutta[4].score += 0;
            } else {
                return;
            }
            
            form.style.display = "none";
            display_winner();
            exit = true;
        }

        index++;
        next_question();
    }
});

function display_winner() {
    console.log(gutta);
}

next_question();
