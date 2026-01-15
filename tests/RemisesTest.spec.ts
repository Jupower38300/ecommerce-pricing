import { Panier } from '../src/Models/Panier';
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

    it('devrait envoyer une erreur si le pourcentage est invalide', () => {
        expect(() => {
            new RemisePourcentage(-5);
        }).toThrow('Pourcentage invalide');
    });

    it('devrait renvoyer une erreur si le pourcentage est supérieur à 100%', () => {
        expect(() => {
            new RemisePourcentage(150);
        }).toThrow('Pourcentage invalide');
    });
});

