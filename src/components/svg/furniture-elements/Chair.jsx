import { useSelector } from 'react-redux';


const Chair = ({x, y, id, size = 50, color = 'black', isBlank = false}) => {
  const selectedElementId = useSelector((state) => state.furniture.selectedElementId);

  const isSelected = isBlank
                     ? false
                     : id == selectedElementId;

  let classes = '';
  if (isBlank) classes += ' blank-element';
  if (isSelected) classes += ' selected-element';
  
  const radius = size / 2;


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
    </g>
  )
}


export {Chair};