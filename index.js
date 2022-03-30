const opene = document.querySelector('.sidebar__openbtn');
const closee = document.querySelector('.sidebar__closebtn');
const sidebar = document.querySelector('.sidebar');
const header = document.querySelector('.header__main');




opene.addEventListener('click' , () =>{

    sidebar.classList.add('show');
})
closee.addEventListener('click' , () =>{

    sidebar.classList.remove('show');
})
header.addEventListener('click' , () =>{

    sidebar.classList.remove('show');
})