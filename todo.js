let inp = document.querySelector("#input");
let btn = document.querySelector("button");
let ul= document.querySelector("ul");
btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item)

    let delbtn = document.createElement("button");
    delbtn.innerText= "Delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn)
    inp.value= " ";
})

inp.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        btn.click();
    }
})
ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let target = event.target.parentElement;
        target.remove();
    }
})

// let delbtns = document.querySelectorAll("#del");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click", function() {
//         let par = this.parentElement;
//         par.remove();
//     })
// }
