import { useSelector, useDispatch } from 'react-redux';

import { addElementClicked } from '../../redux/listeners';

import { Chair } from './furniture-elements/Chair';
import { Sofa } from './furniture-elements/Sofa';
import { SofaVertical } from './furniture-elements/SofaVertical';
import { Table } from './furniture-elements/Table';
import { TableDouble } from './furniture-elements/TableDouble';
import { TableDoubleVertical } from './furniture-elements/TableDoubleVertical';


const BlankElement = ({mouseX, mouseY, size=50}) => {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.furniture.elementTypeToAdd);
  
  const handleClick = ({evt, x, y}) => {
    evt.preventDefault();
    evt.stopPropagation();

    dispatch(addElementClicked({
      type: type,
      x: x,
      y: y,
      id: new Date().getTime()
    }))
  }


  if (type === 'chair') {
    const x = mouseX - (size/2);
    const y = mouseY - (size/2);

    return (
      <g onClick={(evt) => handleClick({evt, x, y})}>
        <Chair 
          x={x}
          y={y}
          isBlank={true}
        />
      </g>
    )
  }

  if (type === 'table') {
    const x = mouseX - (size/2);
    const y = mouseY - (size/2);

    return (
      <g onClick={(evt) => handleClick({evt, x, y})}>
        <Table 
          x={x}
          y={y}
          isBlank={true}
        />
      </g>
    )
  }

  if (type === 'tableDouble') {
    const x = mouseX - size;
    const y = mouseY - (size/2);

    return (
      <g onClick={(evt) => handleClick({evt, x, y})}>
        <TableDouble 
          x={x}
          y={y}
          isBlank={true}
        />
      </g>
    )
  }

  if (type === 'tableDoubleVertical') {
    const x = mouseX - (size/2);
    const y = mouseY - size;

    return (
      <g onClick={(evt) => handleClick({evt, x, y})}>
        <TableDoubleVertical 
          x={x}
          y={y}
          isBlank={true}
        />
      </g>
    )
  }

  if (type === 'sofa') {
    const x = mouseX - size;
    const y = mouseY - (size/2);

    return (
      <g onClick={(evt) => handleClick({evt, x, y})}>
        <Sofa 
          x={x}
          y={y}
          isBlank={true}
        />
      </g>
    )
  }

  if (type === 'sofaVertical') {
    const x = mouseX - (size/2);
    const y = mouseY - size;

    return (
      <g onClick={(evt) => handleClick({evt, x, y})}>
        <SofaVertical 
          x={x}
          y={y}
          isBlank={true}
        />
      </g>
    )
  }

  return null;
}


export {BlankElement};