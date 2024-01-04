// Side Menu Functionaity

let openSideMenu = document.getElementsByClassName('open-side-menu')[0];

openSideMenu.addEventListener("click", () => {
    let sideMenu = document.getElementsByClassName('side-menu')[0];

    if(sideMenu.style.transform == `translateX(0px)`){

        sideMenu.style.transform = `translateX(-300px)`;
    }else{
        sideMenu.style.transform = `translateX(0px)`
    }
    
})