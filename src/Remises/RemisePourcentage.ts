import { Panier } from "../Models/Panier";
import { CalculateurPrix } from "../Services/CalculateurPrix";
import { RemiseInterface } from "./RemiseInterface";

export class RemisePourcentage implements RemiseInterface{
    constructor(private pourcentage: number) {
        if (pourcentage < 0 || pourcentage > 100) {
            throw new Error('Pourcentage invalide');
        }
    }

    appliquerRemise(panier: Panier): number {
        const calculateurPrix = new CalculateurPrix();
        const montantTotal = calculateurPrix.calculerTotalBrut(panier);
        return montantTotal - (montantTotal * this.pourcentage / 100);
    }
}