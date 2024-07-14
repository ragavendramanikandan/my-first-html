/*============================== toggle icon navbar ===========================*/

let nemuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classlist.toggle('fa-xmark');
    navbar.classList.toggle('active')
};

/*============================== scroll selection active link ===========================*/

let selection = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    selections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    /*============================== sticky navbar ===========================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    /*============================== remove toggle icon and navbar ===========================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};