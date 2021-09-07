let navbarLinks = document.getElementById('nav');
let toggleButtonBurger = document.getElementById('toggleButton');


toggleButtonBurger.addEventListener('click', function(){
    navbarLinks.classList.toggle('active');
});


/*counter*/
$(document).ready(function(){
    $(".num").counterUp({
        delay: 10,
        time: 1000
    }); 
});



/*filter*/
const input = document.getElementById("input");
const elementsList = document.getElementById("list");
let elementsList = elementsList.getElementsByTagName("li");

const filter = () => {
    let filterValue = input.nodeValue.toUpperCase();
    for (let i=0; i<ElementsListItems.length; i++){
        if(elementsListItems[i].innerHTML.toUpperCase().index0f(filterValue) !==-1){
            elementsListItems[i].style.display = "";
        } else {
            elementsListItems[i].style.display = "none";
        }
    }
};

input.addEventListener("input", (event) => {
    filter();

})

/*register & login*/
var card = document.getElementById("card")
function openRegister(){
    card.style.transform ="rotateY(-180deg)";
}
function openLogin(){
        card.style.transform ="rotateY(0deg)";
}