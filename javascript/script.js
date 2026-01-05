// 1. Afficher l'heure et le jour (OBLIGATOIRE)
function afficherHeure() {
    var d = new Date();
    var dateString = d.toLocaleDateString() + " " + d.toLocaleTimeString();
    var spanHeure = document.getElementById("affichage_heure");
    if (spanHeure) {
        spanHeure.innerHTML = dateString;
    }
}

// 2. Validation du formulaire (OBLIGATOIRE)
function validerFormulaire() {
    var champNom = document.getElementById("nom");
    var champEmail = document.getElementById("email");

    var nom = champNom ? champNom.value : "";
    var email = champEmail ? champEmail.value : "";

    if (nom == "" || email == "") {
        alert("Veuillez remplir les champs obligatoires.");
        if (nom == "" && champNom) {
            champNom.focus();
        } else if (champEmail) {
            champEmail.focus();
        }
        return false;
    }
    alert("Formulaire envoyé avec succès !");
    return true;
}

// 3. Modifier la couleur de fond du titre
function changerCouleurTitre() {
    var titre = document.getElementById("titre_page");
    if (titre) {
        titre.style.color = "red";
    }
}

// 4. Alerte de bienvenue
function alerteBienvenue() {
    alert("Bienvenue sur ma page personnelle !");
}

// 5. Calcul simple pour le canevas
function calculerCanevas() {
    var c = document.getElementById("monLogo");
    if (c && c.getContext) {
        var ctx = c.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(20, 20, 150, 100);
        ctx.fillStyle = "#000000";
        ctx.font = "16px Arial";
        ctx.fillText("Mon Logo", 60, 80);
    }
}

// 6. Message de survol
function messageSurvol() {
    console.log("L'utilisateur survole un élément.");

                // 7. Fonction pour dessiner le logo (Canevas)
function dessinerLogo() {
    // Récupération de l'élément par son ID
    var canva = document.getElementById("monLogo");
    if (canva && canva.getContext) {
        var ctx = canva.getContext("2d");

        // Dessin d'un rectangle bleu
        ctx.fillStyle = "blue";
        ctx.fillRect(50, 50, 100, 100);

        // Dessin d'un cercle jaune
        ctx.beginPath();
        ctx.arc(100, 100, 40, 0, 2 * Math.PI);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.stroke();
    }
}
}
