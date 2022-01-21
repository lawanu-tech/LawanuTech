const ham_menu=document.querySelector(".ham-menu");
const nav_list=document.querySelector(".nav-list");
const nav_link=document.querySelectorAll(".nav-link");
console.log(ham_menu);
console.log("Hello");

ham_menu.addEventListener("click",()=>{
    nav_list.classList.toggle("show");
})

nav_link.forEach((nav_items)=>
{
nav_items.addEventListener("click",()=>{
   nav_list.classList.remove("show");
})
})
