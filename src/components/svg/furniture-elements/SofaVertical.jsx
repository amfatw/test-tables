import { useSelector } from 'react-redux';


const SofaVertical = ({x, y, id, size=50, color = 'black', isBlank=false}) => {
  const selectedElementId = useSelector((state) => state.furniture.selectedElementId);
  
  const isSelected = isBlank
                     ? false
                     : id == selectedElementId;
  
  let classes = '';
  if (isBlank) classes += ' blank-element';
  if (isSelected) classes += ' selected-element';

  const radius = size / 2;
  
  const topLeft = `${x},${y + radius}`;
  const topRight = `${x + size},${y + radius}`;
  const botRight = `${x + size},${y + radius + size}`;
  const botLeft = `${x},${y + radius + size}`;

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
        cx={x + radius}
        cy={y + radius + size}
        r={radius} 
      />
    </g>
  )
}


export {SofaVertical};