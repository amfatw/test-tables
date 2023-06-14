function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.scrollY,
    right: box.right + window.scrollX,
    bottom: box.bottom + window.scrollY,
    left: box.left + window.scrollX
  };
}

export {getCoords};