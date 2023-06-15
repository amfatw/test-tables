import { useSelector, useDispatch } from 'react-redux';

import { furnitureTypeButtonClicked } from '../redux/listeners';

import { getButtonText } from '../utils/getButtonText';


const FurnitureList = () => {
  const furnitureTypes = useSelector((state) => state.furniture.furnitureTypes);
  const selectedType = useSelector((state) => state.furniture.elementTypeToAdd);
  const dispatch = useDispatch();

  const handleClick = (evt, type) => {
    evt.preventDefault();
    dispatch(furnitureTypeButtonClicked(type));
  }


  return (
    <ul className='furniture-list'>
      {
        furnitureTypes.map((type) => {  
          let classes = `furniture-button furniture-button-${type}`;
          if (type === selectedType) classes += ' furniture-button--selected';

          return (
            <li key={type}>
              <button 
                className={classes}
                // onClick={(evt) => evt.preventdefault()}
                onClick={(evt) => handleClick(evt, type)}
              >
              </button>
              <p className='furniture-name'>
                {getButtonText(type)}
              </p>
            </li>
          )
        })
      }
    </ul>
  )
}


export {FurnitureList};