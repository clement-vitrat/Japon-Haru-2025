import Image from "next/image";

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/typespage.css';
import '../styles/homepage.css';
import '../styles/navbar.css';
import '../styles/styles.css';

import Navbar from '../components/Navbar';
import HomePage from '../components/HomePage';
import TypesPage from '../components/TypesPage';
import ArticleAccueil from '../components/ArticleAccueil';
import PhotoAccueil from '../components/PhotoAccueil';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <TypesPage/>
      <ArticleAccueil/>
      <PhotoAccueil/>
      <Footer/>
    </div>
  );
}
