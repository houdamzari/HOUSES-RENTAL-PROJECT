import React, {useState} from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faVenusMars} from "@fortawesome/free-solid-svg-icons";
import {faSearchLocation} from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.css';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import {Component} from "react";
import {faClock} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";


const Container = styled.div`
  width: 85rem;
  height: 8rem;
  background-color: ${theme.grey};
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem!important;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999999;

  .dropdown{
      position: relative;
      
    }
  .dropdown-content{
   height: 0vh;
    transition: all .4s;
    > *{
      opacity: 0;
  }}
  .dropbtn{
    width: 13rem;
    height:3rem ;
    background-color: transparent;
    border-radius: 10px;
    border: 2px solid ${theme.turquois};
    font-size: 1.1rem;


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
        top: -12rem;
      }
      ~.geender{
        top: -7rem;

      } 
      }
    }
  input[type="text"] {
    display: inline-block;
    height: 40%;
    width: 25%;
    font-size: 1.1rem;
    top: 0;
    border: 2px solid ${theme.turquois};
  }
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

    .gender {
      position: relative;
      left: 3rem;
      font-size: 1.7rem;
    }
  }
  .dateicon{
    font-size: 1.7rem;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 3rem;
  }
  .date{
    width: 4rem;
    height: 3.2rem;
    background-color:${theme.turquois};
    position: relative;
    left: -4.5rem;
    border-radius: 10px;

  }


  
  
    
    
`
function SearchFilter(props) {
    const [gender,setGender] = useState('')
    const [location,setLocation] = useState('')
    const [check,setCheck] = useState(false)
    const [checkk,setCheckk] = useState(false)
    const [date,setDate] = useState(null)
    const startDate = new Date();

    const endDate = new Date();
    return (
        <Container>
            <div className="dropdown">
                <input checked={check} onChange={(e)=>setCheck(!check)} type="checkbox" />
                <button className="dropbtn">{gender.length>0?gender:'Gender'}
                <FontAwesomeIcon className='gender' icon={faVenusMars}></FontAwesomeIcon>
                </button>
                <div className="dropdown-content geender">
                    <ul>
                    <li onClick={(e)=> {
                        setGender(e.target.innerHTML);
                        setCheck(false)
                    }}>Male</li>
                    <li  onClick={(e)=> {
                        setGender(e.target.innerHTML);
                            setCheck(false)
                    }}>Female</li>
                    </ul>
                </div>
            </div>
            <div className="dropdown">
                <input checked={checkk} onChange={(e)=>setCheckk(!checkk)}  type="checkbox" />
                <button className="dropbtn">{location.length>0?location:'Location'}
                    <FontAwesomeIcon className='gender' icon={faSearchLocation}></FontAwesomeIcon>

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

                <DateRangePicker   autoUpdateInput={false}
                                                               startDate={startDate}
                                                               endDate={endDate}
                                                               locale={{ format: "DD/MM/YYYY" }}
                                                               onApply={(event, picker) => {
                                                                   setDate({ start :picker.startDate.format("DD/MM/YYYY"),
                                                                       end: picker.endDate.format("DD/MM/YYYY")
                                                                   })}}
                                                               autoApply={true}  >
                <input type="text" className="form-control" />
            </DateRangePicker>




                <div className='date'><FontAwesomeIcon className='dateicon' icon={faClock}></FontAwesomeIcon>
                </div>
               <div className='btn search'><Button /></div>

        </Container>
    );
}

export default SearchFilter;