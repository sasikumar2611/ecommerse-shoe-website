var productContainer=document.getElementById("product")
var search=document.getElementById("search")
var productList=productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase()
    for(let count=0;count<productList.length;count++){
        var productName=productList[count].querySelector('p').textContent
        if(productName.toUpperCase().indexOf(enteredValue)<0){
            productList[count].style.display='none'
        }
        else{
            productList[count].style.display='block'
        }
    }

})

var sidenav=document.querySelector(".sidebar")
function shownavbar(){
    sidenav.style.left="0"
    
}
function closenavbar(){
    sidenav.style.left="-60%"

}