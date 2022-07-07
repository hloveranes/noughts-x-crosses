// return a series or specific html:node element
const NodeElement = (element, by_id) => {
  return by_id ? document.getElementById(element) : document.querySelectorAll(element); 
}

const OnScrollPage = (nav, drawerMenu) => {
  document.addEventListener('scroll', function(e) {
    var navDrawer = nav[0].getAttribute('data-var'); 
    let temp_counter = drawerMenu.getAttribute('data-class-counter');
    if(navDrawer == 'closed' && temp_counter > 0){
      drawerMenu.classList.add('hidden');
    } else {
      drawerMenu.classList.remove('hidden');
    }
  });
}

const OnMouseMove = (nav, drawerMenu) => {
  document.addEventListener("touchstart", function(e) { checkClass()})
  document.addEventListener("touchend", function(e) { checkClass()})
  document.addEventListener("touchcancel", function(e) { checkClass()})
  document.addEventListener("touchmove", function(e) { checkClass()})

  const checkClass = () => {
    console.log('mouse move')
  }
}


export default { NodeElement, OnScrollPage, OnMouseMove }