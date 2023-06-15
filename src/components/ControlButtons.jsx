import { useSelector, useDispatch } from 'react-redux';

import {
  clearSchemeClicked,
  deleteSelectedElementClicked,
  elementsLoadedFromFile,
} from '../redux/listeners';

import { downloadData } from '../utils/downloadData';


const ControlButtons = () => {
  const dispatch = useDispatch();
  const placedElements = useSelector((state) => state.furniture.allElements);

  const handleClearScheme = (event) => {
    event.preventDefault();
    dispatch(clearSchemeClicked());
  }

  const downloadScheme = (event) => {
    event.preventDefault();
    downloadData(placedElements, 'Схема зала.json');
  }

  const handleUploadedFile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const contents = e.target.result;
      const data = JSON.parse(contents);

      dispatch(elementsLoadedFromFile([...data]))
    };

    reader.readAsText(file);

    event.target.value = '';
  }

  const handleDeleteSelectedElement = (event) => {
    event.preventDefault();
    dispatch(deleteSelectedElementClicked())
  }


  return (
    <ul className='buttons-list'>
      <li>
        <button onClick={downloadScheme}>
          Скачать схему
        </button>
      </li>
      <li>
        <button onClick={handleClearScheme}>
          Очистить схему
        </button>
      </li>
      <li>
        <input 
          type="file"
          accept=".json"
          onChange={handleUploadedFile}
        >
        </input>
      </li>
      <li>
        <button onClick={handleDeleteSelectedElement}>
          Удалить элемент
        </button>
      </li>
    </ul>
  )
}


export {ControlButtons};