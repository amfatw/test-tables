import { useSelector, useDispatch } from 'react-redux';

import { furnitureTypeButtonClicked } from '../redux/listeners';

import { getButtonText } from '../utils/getButtonText';


const FurnitureList = () => {
  const furnitureTypes = useSelector((state) => state.furniture.furnitureTypes);
  const selectedType = useSelector((state) => state.furniture.elementTypeToAdd);
  const dispatch = useDispatch();


  return (
    <ul className='furniture-list'>
      {
        furnitureTypes.map((type) => {  
          let classes = `furniture-button furniture-button--${type}`;
          if (type === selectedType) classes += ' furniture-button--selected';

          return (
            <li key={type}>
              <button 
                className={classes}
                onClick={() => dispatch(furnitureTypeButtonClicked(type))}
              >
                {getButtonText(type)}
              </button>
            </li>
          )
        })
      }
    </ul>
  )
}


export {FurnitureList};