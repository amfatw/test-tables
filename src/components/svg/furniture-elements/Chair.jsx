import { useSelector } from 'react-redux';


const Chair = ({x, y, id, size=50, isBlank=false}) => {
  const selectedElementId = useSelector((state) => state.furniture.selectedElementId);

  const isSelected = id === Number(selectedElementId);

  let classes = 'scheme__chair';
  if (isSelected) classes += ' selected-element';
  if (isBlank) classes += ' blank-element';

  const radius = size / 2;


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
    </g>
  )
}


export {Chair};