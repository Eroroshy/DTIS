const jobs = [
  {id:1,title:'Prácticas Frontend (React)',company:'DataLabs',location:'Remoto',type:'Prácticas',desc:'Prácticas para estudiantes en React y accesibilidad. 3-6 meses.'},
  {id:2,title:'Analista de Datos Junior',company:'FinTech Hub',location:'Presencial - Lima',type:'Tiempo Parcial',desc:'Soporte en limpieza de datos y visualización. Buen ambiente.'},
  {id:3,title:'UX Research Intern',company:'Creative Agency',location:'Remoto',type:'Prácticas',desc:'Ayuda en pruebas de usabilidad y creación de prototipos.'}
];

function createJobCard(job){
  const el = document.createElement('article');
  el.className = 'job-card card';
  el.innerHTML = `
    <div class="job-left">
      <h3 class="job-title">${job.title}</h3>
      <div class="job-meta">${job.company} • ${job.location} • ${job.type}</div>
      <p class="small">${job.desc}</p>
    </div>
    <div class="apply-row">
      <button class="btn ghost" data-id="${job.id}">Guardar</button>
      <button class="btn primary" data-id="${job.id}">Ver</button>
    </div>
  `;

  return el;
}

function renderJobs(list){
  const container = document.getElementById('jobsList');
  container.innerHTML = '';
  if(list.length===0){
    container.innerHTML = '<div class="card">No se encontraron ofertas.</div>';
    return;
  }
  list.forEach(j=>container.appendChild(createJobCard(j)));
}

function openModal(html){
  const modal = document.getElementById('modal');
  const body = document.getElementById('modalBody');
  body.innerHTML = html;
  modal.classList.remove('hidden');
}

function closeModal(){
  document.getElementById('modal').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded',()=>{
  renderJobs(jobs);

  document.getElementById('searchBtn').addEventListener('click',()=>{
    const q = document.getElementById('searchInput').value.toLowerCase().trim();
    const loc = document.getElementById('filterLocation').value.toLowerCase();
    const filtered = jobs.filter(j=>{
      const matchesQ = q === '' || `${j.title} ${j.company} ${j.location}`.toLowerCase().includes(q);
      const matchesLoc = loc === '' || j.location.toLowerCase().includes(loc);
      return matchesQ && matchesLoc;
    });
    renderJobs(filtered);
  });

  document.getElementById('jobsList').addEventListener('click',e=>{
    const target = e.target;
    const id = target.dataset && target.dataset.id;
    if(!id) return;
    const job = jobs.find(x=>x.id==id);
    if(target.classList.contains('primary')){
      openModal(`<h2>${job.title}</h2><p class="muted">${job.company} • ${job.location}</p><p>${job.desc}</p><div style="margin-top:12px"><button class='btn primary'>Postular</button> <button class='btn ghost' id='closeModalInner'>Cerrar</button></div>`);
      document.getElementById('closeModal').onclick = closeModal;
      // handler for inner close
      setTimeout(()=>{const c = document.getElementById('closeModalInner'); if(c) c.onclick = closeModal;},50);
    } else if(target.classList.contains('ghost')){
      target.textContent = 'Guardado';
      target.disabled = true;
    }
  });
});
