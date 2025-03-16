document.querySelector('.cta-button').addEventListener('click', function() {
    const infosSupp = document.getElementById('infos-supplementaires');
    const formulaireInscription = document.getElementById('formulaire-inscription');

    if (this.textContent === "En savoir plus") {
        infosSupp.style.display = 'block';  // Affiche les informations supplémentaires
    } else if (this.textContent === "S'inscrire") {
        formulaireInscription.style.display = 'block';  // Affiche le formulaire d'inscription
    }
});
