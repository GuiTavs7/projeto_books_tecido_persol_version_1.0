async function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');

  for (const el of elements) {
    const file = el.dataset.include;
    const res = await fetch(file);
    el.innerHTML = await res.text();

    // Se for o carrossel, carrega o JS depois
    if (el.id === "carrossel") {
      const script = document.createElement("script");
      script.src = "./js/carrossel.js";
      script.defer = true;
      document.body.appendChild(script);
    }
  }
}

// Dispara evento do menu quando todos includes são carregados
setTimeout(()=>{
  document.dispatchEvent(new Event("includesLoaded"));
},1000);

includeHTML();