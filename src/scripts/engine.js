const imagens = [
    "./src/imgs/cyrax.jpg",
    "./src/imgs/cyrax.jpg",
    "./src/imgs/jax.jpg",
    "./src/imgs/jax.jpg",
    "./src/imgs/sonya.jpg",
    "./src/imgs/sonya.jpg",
    "./src/imgs/kano.jpg",
    "./src/imgs/kano.jpg",
    "./src/imgs/reptile.jpg",
    "./src/imgs/reptile.jpg",
    "./src/imgs/liu-kang.png",
    "./src/imgs/liu-kang.png",
    "./src/imgs/shangtsung.jpg",
    "./src/imgs/shangtsung.jpg",
    "./src/imgs/scorpion.jpg",
    "./src/imgs/scorpion.jpg",
]

let openCards = []

let shuffleImagens = imagens.sort(() => (
    Math.random() > 0.5 ? 2 : -1
))

for (let i=0; i < imagens.length; i++) {
    let box = document.createElement("div");
    let imag = document.createElement("img");
    imag.setAttribute("src", shuffleImagens[i])
    imag.setAttribute("height", "100%")
    imag.setAttribute("width", "100%")
    box.className = "item"
    box.appendChild(imag);
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if (openCards.length < 2 && !this.classList.contains("boxOpen")) {
        this.classList.add("boxOpen")
        openCards.push(this)
    }
    if (openCards.length === 2) {
        setTimeout(checkMatch, 500)
    }

}

function checkMatch() {
    if(openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch")
        openCards[1].classList.add("boxMatch")
    } else {
        openCards[0].classList.remove("boxOpen")
        openCards[1].classList.remove("boxOpen")
    }
    openCards=[]
    if (document.querySelectorAll(".boxMatch").length === imagens.length ){
        alert("You Win! Perfect!!!")
    }
}


const music = document.querySelector("#bgm")
music.volume = 0.04
music.play()
