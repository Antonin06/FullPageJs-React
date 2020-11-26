import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './Assets/Css/Core/App.css';

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
            <p>Section 1 (welcome to fullpage.js)</p>            
          </div>
          <div className="section s2">
            <div className="slide">
              <p>Slide 1 </p>
            </div>
            <div className="slide">
              <p>Slide 2</p>
            </div>
            <div className="slide">
              <p>Slide 3</p>
            </div>
          </div>
          <div className="section s3">
            <p>Section 3</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default App;
