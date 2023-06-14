const getButtonText = (type) => {
  switch (type) {
    case 'chair':
      return 'Стул';

    case 'table':
      return 'Стол';

    case 'tableDouble':
      return 'Стол двойной';

    case 'tableDoubleVertical':
      return 'Стол двойной';

    case 'sofa':
      return 'Диван';
      
    case 'sofaVertical':
      return 'Диван';
      
    default:
      return 'Диван';
  }
}

export {getButtonText};