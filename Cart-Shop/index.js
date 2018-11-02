const decrementBtns=document.querySelectorAll(".product-decrement-quantity")
const incrementBtns=document.querySelectorAll(".product-increment-quantity")
const totalProductPrice=document.querySelector(".total-product-price")

for(let btn of decrementBtns)
{
btn.addEventListener("click",function(e){
 var compt=e.target.nextElementSibling;
  if(compt.innerHTML>0)
       compt.innerHTML--
  
  totalProductPrice.innerHTML=totalPrice()
})
 
};


for(let btn of incrementBtns)
{
btn.addEventListener("click",function(e){
 var compt= e.target.previousElementSibling;
   if(compt.innerHTML<9)
     compt.innerHTML++
 
   totalProductPrice.innerHTML=totalPrice()
})
    
};


function totalPrice()
{
 var priceProduct=Array.from(document.querySelectorAll(".price-unity"))
 var compt=Array.from(document.querySelectorAll(".product-quantify"))
 var totalPrix=0;
   for(let i=0;i<compt.length;i++){
      totalPrix += (compt[i].innerHTML)*(priceProduct[i].innerHTML) 
   }
  return totalPrix
};
const productRemove=document.querySelectorAll(".product-remove")
for(let pR of productRemove )
{
  pR.onclick=function(event){
    event.target.closest(".product").remove() 
    totalProductPrice.innerHTML=totalPrice()
}
}