export enum CategorieArticle {
  ELECTRONIQUE = 'Electronique',
  VETEMENTS = 'Vêtements',
  ALIMENTATION = 'Alimentation',
  MEUBLES = 'Livres',
}


export class Article {
    public readonly nom: string
    public readonly prixUnitaire: number
    public quantite: number = 1
    public readonly categorie: CategorieArticle
  constructor(nom: string, prixUnitaire: number, categorie: CategorieArticle, quantite: number = 1)
  {
    if (!Object.values(CategorieArticle).includes(categorie)) {
      throw new Error(`Catégorie invalide : ${categorie}`);
    }
    this.nom = nom;
    this.prixUnitaire = prixUnitaire;
    this.categorie = categorie;
    this.quantite = quantite;
  }
}