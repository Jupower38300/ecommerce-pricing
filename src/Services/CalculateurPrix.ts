import { Article } from "../Models/Article";
import { Panier } from "../Models/Panier";

export class CalculateurPrix {

    calculerTotalBrut(panier: Panier): number {
    return panier.getArticles().reduce(
      (total: number, article: Article) =>
        total + article.prixUnitaire * article.quantite,
      0
    );
  }

}
