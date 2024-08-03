document.addEventListener('DOMContentLoaded', function() {
    var navBar = document.querySelector('.nav-bar');
    let add = 100;

    window.addEventListener('scroll',()=>{
        if (window.scrollY > navBar.offsetHeight ) {
            navBar.classList.add('move');
        } else{
            navBar.classList.remove('move');

        }
    })
});
