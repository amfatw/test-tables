import { Chair } from './furniture-elements/Chair';
import { Sofa } from './furniture-elements/Sofa';
import { SofaVertical } from './furniture-elements/SofaVertical';
import { Table } from './furniture-elements/Table';
import { TableDouble } from './furniture-elements/TableDouble';
import { TableDoubleVertical } from './furniture-elements/TableDoubleVertical';


const SwitchElement = ({type, x, y, id}) => {
  switch (type) {
    case 'chair':
      return (
        <Chair
          x={x}
          y={y}
          id={id}
        />
      )

    case 'table':
      return (
        <Table
          x={x}
          y={y}
          id={id}
        />
      )

    case 'tableDouble':
      return (
        <TableDouble
          x={x}
          y={y}
          id={id}
        />
      )

    case 'tableDoubleVertical':
      return (
        <TableDoubleVertical
          x={x}
          y={y}
          id={id}
        />
      )

    case 'sofa':
      return (
        <Sofa
          x={x}
          y={y}
          id={id}
        />
      )

    case 'sofaVertical':
      return (
        <SofaVertical
          x={x}
          y={y}
          id={id}
        />
      )

    default:
      return null;
  }
}


export {SwitchElement};