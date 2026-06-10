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

  // overlay final : flou + CTA qui se révèlent en bas de page
  var overlay = document.getElementById('endOverlay');
  if(overlay){
    function clamp(v){ return v<0?0:(v>1?1:v); }
    function onEnd(){
      var doc = document.documentElement;
      var max = (doc.scrollHeight - window.innerHeight) || 1;
      var dist = max - window.scrollY;                 // px avant le bas
      var range = Math.min(window.innerHeight * 0.9, 560);
      var p = clamp(1 - dist / range);                 // 0 -> 1 en approchant du bas
      // courbe douce
      var e = p * p * (3 - 2 * p);
      overlay.style.opacity = e;
      overlay.style.setProperty('--b', (e * 15).toFixed(1) + 'px');
      if(e > 0.55){ overlay.classList.add('show'); overlay.style.pointerEvents = 'auto'; overlay.setAttribute('aria-hidden','false'); }
      else { overlay.classList.remove('show'); overlay.style.pointerEvents = 'none'; overlay.setAttribute('aria-hidden','true'); }
    }
    window.addEventListener('scroll', onEnd, {passive:true});
    window.addEventListener('resize', onEnd, {passive:true});
    onEnd();
  }
})();
