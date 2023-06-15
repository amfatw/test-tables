import { getHorisontalLinesCoords } from '../../utils/getHorisontalLinesCoords';
import { getVerticalLinesCoords } from '../../utils/getVerticalLinesCoords';


const SchemeGrid = ({size=500, step=25}) => {
  const horizontalLines = getHorisontalLinesCoords({size, step});
  const veticalLines = getVerticalLinesCoords({size, step});

  const greedCoords = [...veticalLines, ...horizontalLines];

  
  return (
    <g className='scheme__grid'>
      {
        greedCoords.map((line, index) => {
          const {x1, x2, y1, y2} = line;

          return (
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              key={index}
            />
          )
        })
      }
    </g>
  )
}


export {SchemeGrid};