import { Link, useParams } from 'react-router-dom'
import React from 'react';
import './Personas.css';
import Freya from './FriendlyFreya.png'
import Adam from './AspiringAdam.png'
import Emma from './ExperiencedEmma.png'

function DefaultPersona(){
    return (
        <div className="bgContainer">
          <div className="divContainer">
            <div>
              <div className = "pLinkContainer">
              <Link className="personaLinks" to="/personas/1">Persona 1</Link>
              <Link className="personaLinks" to="/personas/2">Persona 2</Link>
              <Link className="personaLinks" to="/personas/3">Persona 3</Link>
              </div>
            </div>
          </div>
        </div>
      );
}

function Persona1(){
    return (
        <div className="bgContainer">
          <div className="divContainer">
            <div>
                <div className = "pLinkContainer">
                    <Link className="personaLinks" id="activeLink" to="/personas/1">Persona 1</Link>
                    <Link className="personaLinks" to="/personas/2">Persona 2</Link>
                    <Link className="personaLinks" to="/personas/3">Persona 3</Link>
                </div>
                <div className="personas"> 
                    <div className="cols" id="image">
                        <img src={Freya} alt="Image"></img>
                    </div>
                </div>
            </div>
          </div>
        </div>
      );
}


function Persona2(){
    return (
        <div className="bgContainer">
          <div className="divContainer">
            <div>
                <div className = "pLinkContainer">
                    <Link className="personaLinks"  to="/personas/1">Persona 1</Link>
                    <Link className="personaLinks" id="activeLink" to="/personas/2">Persona 2</Link>
                    <Link className="personaLinks" to="/personas/3">Persona 3</Link>
                </div>
                <div className="personas"> 
                    <div className="cols" id="image">
                        <img src={Adam}></img>
                    </div>
                </div>
            </div>
          </div>
        </div>
      );
}

function Persona3(){
    return (
        <div className="bgContainer">
          <div className="divContainer">
            <div>
                <div className = "pLinkContainer">
                    <Link className="personaLinks" to="/personas/1">Persona 1</Link>
                    <Link className="personaLinks" to="/personas/2">Persona 2</Link>
                    <Link className="personaLinks" id="activeLink" to="/personas/3">Persona 3</Link>
                </div>
                <div className="personas"> 
                    <div className="cols" id="image">
                        <img src={Emma} alt="Image"></img>
                    </div>
                </div>
            </div>
          </div>
        </div>
      );
}

const Personas = (props) => {
    let { id } = useParams();
    let persona;

    switch (id) {
        case '1':
            persona = <Persona1 />;
            break;
        case '2':
            persona = <Persona2 />;
            break;
        case '3':
            persona = <Persona3 />;
            break;
        default:
            persona = <DefaultPersona />;
    }

    return (
        <div>
            {persona}
        </div>
    )
}



export default Personas;
