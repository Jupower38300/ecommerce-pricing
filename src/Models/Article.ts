export class Article {
  constructor(
    public readonly nom: string,
    public readonly prixUnitaire: number,
    public quantite: number = 1
  ) {}
}