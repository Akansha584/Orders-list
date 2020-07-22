import { mocked_data } from "../../components/orderData";

export const FETCHED_ORDER_DATA = "FETCHED_ORDER_DATA";

export const receive_post = () => {
  return {
    type: FETCHED_ORDER_DATA,
    data: mocked_data,
  };
};
