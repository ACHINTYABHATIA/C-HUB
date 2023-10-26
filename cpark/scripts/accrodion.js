const accordion_els = Array.from(document.querySelectorAll(".accordion-container"));

accordion_els.map((el, i) => {
    const content = el.children[1];
    const icon = el.children[0].children[1];
    el.addEventListener("click", (e) => {
       icon.classList.toggle("rotated")
        content.classList.toggle("visible")
    })
})