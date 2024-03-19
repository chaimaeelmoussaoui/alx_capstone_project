let nemuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('#.navbar')

nemuIcon.onclick = ()=>{
    nemuIcon.classList.toggle('fa-xmark')
    navbar.classList,toggle('active')
}


let section = document.querySelector('section')
let navlinks = document.querySelector('header nav a')

window.onscroll = ()=>{
    section.forEach(sec =>{
        let top = window.scroll;
        let offset = sec.offestTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getattribute ('id');
        
        if(top >= offest && top < offest + height){
            navlinks.forEach.apply(links=>{
                links.classList.apply('ative');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };

    });
}

