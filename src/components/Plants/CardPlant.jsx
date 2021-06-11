import React from 'react'
import '../../styles/Card.css'
import { Link } from 'react-router-dom'
import EditPlant from './EditPlant'

const CardPlant = (props) => {
  const { namePart, _id, descriptionPart, handleEdit, handleDelete } = props;



  return (
    <div className="Card__Container">
      <div className="Card">
        <div className="Head__Card">
          <p>{namePart}</p>
          <h1>{props.plantProps.plantName}</h1>
          <h2>{props.plantProps.nameLatin}</h2>
        </div>
        <div className="Content__Container">
          <div className="Content__Card">
            <div class="all-pictures">
              <img class="main-picture" src="https://st4.depositphotos.com/2370557/30365/i/1600/depositphotos_303653812-stock-photo-fresh-basil-plant-with-green.jpg" alt=""></img>
            </div>
            <p>{descriptionPart}</p>
            <div class="card-botanique"><h3>Botanique</h3></div>
            <div><h4>Famille :</h4> <p>{props.plantProps.family}</p> </div>
            <div><h4>Nom en latin :</h4> <p>{props.plantProps.nameLatin}</p> </div>
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

              <p>{descriptionPart}</p>
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

            <div>
              <Link>
                <button>Edit</button>
              </Link>

              <Link>
                <button>Delete</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPlant
