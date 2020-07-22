import { FETCHED_ORDER_DATA } from "./actions/fetch_order_data";
interface State {}

const initialState = {};

const reducer = (state: State = initialState, action: any): State => {
  switch (action.type) {
    case FETCHED_ORDER_DATA:
      return {
        ...state,
        columnNames: [...action.data.column_names],
        orders: [...action.data.orders],
        graphData: [...action.data.graph_data],
      };
    default:
      return state;
  }
};

export default reducer;
