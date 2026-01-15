import { Panier } from '../src/Models/Panier';
import { Article } from '../src/Models/Article';

describe ('Gestion du panier', () => {

    it("Ajout d'un article au panier avec quantité et prix unitaire", () => {
        const panier = new Panier();
        const article = new Article("Article 1", 100 ,10);
        panier.ajouterArticle(article);
        expect(panier.getArticles()).toHaveLength(1);
        expect(panier.getArticles()[0].quantite).toBe(10);
        expect(panier.getArticles()[0].prixUnitaire).toBe(100);
    });

    it("Suppression d'un article du panier avec quantité et prix unitaire", () => {
        const panier = new Panier();
        const article = new Article("Article 1", 100 ,10);
        panier.ajouterArticle(article);

        panier.supprimerArticle(article, 5);
        expect(panier.getArticles()[0].quantite).toBe(5);

        panier.supprimerArticle(article, 5);
        expect(panier.getArticles()).toHaveLength(0);
    });

    it("Ajouter plus du même article incrémente la quantité", () => {
        const panier = new Panier();
        const article = new Article("Article 1", 100 ,10);
        panier.ajouterArticle(article);
        panier.ajouterArticle(new Article("Article 1", 100 ,5));
        expect(panier.getArticles()).toHaveLength(1);
        expect(panier.getArticles()[0].quantite).toBe(15);
    });

    it("Retourne rien si panier vide lors de la suppression", () => {
        const panier = new Panier();
        expect(panier.getArticles()).toHaveLength(0);
    });
});

describe('Calcul du total brut du panier', () => {

  it('Retourne le total brut pour un article seul', () => {
    const panier = new Panier();
    panier.ajouterArticle(new Article("Article 1", 10, 3)); // 3 x 10€

    expect(panier.calculerTotalBrut()).toBe(30);
  });

  it('Retourne le total brut pour plusieurs articles', () => {
    const panier = new Panier();
    panier.ajouterArticle(new Article("Article 1", 10, 2)); // 20€
    panier.ajouterArticle(new Article("Article 2", 5, 4));  // 20€

    expect(panier.calculerTotalBrut()).toBe(40);
  });

  it('Retourne 0 si le panier est vide', () => {
    const panier = new Panier();
    expect(panier.calculerTotalBrut()).toBe(0);
  });

});
