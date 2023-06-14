import { useSelector } from 'react-redux';


const Sofa = ({x, y, id, size = 50, color = 'black', isBlank = false}) => {
  const selectedElementId = useSelector((state) => state.furniture.selectedElementId);
  
  const isSelected = isBlank
                     ? false
                     : id == selectedElementId;

  let classes = '';
  if (isBlank) classes += ' blank-element';
  if (isSelected) classes += ' selected-element';

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
      fill={color}
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