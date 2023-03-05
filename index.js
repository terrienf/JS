//SELECTEURS
//document.querySelector("h4").style.background = "yellow";

//const baliseHTML = document.querySelector("h4");
//baliseHTML.style.background = "yellow";

//Click event

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const reponse = document.querySelector("p");

console.log(reponse);

questionContainer.addEventListener("click", () => {
    questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
    reponse.classList.add("show-reponse");
    reponse.style.background = "red";
});

btn2.addEventListener("click", () => {
    reponse.classList.add("show-reponse");
    reponse.style.background = "green";
});

//----------------------------------------------------------------------
//Mouse event
// const mousemove = document.querySelector(".mousemove");
//
// window.addEventListener("mousemove", (e) => {
//     mousemove.style.left = e.pageX + "px";
//     mousemove.style.top = e.pageY + "px";
// });
//
// // window.addEventListener("mousedown", () => {
// //     mousemove.style.transform = "scale(2)";
// // });

// window.addEventListener("mouseup", () => {
//     mousemove.style.transform = "scale(1) translate (-50%, -50%)";
//     mousemove.style.border = "2px solid teal";
// });
//
// questionContainer.addEventListener("mouseenter", () => {
//     questionContainer.style.background = "rgba (0,0,0,0.9)";
// });
//-------------------------------------------------------------------------
//Key Press Event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener('keypress', (e) => {
    key.textContent = e.key;
    if (e.key === "j") {
        keypressContainer.style.background = "pink"
    } else if (e.key === "h") {
        keypressContainer.style.background = "red"
    } else {
        keypressContainer.style.background = "blue"
    }
    if (e.key === "z") ring(e.key);
});

const ring = (key) => {
    const audio = new Audio();
    audio.src = key + ".mp3";
    audio.play();
}
//------------------------------------------
// Scroll Event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 120) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-50px";
    }
});
//--------------------------------------------------
//form Events
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");

let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
    pseudo = e.target.value;
});
select.addEventListener("input", (e) => {
    language = e.target.value;
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (cgv.checked) {
        document.querySelector("form>div").innerHTML = `
        <h3>Pseudo : ${pseudo}</h3>
        <h4>Langage préféré : ${language}</h4>
`;
    } else {
        alert('Veuillez accepter les CGV')
    }
});
//-------------------------------------------------------
//load event

window.addEventListener("load", () => {
    console.log("document chargé");
});

//--------------------------
const boxes = document.querySelectorAll(".box");

console.log(boxes);
boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        e.target.style.transform = "scale(0.7)";
    });
});
//----------------------------------------------
//addEventListener vs onClick
document.body.onclick = function () {
    console.log("Scroll!");
};



