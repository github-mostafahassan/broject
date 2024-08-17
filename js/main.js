



let btn = document.querySelector(".btnScrol")

// btn.addEventListener( "click" , function (){

//     if ( > 550) {
        
//         console.log("mostafa");
        
//     }
// } )



window.onscroll = function (){

    if ( window.scrollY >= 100) {
        
        btn.style.display = "block"
     }else{
        btn.style.display = "none"
     }
}


btn.addEventListener("click" , function () {
    scrollTo({
        top : 0 ,
        behavior : "smooth"
    })
})