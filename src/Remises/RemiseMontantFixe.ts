import { RemiseInterface } from './RemiseInterface';
import { Panier } from '../Models/Panier';
import { CalculateurPrix } from '../Services/CalculateurPrix';

export class RemiseMontantFixe implements RemiseInterface {
  constructor(private montant: number, private seuil: number) {
    if (montant <= 0) throw new Error('Montant de remise invalide');
    if (seuil <= 0) throw new Error('Seuil minimal invalide');
  }

  appliquerRemise(panier: Panier): number {
    const calculateur = new CalculateurPrix();
    const total = calculateur.calculerTotalBrut(panier);

    if (total >= this.seuil) {
      return this.montant;
    }
    return 0;
  }
}
