const HallPlan = ({anglesCoords}) => {
  const anglesCoords = [
    {x: 0, y: 0},
    {x: 250, y: 0},
    {x: 250, y: 200},
    {x: 500, y: 200},
    {x: 500, y: 500},
    {x: 0, y: 500},
  ]

  
  return (
    <g>
      {
        anglesCoords.map((angle, index, array) => {
          const nextAngle = array[index + 1] || array[0];

          const {x: x1, y: y1} = angle;
          const {x: x2, y: y2} = nextAngle;

          return (
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="red" key={index}/>
          )
        })
      }
    </g>
  )
}


export {HallPlan};