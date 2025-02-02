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
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});


	