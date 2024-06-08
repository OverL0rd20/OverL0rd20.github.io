const image = document.querySelector("img");

image.onclick = () => {
    const src = image.getAttribute("src");
    if (src === "images/index.jpg") {
        image.setAttribute("src", "images/tofu.jpg");
    } else {
        image.setAttribute("src", "images/index.jpg")
    }
};

let button = document.querySelector("button");
let heading = document.querySelector("h1");

function setUserName() {
    const name = prompt("Please enter your name.");
    if (!name) {
        setUserName();
    } else {
    localStorage.setItem("name", name);
    heading.textContent = `Sup, ${name}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    heading.textContent = `Sup, ${storedName}`;
}

button.onclick = () => {
    setUserName();
}