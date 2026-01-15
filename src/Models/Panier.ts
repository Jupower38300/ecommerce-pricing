import { Article } from './Article';

export class Panier {
  private articles: Article[] = [];


  ajouterArticle(article: Article): void {
    const existant = this.articles.find(a => a.nom === article.nom);
    
    if (existant) {
      existant.quantite += article.quantite;
    } else {
      this.articles.push(article);
    }
  }

  supprimerArticle(article: Article, quantite: number = 1): void {
    const existant = this.articles.find(a => a.nom === article.nom);
    if (!existant) return;

    if (quantite >= existant.quantite) {
      this.articles = this.articles.filter(a => a.nom !== article.nom);
    } else {
      existant.quantite -= quantite;
    }
  }

  getArticles(): Article[] {
    return this.articles;
  }

  calculerTotalBrut(): number {
    return this.articles.reduce(
      (total, article) => total + article.prixUnitaire * article.quantite,
      0
    );
  }


}
