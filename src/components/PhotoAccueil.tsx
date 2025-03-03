'use client';

import Image from 'next/image';
import { photos } from '../data/database';
import Link from 'next/link';

import '../styles/photo.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const PhotoAccueil = () => {
  // Trier les photos par date (du plus récent au plus ancien)
  const dernieresPhotos = [...photos].sort((a, b) => new Date(b.date) - new Date(a.date));
  // Sélectionner les 4 plus récentes
  const recentPhotos = dernieresPhotos.slice(0, 4);


  return (
    <section className="photoAccueil">

        <div className="container">

            <h2 className="text-center fw-bold mb-4">Nos Photos</h2>

            <div className="row">
                {recentPhotos.map((photo, index) => (
                    <div key={index} className="col-md-6 col-lg-3 mb-4">
                        <div className="card">
                            <Image 
                                src={photo.url}
                                alt={photo.title} 
                                layout="fill" 
                                objectFit="cover" 
                                className="card-img"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <Link className="lienPhotos" href="/photos">
                <p>Voir toutes nos photos</p>
            </Link>

        </div>

    </section>
  );
};

export default PhotoAccueil;
