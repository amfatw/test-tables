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
    <ul className='control-buttons'>
      <li>
        <button
          className='download-button'
          onClick={downloadScheme}
        >
          Скачать
        </button>
      </li>
      <li>
        <label
          className='file-input-label'
          htmlFor="file-input"
        >
          Загрузить
        </label>
        <input
          className='file-input'
          type="file"
          accept=".json"
          onChange={handleUploadedFile}
          id='file-input'
        >
        </input>
      </li>
      <li>
        <button
          className='clear-button'
          onClick={handleClearScheme}
        >
          Удалить всё
        </button>
      </li>
      <li>
        <button
          className='delete-button'
          onClick={handleDeleteSelectedElement}
        >
          Удалить элемент
        </button>
      </li>
    </ul>
  )
}


export {ControlButtons};