// Gestione modal per l'ingrandimento delle immagini
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".portfolio-item").forEach(item => {
      item.addEventListener("click", function(e) {
        // Se il click proviene dal link nella didascalia, non aprire il modal
        if(e.target.closest("a")) return;
        const fullImg = this.getAttribute("data-full");
        modal.style.display = "flex";
        modalImg.src = fullImg;
      });
    });

    closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });

    // Chiude il modal se si clicca fuori dall'immagine
    modal.addEventListener("click", function(e) {
      if(e.target === modal) {
        modal.style.display = "none";
      }
    });
	
// Seleziona tutte le chip e gli elementi del portfolio
const chips = document.querySelectorAll('.chip');
const items = document.querySelectorAll('.portfolio-item');

// Aggiungi un event listener per ogni chip
chips.forEach(chip => {
  chip.addEventListener('click', () => {
    // Rimuovi la classe 'active' da tutte le chip e aggiungila a quella cliccata
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');

    // Ottieni il filtro selezionato
    const filter = chip.getAttribute('data-filter');

    // Filtra gli elementi del portfolio
    items.forEach(item => {
      if (filter === 'all' || item.getAttribute('data-type') === filter) {
        // Mostra l'elemento e applica l'effetto fade in
        item.style.display = 'block';
        // Aggiungi la classe fade per impostare l'opacità iniziale a 0
        item.classList.add('fade');
        // Rimuovi la classe visible nel caso fosse già presente
        item.classList.remove('visible');
        // Dopo un breve delay, aggiungi la classe visible per attivare la transizione
        setTimeout(() => {
          item.classList.add('visible');
        }, 50);
      } else {
        // Nascondi l'elemento
        item.style.display = 'none';
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  // Inietta regole CSS per l'effetto fade-in
  const style = document.createElement("style");
  style.textContent = `
    /* Imposta opacità iniziale per immagini e didascalie */
    .portfolio-item img, 
    .portfolio-item .caption {
      opacity: 0;
    }
    /* Quando vengono caricate, passano a opacity 1 con transizione */
    .lazy-loaded {
      opacity: 1 !important;
      transition: opacity 1s ease-in;
    }
  `;
  document.head.appendChild(style);

  // Seleziona tutte le immagini nella griglia
  const images = document.querySelectorAll(".portfolio-item img");

  // Per ogni immagine, sposta il valore di src in data-src e rimuovi src
  images.forEach(img => {
    if (img.getAttribute("src")) {
      img.setAttribute("data-src", img.getAttribute("src"));
      img.removeAttribute("src");
    }
  });

  // Crea un IntersectionObserver per osservare quando le immagini entrano in viewport
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        // Ripristina il src dall'attributo data-src
        img.setAttribute("src", img.getAttribute("data-src"));
        // Quando l'immagine è caricata, applica l'effetto fade-in anche alla didascalia
        img.addEventListener("load", function() {
          img.classList.add("lazy-loaded");
          // Se esiste una didascalia nel portfolio-item, applica l'effetto
          const caption = img.parentElement.querySelector(".caption");
          if (caption) {
            caption.classList.add("lazy-loaded");
          }
        });
        observer.unobserve(img);
      }
    });
  }, { rootMargin: "0px 0px 50px 0px" });

  images.forEach(img => {
    observer.observe(img);
  });
});



	