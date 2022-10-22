const hamburger = document.querySelector('nav span button');
const list = document.querySelector('ul')

hamburger.addEventListener('click', (e) => {

    // list.classList.toggle('-translate-y-full');
    hamburger.classList.toggle('is-active');


    if(hamburger.classList.contains('is-active')){
        list.classList.add('translate-y-0');
        list.classList.add('opacity-100');
        list.classList.remove('-translate-y-100');
        gsap.fromTo('ul li a', {opacity: 0, y: '-100%'}, {opacity:1, y:'0', duration: 1, stagger: 0.1, ease:'power3.out'})
        // gsap.to('body', {overflow: 'hidden'})
    } else {
        list.classList.remove('translate-y-100');
        list.classList.add('-translate-y-100');
        list.classList.remove('opacity-100');
        gsap.to('ul li a', {opacity: 1, y: '-100%'})
        // gsap.set('body', {overflow: 'hidden'})
    }


})

