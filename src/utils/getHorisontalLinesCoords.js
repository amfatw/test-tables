const getHorisontalLinesCoords = ({size, step}) => {
  const linesNeeded = size / step;

  const result = [];
  
  for (let i = 0; i <= linesNeeded; i++) {
    const coords = {
      x1: 0,
      y1: step * i,
      x2: size,
      y2: step * i
    };
    
    result.push(coords);
  }

  return result;
}

export {getHorisontalLinesCoords};