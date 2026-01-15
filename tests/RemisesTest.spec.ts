import { Panier } from '../src/Models/Panier';
import { Article, CategorieArticle } from '../src/Models/Article';
import { RemiseMontantFixe } from '../src/Remises/RemiseMontantFixe';
import { RemiseInterface } from '../src/Remises/RemiseInterface';
import { RemisePourcentage } from '../src/Remises/RemisePourcentage';

describe('Remise Pourcentage', () => {

    it('devrait appliquer une remise de 10%', () => {
        const panier = new Panier();
        panier.ajouterArticle({ prixUnitaire: 100, quantite: 2 } as any);
        const remise: RemiseInterface = new RemisePourcentage(10);
        const montantApresRemise = remise.appliquerRemise(panier);
        expect(montantApresRemise).toBe(180);
    });

    it('devrait appliquer une remise de 25%', () => {
        const panier = new Panier();
        panier.ajouterArticle({ prixUnitaire: 200, quantite: 2 } as any);
        const remise: RemiseInterface = new RemisePourcentage(25);
        const montantApresRemise = remise.appliquerRemise(panier);
        expect(montantApresRemise).toBe(300);
    });

    it('devrait ne pas appliquer de remise si le pourcentage est 0%', () => {
        const panier = new Panier();
        panier.ajouterArticle({ prixUnitaire: 150, quantite: 1 } as any);
        const remise: RemiseInterface = new RemisePourcentage(0);
        const montantApresRemise = remise.appliquerRemise(panier);
        expect(montantApresRemise).toBe(150);
    });

    it('devrait gérer une remise de 100%', () => {
        const panier = new Panier();
        panier.ajouterArticle({ prixUnitaire: 50, quantite: 3 } as any);
        const remise: RemiseInterface = new RemisePourcentage(100);
        const montantApresRemise = remise.appliquerRemise(panier);
        expect(montantApresRemise).toBe(0);
    });

    it('devrait gérer une remise de 0%', () => {
        const panier = new Panier();
        panier.ajouterArticle({ prixUnitaire: 0, quantite: 5 } as any);
        
        const remise: RemiseInterface = new RemisePourcentage(0);
        const montantApresRemise = remise.appliquerRemise(panier);
        expect(montantApresRemise).toBe(0);
    });

    it('devrait envoyer une erreur si le pourcentage est invalide (négatif)', () => {
        const panier = new Panier();

        expect(() => {
            new RemisePourcentage(-5); // l'erreur est levée ici
        }).toThrow('Pourcentage invalide');
    });

    it('devrait envoyer une erreur si le pourcentage est supérieur à 100%', () => {
        const panier = new Panier();

        expect(() => {
            new RemisePourcentage(150); // l'erreur est levée ici
        }).toThrow('Pourcentage invalide');
    });


});

describe('Remise Montant Fixe', () => {

  it('applique la remise si le panier dépasse le seuil', () => {
    const panier = new Panier();
    panier.ajouterArticle(new Article('Article 1', 50, CategorieArticle.ELECTRONIQUE, 2));

    const remise = new RemiseMontantFixe(20, 80);
    expect(remise.appliquerRemise(panier)).toBe(20);
  });

  it('ne s’applique pas si le panier est en dessous du seuil', () => {
    const panier = new Panier();
    panier.ajouterArticle(new Article('Article 1', 30,CategorieArticle.ELECTRONIQUE, 1));

    const remise = new RemiseMontantFixe(10, 50);
    expect(remise.appliquerRemise(panier)).toBe(0);
  });

  it('lance une erreur si le montant est invalide', () => {
    expect(() => new RemiseMontantFixe(0, 50)).toThrow();
  });

  it('lance une erreur si le seuil est invalide', () => {
    expect(() => new RemiseMontantFixe(10, 0)).toThrow();
  });

});
