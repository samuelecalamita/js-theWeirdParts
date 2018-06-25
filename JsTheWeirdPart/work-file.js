var toggle = document.querySelectorAll('.js-menu-toggle');

for(var i=0; i<toggle.length; i++){

  toggle[i].addEventListener('click', function(e){

    e.preventDefault();
    toggle[i].nextElementSibling.classList.remove('is-visible');
    this.nextElementSibling.classList.add('is-visible');

  });

}
