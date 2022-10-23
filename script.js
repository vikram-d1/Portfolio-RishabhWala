const hamburger = document.querySelector('nav span button');
const list = document.querySelector('ul')

hamburger.addEventListener('click', (e) => {

    // list.classList.toggle('-translate-y-full');
    hamburger.classList.toggle('is-active');


    if(hamburger.classList.contains('is-active')){
        list.classList.add('translate-y-0');
        list.classList.add('opacity-100');
        list.classList.remove('-translate-y-full');
        gsap.fromTo('ul li', {opacity: 0, y: '-100%'}, {opacity:1, y:'0', duration: 1, delay: 0.1, stagger: 0.2, ease:'power3.out', })
        gsap.set('body', {overflowY: 'hidden'})
    } else {
        list.classList.remove('translate-y-0');
        list.classList.add('-translate-y-full');
        list.classList.remove('opacity-100');
        // gsap.to('ul li', {opacity: 0, y: '-100%',})
        gsap.set('body', {overflowX: 'hidden', overflowY: 'scroll'})
    }


})

