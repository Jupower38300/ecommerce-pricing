import { Panier } from "../Models/Panier";
import { RemiseInterface } from "./RemiseInterface";

export class RemisePourcentage implements RemiseInterface{
    constructor(private pourcentage: number) {
        if (pourcentage < 0 || pourcentage > 100) {
            throw new Error('Pourcentage invalide');
        }
    }

    appliquerRemise(panier: Panier): number {
        const montantTotal = panier.getMontantTotal();
        return montantTotal - (montantTotal * this.pourcentage / 100);
    }
}