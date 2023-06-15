const getVerticalLinesCoords = ({size, step}) => {
  const linesNeeded = size / step;

  const result = [];
  
  for (let i = 0; i <= linesNeeded; i++) {
    const coords = {
      x1: step * i,
      y1: 0,
      x2: step * i,
      y2: size
    };
    
    result.push(coords);
  }

  return result;
}

export {getVerticalLinesCoords};