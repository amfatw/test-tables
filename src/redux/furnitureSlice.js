import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit';

const initialElements = [
  {type: 'chair', x: 0, y: 0, id: 1},
  {type: 'table', x: 50, y: 0, id: 2},
  {type: 'tableDouble', x: 150, y: 50, id: 3},
  {type: 'tableDoubleVertical', x: 50, y: 150, id: 4},
  {type: 'sofa', x: 150, y: 0, id: 5},
  {type: 'sofaVertical', x: 0, y: 150, id: 6},
]

const furniture = createSlice({
  name: 'furniture',
  initialState: {
    allElements: initialElements, 
    elementTypeToAdd: null,
    selectedElementId: null,
    furnitureTypes: ['chair', 'table', 'tableDouble', 'tableDoubleVertical', 'sofa', 'sofaVertical']
  },
  reducers: {
    addElement(state, {payload}) {
      state.allElements.push(payload);
    },
    deleteSelectedElement(state) {
      const selectedElementId = state.selectedElementId;

      const newArr = state.allElements.filter((element) => (
        element.id != selectedElementId
      ));

      state.allElements = newArr;
    },    
    deleteAllElements(state) {      
      state.allElements = [];
    },    
    importElementsFromFile(state, {payload}) {
      state.allElements = payload;
    },    
    selectElementTypeToAdd(state, {payload}) {
      const newType = payload;
      const currentType = state.elementTypeToAdd;

      if (newType == currentType) {
        state.elementTypeToAdd = null;
        return;
      }

      state.elementTypeToAdd = newType;
    },
    selectElement(state, {payload}) {
      state.selectedElementId = payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(changeSettings, (state) => {
  //       state.list = [];
  //       state.status = 'ok';
  //       state.error = null;
  //     })
  //     .addCase(charactersEnded, (state) => {
  //       state.status = 'ended';
  //     })
  //     .addCase(fetchCharacters.pending, (state) => {
  //       state.status = 'loading';
  //       state.error = null;
  //     })
  //     .addCase(fetchCharacters.rejected, (state, action) => {
  //       const { name, message } = action.payload;

  //       state.status = 'error';
  //       state.error = `${name}: ${message}`
  //     })
  //     .addCase(fetchCharacters.fulfilled, (state, action) => {
  //       const characters = action.payload;

  //       if (characters.length < 1) {
  //         state.status = 'no result';
  //         return;
  //       }

  //       state.list = characters;
  //       state.status = 'ok';
  //     })
  // }
})


export const furnitureReducer = furniture.reducer;

export const {
  addElement,
  deleteSelectedElement,
  deleteAllElements,
  importElementsFromFile,
  selectElementTypeToAdd,
  selectElement,
} = furniture.actions;