import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './Assets/Css/Core/App.css';
import Home from './Components/Home';
import Slide1 from './Components/AboutMe/Slide1';
import Slide2 from './Components/AboutMe/Slide2';
import Slide3 from './Components/AboutMe/Slide3';
import Contact from './Components/Contact';

const App = () => (
  <ReactFullpage
  //fullpage options
  /* Options here */
  scrollingSpeed = {1000} //Vitesse de scrolling
  navigation = "true" //Ajoute les points de navigation
  anchors={['Home', 'AboutMe', 'Contact']} //Montre dans la barre d'url le #Home/AboutMe/Contact. Commenter cette ligne pour supprimer option.
  navigationTooltips={["Home","About me", "Contact"]} //Nom des sections dans l'application
  showActiveTooltip = "true" //Affiche les noms des sections dans la navigation
  controlArrows = {false} //Supprime les fleches de directions sur les slides horizontales.
  slidesNavigation = "true" //Ajoute les points de navigation pour les slides

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>

          <div className="section s1">
            <Home/>        
          </div>

          <div className="section s2">
            <div className="slide">
              <Slide1/>
            </div>
            <div className="slide">
              <Slide2/>
            </div>
            <div className="slide">
              <Slide3/>
            </div>
          </div>

          <div className="section s3">
            <Contact/>
          </div>
          
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default App;
