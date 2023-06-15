import { useSelector } from 'react-redux';


const TableDoubleVertical = ({x, y, id, size=50, isBlank=false}) => {
  const selectedElementId = useSelector((state) => state.furniture.selectedElementId);

  const isSelected = id === Number(selectedElementId);

  let classes = '';
  if (isSelected) classes += ' selected-element';
  if (isBlank) classes += ' blank-element';

  const topLeft = `${x},${y}`;
  const topRight = `${x + size},${y}`;
  const botRight = `${x + size},${y + (size * 2)}`;
  const botLeft = `${x},${y + (size * 2)}`;

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


export {TableDoubleVertical};