import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import up from './media/up.svg';
import city from './media/City.svg';
import Button from "../Card/Button";



const Container = styled.div`
  margin-bottom: 7rem;
 
    .wrapper{
      position: relative;
      background-color: ${theme.yellow};
      width: 18rem;
      height: 23rem;
      border-radius: 20px;
      box-shadow: 0px 2px 19px 1px rgba(0,0,0,0.45)

    }
    img{
      position: absolute;
      width: 18rem;
      height: 15rem;
    }
      
      .condition-section{
         
        position: absolute;
        z-index: 9;
        width: 18rem;
        height: 7rem;
        top: 15rem;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
          .checkbox{
            position: absolute;
            appearance: none;
            width: 100%;
            height: 100%;
            top:0;
            left: 0;
            z-index: 9999999;
            cursor: pointer;

            &:checked{
              transform: rotate(180deg) translateY(200%);
              
            ~.up{
              transform: translateY(-110%) rotate(180deg) ;
              height: 22rem;
            }
            ~.background{
              position: absolute;
              width: 100%;
              height: 22rem;
              top: 0;
              left: 0;
              background-color: ${theme.grey};
              transform: translateY(-70%);
              z-index: 10;
              padding: 4rem 1rem;
              opacity: 1;

              > * {
                display: block;
              }
            }
              
            }
          }
        .up{
          position: absolute;
          z-index: 99999;
          width: 3rem;
          height: 3rem;
          left: 40%;
          transition: all .3s;
        }
      }
        .city{
          width: 1.5rem;
          position: relative;
          top:-4rem ;
          left: 1rem;
        }
        .city-section{
          display: flex;
          flex-direction: row;
          gap: 2rem;
        }
          p{
              position: relative;
            

          }
        .city-name{
          position: relative;
          top: 3rem;

          color: ${theme.black}
          
        }
        .grid{
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(3, 1fr);
          grid-column-gap: 20px;
          grid-row-gap: 30px;
          position: relative;
          top: 2rem;
          left: 1rem;
        }
      .background{
        opacity: 0;
        display: none;
        transition: all .4s;
        > * {
          display: none;
        }
      }
      .price{
        color: ${theme.black};
        position: relative;
        top: 2.7rem;
        left: 4.2rem;
      }
`

function Card() {
    return (
        <Container >
            <div className="wrapper">
                <img src="https://images.unsplash.com/photo-1593184091721-409ccc1753d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt=""/>
                <div className="condition-section">
                    <input className='checkbox' type="checkbox"  />
                    {/*<FontAwesomeIcon className='up' icon={faChevronUp}></FontAwesomeIcon>*/}
                    <img className='up' src={up} alt=""/>
                    <h5 className="price">price /month</h5>
                    <div className="city-section">
                        <img className='city' src={city} alt=""/>
                        <h5 className='city-name'>city</h5>
                        <Button />
                    </div>

                    <div className='background'>
                        <p>&nbsp; Hello everyone, i have found a flat in el massira, and im actually looking for 2 flatmates </p>
                        <h5>Requirments :</h5>
                        <div className="grid">
                            <h6>Non smoker</h6>
                            <h6>Ensa student</h6>
                            <h6>Clean</h6>
                            <h6>At least 22 yo</h6>

                        </div>

                    </div>
                </div>
            </div>

        </Container>
    );
}

export default Card;