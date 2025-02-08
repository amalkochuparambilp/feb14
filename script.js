function BtnRandomMove(ele) {
    ele.style.position = "absolute";
    ele.style.top = Math.floor(Math.random() * 90+5) + "%";
    ele.style.left = Math.floor(Math.random() * 90+5) + "%";
    ele.style.right = Math.floor(Math.random() * 90+5) + "%";
}

const RnMovBtn = document.querySelector("#rnbtn");

RnMovBtn.addEventListener("mouseenter", function(e) {
    BtnRandomMove(e.target);
})