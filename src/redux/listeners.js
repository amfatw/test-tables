import { createListenerMiddleware, createAction } from '@reduxjs/toolkit';

import {
  selectElementTypeToAdd,
  deleteAllElements,
  importElementsFromFile,
  deleteSelectedElement,
  selectElement,
  addElement,
} from './furnitureSlice';


const listenerMiddleware = createListenerMiddleware();

const furnitureTypeButtonClicked = createAction('listener/furnitureTypeButtonClicked');
const clearSchemeClicked = createAction('listener/clearSchemeClicked');
const elementsLoadedFromFile = createAction('listener/elementsLoadedFromFile');
const deleteSelectedElementClicked = createAction('listener/deleteSelectedElementClicked');
const elementOnSchemeClicked = createAction('listener/elementOnSchemeClicked');
const addElementClicked = createAction('listener/addElementClicked');


listenerMiddleware.startListening({
  actionCreator: furnitureTypeButtonClicked,
  effect: (action, {dispatch, getState} ) => {
    dispatch(selectElementTypeToAdd(action.payload));
  }
});

listenerMiddleware.startListening({
  actionCreator: clearSchemeClicked,
  effect: (action, {dispatch, getState} ) => {
    dispatch(deleteAllElements());
  }
});

listenerMiddleware.startListening({
  actionCreator: elementsLoadedFromFile,
  effect: (action, {dispatch, getState} ) => {
    dispatch(importElementsFromFile(action.payload));
  }
});

listenerMiddleware.startListening({
  actionCreator: deleteSelectedElementClicked,
  effect: (action, {dispatch, getState} ) => {
    dispatch(deleteSelectedElement());
  }
});

listenerMiddleware.startListening({
  actionCreator: elementOnSchemeClicked,
  effect: (action, {dispatch, getState} ) => {
    const id = action.payload;

    if (!id) {
      dispatch(selectElement(null));
      return;
    };

    const currenSelectedElementId = getState().furniture.selectedElementId;
    
    if (id === currenSelectedElementId) {
      dispatch(selectElement(null));
      return;
    }
    
    dispatch(selectElement(id));
  }
});

listenerMiddleware.startListening({
  actionCreator: addElementClicked,
  effect: (action, {dispatch, getState} ) => {
    dispatch(addElement(action.payload));
  }
});


export { listenerMiddleware };
export { 
  furnitureTypeButtonClicked,
  clearSchemeClicked,
  elementsLoadedFromFile,
  deleteSelectedElementClicked,
  elementOnSchemeClicked,
  addElementClicked,
};