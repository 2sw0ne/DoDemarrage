// reveal on scroll
(function(){
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  },{threshold:0.12, rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

  // nav solid on scroll
  var nav = document.querySelector('.nav');
  function onScroll(){ if(window.scrollY > 40){ nav.classList.add('solid'); } else { nav.classList.remove('solid'); } }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
})();
