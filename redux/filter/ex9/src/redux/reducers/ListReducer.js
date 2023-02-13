import { CONSTANTS } from "./../constants/index";

const { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM, FILTER_LIST } = CONSTANTS;

const initialState = {
  list: [
    { id: "1", title: "Change the glass", price: "21000" },
    { id: "2", title: "Change screen", price: "25000" },
    { id: "3", title: "Change battery", price: "4000" },
    { id: "4", title: "Change mic", price: "2500" },
  ],
  listFilters: [],
};

export const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, list: [...state.list, action.payload] };
    case REMOVE_ITEM:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
      };
    case EDIT_ITEM:
      return {
        ...state,
        list: [
          ...state.list.map((item) => {
            if (item.id === action.payload.id) {
              return action.payload;
            }
            return item;
          }),
        ],
      };
    case FILTER_LIST:
      return {
        ...state,
        listFilters: [
          ...state.list.filter(({ title }) => title.includes(action.payload)),
        ],
      };
    default:
      return state;
  }
};
