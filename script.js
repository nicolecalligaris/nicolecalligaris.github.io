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
	
	if (filter === 'all' || item.getAttribute('data-type') === filter) {
  item.style.display = 'block';
} else {
  item.style.display = 'none';
}
	