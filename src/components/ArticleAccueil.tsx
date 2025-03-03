'use client';

import Image from 'next/image';
import { article } from '../data/database';
import Link from 'next/link';

import '../styles/article.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const ArticleAccueil = () => {
  // Trier les articles par date (du plus récent au plus ancien)
  const derniersArticles = [...article].sort((a, b) => new Date(b.date) - new Date(a.date));
  // Sélectionner les 3 plus récents
  const recentArticles = derniersArticles.slice(0, 3);

  // Fonction pour formater la date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('fr-FR', options); // 'fr-FR' pour le format français
  };


  return (
    <section className="articleAccueil">

        <div className="container py-5">

            <h2 className="text-center fw-bold mb-4">Nos Articles</h2>

            <div className="row">
                {recentArticles.map((article, index) => (
                    
                    <div key={index} className="col-md-6 col-lg-4 mb-4">
                        <div className="card border-0 shadow-sm overflow-hidden position-relative">
                            <Image 
                                src={article.image} 
                                alt={article.title} 
                                layout="fill" 
                                objectFit="cover" 
                                className="card-img"
                            />
                            <div className="overlay">
                                <h5 className="fw-bold text-white">{article.title}</h5>
                                <p>{formatDate(article.date)} • {article.localisation}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Link className="lienArticles" href="/articles">
                <p>Voir tous nos articles</p>
            </Link>

        </div>

    </section>
  );
};

export default ArticleAccueil;
