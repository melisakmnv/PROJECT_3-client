import React from 'react'
import '../../styles/Card.css'

const CardPlant = (props) => {



  return (
    <div className="Card__Container">
      <div className="Card">
        <div className="Head__Card">
          <h1>{props.plantProps.plantName}</h1>
          <h2>{props.plantProps.nameLatin}</h2>
        </div>
        <div className="Content__Container">
          <div className="Content__Card">
            <div class="all-pictures">
            <img class="main-picture" src="https://u.cubeupload.com/Sono/lierreterrestre3.jpg" alt=""></img>
            </div>
            <div class="card-botanique"><h3>Botanique</h3></div>
            <div><h4>Famille :</h4> <p>{props.plantProps.family}</p> </div>
            <div><h4>Autres noms :</h4> <p>_____</p> </div>
            <div><h4>Saisons :</h4> <p>_____ </p></div>
            
          </div>

          <hr />

          <div className="cuisine card-ideas">

            <h3>Idées Cuisines</h3>
           <div class="cuisine-icons">
             <img src="https://u.cubeupload.com/Sono/PESTO.png" alt=""></img>
             <img src="https://u.cubeupload.com/Sono/SALADE.png" alt=""></img>
             <img src="https://u.cubeupload.com/Sono/OMELETTE.png" alt=""></img>
             <img src="https://u.cubeupload.com/Sono/ASSAISONEMENT.png" alt=""></img>
           </div>
          </div>

          <div className="cuisine card-tastes">
           
            <h3>Saveurs & Textures</h3>
            <div class="parfums"><h4>Parfums :</h4> <p>citronnelle</p> <p>agrume</p> <p>menthe</p> <p>musqué</p> <p>herbacé</p></div>
            <div class="tastes"><h4>Goûts :</h4> <p>neutre</p> <p>poivré</p></div>
            <div class="textures"><h4>Textures :</h4> <p>tendre</p></div>
           
          </div>

          <div className="card-links">
            <h3>Sources et liens</h3>
            <div class="wiki-cuisine-sauvage">
              <a id="wikipedia" href="#" target="_blank">Wikipedia</a>
              <a id="cuisine-sauvage" href="#" target="_blank">Cuisine-Sauvage</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPlant
