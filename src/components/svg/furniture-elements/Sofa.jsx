import { useSelector } from 'react-redux';


const Sofa = ({x, y, id, size=50, isBlank=false}) => {
  const selectedElementId = useSelector((state) => state.furniture.selectedElementId);
  
  const isSelected = id === Number(selectedElementId);

  let classes = '';
  if (isSelected) classes += ' selected-element';
  if (isBlank) classes += ' blank-element';

  const radius = size / 2;
  
  const topLeft = `${x + radius},${y}`;
  const topRight = `${x + radius + size},${y}`;
  const botRight = `${x + radius + size},${y + size}`;
  const botLeft = `${x + radius},${y + size}`;

  const points = `${topLeft} ${topRight} ${botRight} ${botLeft}`;


  return (
    <g
      id={id}
      className={classes} 
    >
      <circle 
        cx={x + radius}
        cy={y + radius}
        r={radius} 
      />
      <polygon 
        points={points}
      />
      <circle 
        cx={x + radius + size}
        cy={y + radius}
        r={radius} 
      />
    </g>
  )
}


export {Sofa};