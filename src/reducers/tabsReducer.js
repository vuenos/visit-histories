import { ADD_TAB, REMOVE_TAB, CLEAR_TAB } from "../constants/tabsConstants";

export const tabListReducer = (state = {tabs: []}, action) => {
    switch (action.type) {
        case ADD_TAB:
            if (state.tabs.some(tab => tab.path === action.payload.path)) return state;
            return {
                ...state,
                tabs: [...state.tabs, action.payload],
            };
        case REMOVE_TAB:
            return {
                ...state,
                tabs: state.tabs.filter(tab => tab.path !== action.payload.path),
            };
        case CLEAR_TAB:
            return {tabs: []}
        default:
            return state;
    }
};