function debounce(func,delay){
    var timeout=0;
    return function(...args){
        console.log(timeout);
        timeout+=1;
        console.log(timeout);
    }
}
function func(){
    console.log("hi");
}
const inp=document.querySelector("#iy");
const de=debounce(func,3000);
inp.addEventListener("input",de);