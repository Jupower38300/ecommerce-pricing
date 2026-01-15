import { RemiseInterface } from '../Models/Remises';
import { RemisePourcentage } from '../Models/Remises';

describe('Remise Pourcentage', () => {

    it('devrait appliquer une remise de 10%', () => {
        const remise: RemiseInterface = new RemisePourcentage(10);
        const montantInitial = 200;
        const montantApresRemise = remise.appliquerRemise(montantInitial);
        expect(montantApresRemise).toBe(180);
    });

    it('devrait appliquer une remise de 25%', () => {
        const remise: RemiseInterface = new RemisePourcentage(25);
        const montantInitial = 400;
        const montantApresRemise = remise.appliquerRemise(montantInitial);
        expect(montantApresRemise).toBe(300);
    });

    it('devrait ne pas appliquer de remise si le pourcentage est 0%', () => {
        const remise: RemiseInterface = new RemisePourcentage(0);
        const montantInitial = 150;
        const montantApresRemise = remise.appliquerRemise(montantInitial);
        expect(montantApresRemise).toBe(150);
    });

    it('devrait gérer une remise de 100%', () => {
        const remise: RemiseInterface = new RemisePourcentage(100);
        const montantInitial = 80;
        const montantApresRemise = remise.appliquerRemise(montantInitial);
        expect(montantApresRemise).toBe(0);
    });

    it('devrait gérer une remise de 0%', () => {
        const remise: RemiseInterface = new RemisePourcentage(0);
        const montantInitial = 0;
        const montantApresRemise = remise.appliquerRemise(montantInitial);
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

