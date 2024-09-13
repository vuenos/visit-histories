// store.js
import {configureStore, createSlice} from '@reduxjs/toolkit';

const initialState = {
    tabs: JSON.parse(localStorage.getItem('tabs')) || [],
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        addTab(state, action) {
            const newTab = action.payload;
            if (!state.tabs.find(tab => tab.url === newTab.url)) {
                state.tabs.push(newTab);
                localStorage.setItem('tabs', JSON.stringify(state.tabs));
            }
        },
        resetTabs(state) {
            state.tabs = [];
            localStorage.removeItem('tabs');
        }
    }
});

export const {addTab, resetTabs} = appSlice.actions;

const store = configureStore({
    reducer: {
        app: appSlice.reducer
    }
});

export default store;
