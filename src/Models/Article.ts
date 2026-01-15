export enum CategorieArticle {
  ELECTRONIQUE = 'Electronique',
  VETEMENTS = 'Vêtements',
  ALIMENTATION = 'Alimentation',
  MEUBLES = 'Livres',
}


export class Article {
  constructor(
    public readonly nom: string,
    public readonly prixUnitaire: number,
    public quantite: number = 1,
    public readonly categorie?: CategorieArticle,
  ) {}
}