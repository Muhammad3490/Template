let display=true
let menu=document.getElementById('menu').addEventListener('click',()=>{
let sidemenu=document.getElementById('sideMenu');
 
    if(display){
    sidemenu.style.width='0vw';
    console.log("20vw")
}
else{
    sidemenu.style.width='50vw';
    console.log("0vw")
}
display=!display;
})