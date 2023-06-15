import { useSelector } from 'react-redux';


const TableDouble = ({x, y, id, size=50, isBlank=false}) => {
  const selectedElementId = useSelector((state) => state.furniture.selectedElementId);

  const isSelected = id === Number(selectedElementId);

  let classes = 'scheme__tableDouble';
  if (isSelected) classes += ' selected-element';
  if (isBlank) classes += ' blank-element';

  const topLeft = `${x},${y}`;
  const topRight = `${x + (size * 2)},${y}`;
  const botRight = `${x + (size * 2)},${y + size}`;
  const botLeft = `${x},${y + size}`;

  const points = `${topLeft} ${topRight} ${botRight} ${botLeft}`;


  return (
    <g
      id={id}
      className={classes}
    >
      <polygon 
        points={points}
      />
    </g>
  )
}


export {TableDouble};