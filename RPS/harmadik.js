let pValasztott = 3;

function valasztas(valasztott){
    pValasztott = valasztott;
    let valasztottkep = document.getElementById(valasztott)
    valasztottkep.style.border = "3px solid red"
    document.getElementsByClassName("kep_hover").removeAttribute("onclick")
    document.getElementsByClassName("kep_hover").classList.remove("kep_hover")
    alert(pValasztott)
}

document.getElementsByClassName("kep_hover").addEventListener("click", () => {
    document.getElementsByClassName("kep_hover").classList.remove("kep_hover")
})

