// Animación simple de contadores
document.addEventListener('DOMContentLoaded', ()=>{
  const nums = document.querySelectorAll('.num');
  nums.forEach(el=>{
    const target = parseInt(el.dataset.target,10) || 0;
    let current = 0;
    const step = Math.ceil(target / 80);
    const tick = ()=>{
      current += step;
      if(current >= target){
        el.textContent = target;
      } else {
        el.textContent = current;
        requestAnimationFrame(tick);
      }
    };
    tick();
  });
});
