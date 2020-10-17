import React from 'react';
import './App.css';
import Profile from "./profile/profile";
import Imag from "./profile/image";
import Albert from "./Albert_Einstein_1947.jpg";
function App() {
  const stylePic = { width: "28%" }
  Profile.defaultProps = {
    fullName: "Albert Einstein",
    bio: "Né le 14 mars 1879 à Ulm, dans le Wurtemberg (Empire allemand), et mort le 18 avril 1955 à Princeton, dans le New Jersey (États-Unis), est un physicien théoricien. Il fut successivement allemand, apatride (1896), suisse (1901) et de double nationalité helvético-américaine (1940)N 1. Il épousa Mileva Marić, puis sa cousine Elsa Einstein.Il publie sa théorie de la relativité restreinte en 1905 et sa théorie de la gravitation, dite relativité générale, en 1915. Il contribue largement au développement de la mécanique quantique et de la cosmologie, et reçoit le prix Nobel de physique de 1921 pour son explication de l’effet photoélectriqueN 2. Son travail est notamment connu du grand public pour l’équation E=mc2, qui établit une équivalence entre la masse et l’énergie d’un système.Il est aujourd'hui considéré comme l'un des plus grands scientifiques de l'histoire, et sa renommée dépasse largement le milieu scientifique. Il est la personnalité du xxe siècle selon l'hebdomadaire Time. Dans la culture populaire, son nom et sa personne sont directement liés aux notions d'intelligence, de savoir et de génie.",
    profession: "	Physique théorique",
    clicked : () =>{alert(Profile.defaultProps.fullName)},
  }
  return (
    <div className="App">
      <Profile />
      <Imag><img src={Albert} style={stylePic} alt="pic" /></Imag>
    </div>
  );
}


export default App;
