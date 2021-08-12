//---------------------SELECTORS---------------------

const base = {
    sideNav : document.querySelector('.SideNav'),
    activeClass: document.querySelector('.Nav-Links')
}

//---------------------SIDENAV---------------------

function openSideNav() {
    base.sideNav.style.right = 0;
}
  
function closeSideNav() {
    base.sideNav.style.right = '-100%';
}

const navbar = document.querySelector('.Navigation');
window.onscroll = () => {
    if (window.scrollY > 200) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};



    $('#recipeCarousel').carousel({
        interval: 10000
    })
  
  $('.carousel .carousel-item').each(function(){
      var minPerSlide = 3;
      var next = $(this).next();
      if (!next.length) {
      next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      for (var i=0;i<minPerSlide;i++) {
          next=next.next();
          if (!next.length) {
              next = $(this).siblings(':first');
            }
          
          next.children(':first-child').clone().appendTo($(this));
        }
  });
  

  