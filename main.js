const app = document.getElementById('app');
let message = "Salut les gens !" + "<br>";

class Voiture {
    constructor (marque, couleur, puissance) {
        this.marque = marque;
        this.couleur = couleur;
        this.puissance = puissance;
    }

    demarre() {
        return "Démarrage de la " + this.marque;
    }

    arrete() {
        return "Arrêt de la " + this.marque;
    }
}

class VoitureF1 extends Voiture {
    constructor (marque, couleur, puissance, vitesse, accélération) {
        super(marque, couleur, puissance);
        this.vitesse = vitesse;
        this.accélération = accélération;
    }
}

const voitureMarc = [
    new Voiture("Peugeot", "bleu", 140, 50, 3),
]

voitureMarc.forEach(voiture => {
    message += voiture.demarre() + " ! <br>";
    message += voiture.arrete() + "<br>";
    message += "La voiture roule jusqu'à " + voiture.vitesse + " <br>";
    message += "Utilise la vitesse " + voiture.accélération + " de la voiture <br>";
})

const voitureJulie = [
    new VoitureF1("Renault", "rouge", 120, 100, 5),
]

voitureJulie.forEach(voiture => {
    message += voiture.demarre() + " ! <br>";
    message += voiture.arrete() + "<br>";
    message += "La voiture roule jusqu'à " + voiture.vitesse + " <br>";
    message += "Utilise la vitesse " + voiture.accélération + " de la voiture <br>";
})

app.innerHTML = message;