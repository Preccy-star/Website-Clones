const menu = document.querySelector('#menu');

const sidebar = document.querySelector('.sideBar');

menu.addEventListener('click', function(){
	sidebar.classList.toggle('show-sidebar');
})