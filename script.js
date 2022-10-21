const hamburger = document.getElementById('hamburger-menu');

hamburger.addEventListener('click', (e) => {
    console.log(e.target.name)

    let list = document.querySelector('ul');

    if(e.target.name === 'menu'){
        e.target.name = 'close';
        list.classList.toggle('-translate-y-full');
        list.classList.add('translate-y-50');
        list.classList.add('transition')
    } else {
        e.target.name = 'menu';
        list.classList.toggle('translate-y-50');
        list.classList.add('-translate-y-full');
    }
    
})



