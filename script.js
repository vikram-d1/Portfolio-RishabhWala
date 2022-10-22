const hamburger = document.querySelector('nav span button');
const list = document.querySelector('ul')

hamburger.addEventListener('click', (e) => {

    // list.classList.toggle('-translate-y-full');
    hamburger.classList.toggle('is-active');


    if(hamburger.classList.contains('is-active')){
        list.classList.add('top-28');
        list.classList.add('opacity-100');
    } else {
        list.classList.remove('top-28');
        list.classList.remove('opacity-100');
    }


})

