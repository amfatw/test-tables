import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { elementOnSchemeClicked } from '../redux/listeners';

import { SchemeGrid } from './svg/SchemeGrid';
import { BlankElement } from './svg/BlankElement';
import { SwitchElement } from './svg/SwitchElement';

import { getCoords } from '../utils/getCoords';


const Scheme = () => {
  const dispatch = useDispatch();
  const allElements = useSelector((state) => state.furniture.allElements);
  const elementTypeToAdd = useSelector((state) => state.furniture.elementTypeToAdd)
  const [mouseCoordsForBlank, setMouseCoordsForBlank] = useState({x: 0, y: 0});
  const schemeRef = useRef(null);
  
  const handleMove = (event) => {
    if (!elementTypeToAdd) return;

    const {pageX: mouseX, pageY: mouseY} = event;
    const {left: elementX, top: elementY} = getCoords(schemeRef.current);

    const offsetX = Math.round(mouseX - elementX);
    const offsetY = Math.round(mouseY - elementY);

    const x = offsetX >= 0 ? offsetX : 0;
    const y = offsetY >= 0 ? offsetY : 0;

    setMouseCoordsForBlank({x: x, y: y})
  }

  const handleClick = (event) => {
    event.preventDefault();
    const element = event.target.closest('g');

    if (!element) {
      dispatch(elementOnSchemeClicked(null));
      return;
    }

    dispatch(elementOnSchemeClicked(element.id));
  }


  return (
    <svg 
      className='scheme'
      xmlns="http://www.w3.org/2000/svg"
      ref={schemeRef}
      onMouseMove={handleMove}
      onClick={handleClick}
    >
      <SchemeGrid/>
      
      {
        allElements.map((element) => {
          const {type, x, y, id} = element;
          
          return (
            <SwitchElement
              type={type}
              x={x}
              y={y}
              id={id}
              key={id}
            />
          )
        })
      }

      <BlankElement 
        mouseX={mouseCoordsForBlank.x}
        mouseY={mouseCoordsForBlank.y}
      />
    </svg>
  )
}


export {Scheme};