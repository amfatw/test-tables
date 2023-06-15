import { useSelector } from 'react-redux';


const SofaVertical = ({x, y, id, size=50, isBlank=false}) => {
  const selectedElementId = useSelector((state) => state.furniture.selectedElementId);
  
  const isSelected = id === Number(selectedElementId);
  
  let classes = '';
  if (isSelected) classes += ' selected-element';
  if (isBlank) classes += ' blank-element';

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