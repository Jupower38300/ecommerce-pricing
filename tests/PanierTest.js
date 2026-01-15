import { Panier } from '../src/Models/Panier';
import { Article } from '../src/Models/Article';

describe ('Gestion du panier', () => {

    it("Ajout d'un article au panier", () => {
        const panier = new Panier();
        const article = new Article("Article 1", 10);
        panier.ajouterArticle(article);
        expect(panier.getArticles()).toHaveLength(1);
        expect(panier.getArticles()[0]).toBe(article);
    });

    it("Suppression d'un article du panier", () => {
        const panier = new Panier();
        const article = new Article("Article 1", 10);
        panier.ajouterArticle(article);
        panier.supprimerArticle(article);
        expect(panier.getArticles()).toHaveLength(0);
    });
});