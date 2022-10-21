const hamburger = document.getElementById('hamburger-menu');

hamburger.addEventListener('click', (e) => {
    console.log(e.target.name)

    let list = document.querySelector('ul');

    list.classList.toggle('-translate-y-full')

    if(hamburger.classList.contains('active')){
        hamburger.innerHTML ='<i class="fa-solid fa-x "></i>';
        hamburger.classList.remove('active')
    } else {
        hamburger.innerHTML = '<i id="menu" class="fa-solid fa-bars active"></i>';
        hamburger.classList.add('active')
    }

    // if(e.target.name === 'menu'){
    //     e.target.name = 'close';
    //     list.classList.toggle('-translate-y-full');
    //     list.classList.add('translate-y-50');
    //     list.classList.add('transition')
    // } else {
    //     e.target.name = 'menu';
    //     list.classList.toggle('translate-y-50');
    //     list.classList.add('-translate-y-full');
    // }
    
})


