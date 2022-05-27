//for picture effect 

const panels = document.querySelectorAll('.container__panel') 

panels.forEach(addClass)

function addClass(x) {
  x.addEventListener('click', function(){
    removeActiveClass()
    x.classList.add('container__panel--active')
  })
}


function removeActiveClass() {
  panels.forEach(x => {
    x.classList.remove('container__panel--active')
  }) 
} 





