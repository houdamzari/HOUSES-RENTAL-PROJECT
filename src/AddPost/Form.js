import React, {useState} from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import Button from "./Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearchLocation, faVenusMars} from "@fortawesome/free-solid-svg-icons";
import Spacer from "../Utilities/Spacer";

const Container = styled.div`

  display: flex;
  flex-direction: row;
  gap: 15rem;
  position: relative;
  top: 1rem;  
    .formcontrol{
        width: 22.7rem;
        height: 2.5rem;
        margin: .7rem;
        border-radius: .5rem;
        background-color:rgba(2, 102, 112,0.1);
          
}
    .flex{
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }
  .coordinates{
    width: 11rem;
    height: 2.5rem;
  }
      h5{
          position: relative;
        font-weight: 300; 
        left: .8rem;

        }

  
      .dropbtn{
        left: .5rem;
        width: 23rem;
        height:3rem ;
        background-color: transparent;
        border-radius: 10px;
        border: 2px solid ${theme.turquois};
        font-size: 1.1rem;
        margin-left: .5rem;
        margin-bottom: .7rem;  
        margin-top: .5rem;
    
      }
  input[type="checkbox"] {
    opacity: 0;
    appearance: none;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    &:checked{
      ~.dropdown-content{
        > * {

          opacity: 1;
        }
        position: absolute;
        left: 0;
        width: 100%;
        background-color: ${theme.grey};
        height: fit-content;
        z-index: 99999;
        border-radius: 10px;
      }
      ~.location {
        top: 20rem;
      }
      
    }
  }
  // input[type="text"] {
  //   display: inline-block;
  //   height: 40%;
  //   width: 25%;
  //   font-size: 1.1rem;
  //   top: 0;
  //   border: 2px solid ${theme.turquois};
  // }
  ul {
    display: flex;
    flex-direction: column;
    gap: .5rem;

  }

  li {
    list-style: none;
    position: relative;
    top: .5rem;

    border-bottom: 2px solid ${theme.turquois};
    left: -1rem;
    padding-bottom: .7rem;

  }
`
function Form(props) {

    const [location,setLocation] = useState('');
    const [checkk,setCheckk] = useState(false);
    return (
        <Container>
            <div className="firstflex">
            <h5 className="formlabel">Picture 1 :</h5>
            <div>
                <input type="text" className="formcontrol" id="Picture"/>
            </div>
                <h5 className="formlabel">Picture 2 :</h5>
                <div>
                    <input type="text" className="formcontrol" id="Picture"/>
                </div>
                <h5 className="formlabel">Picture 3 :</h5>
                <div>
                    <input type="text" className="formcontrol" id="Picture"/>
                </div>
            <h5 className="formlabel">Region :</h5>

                <div className="dropdown">
                    <input checked={checkk} onChange={(e)=>setCheckk(!checkk)}  type="checkbox" />
                    <button className="dropbtn">{location.length>0?location:'Location'}

                    </button>
                    <div className="dropdown-content location">
                        <ul>
                            <li onClick={(e)=> {
                                setLocation(e.target.innerHTML)
                                ;
                                setCheckk(false)
                            }}>Tetouan</li>
                            <li  onClick={(e)=> {
                                setLocation(e.target.innerHTML);
                                setCheckk(false)
                            }}>Martil</li>
                            <li  onClick={(e)=> {
                                setLocation(e.target.innerHTML);
                                setCheckk(false)
                            }}>Mediq</li>
                            <li  onClick={(e)=> {
                                setLocation(e.target.innerHTML);
                                setCheckk(false)
                            }}>Fenideq</li>

                        </ul>
                    </div>
                </div>
                <h5 className="formlabel">Adresse coordinates  :</h5>
                <Spacer margin='2rem'/>
                <div className='flex'>

                    <div>
                        <h5 className="formlabel">Longtitude  :</h5>

                        <input type="text" className="formcontrol coordinates" id="inputPassword"/>
                    </div>
                    <div>
                        <h5 className="formlabel">Laptitude :</h5>

                        <input type="text" className="formcontrol coordinates" id="inputPassword"/>
                    </div>
                </div>
                </div>

            <div className="secondflex">
                <h5 className="formlabel">Price :</h5>
                <div>
                    <input type="text" className="formcontrol" id="inputPassword"/>
                </div>
                <h5 className="formlabel">Conditions :</h5>
                <div>
                    <input type="text" className="formcontrol" id="inputPassword"/>
                </div>
                <h5 className="formlabel">Conditions 2:</h5>
                <div>
                    <input type="text" className="formcontrol" id="inputPassword"/>
                </div>
                <h5 className="formlabel">Conditions 3:</h5>
                <div>
                    <input type="text" className="formcontrol" id="inputPassword"/>
                </div>
                <h5 className="formlabel">Disponibilité :</h5>
                <div>
                    <input type="text" className="formcontrol" id="inputPassword"/>
                </div>
                <Button />

            </div>

        </Container>
    );
}

export default Form;