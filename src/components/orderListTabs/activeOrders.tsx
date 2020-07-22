import React, { useEffect } from "react";
import "../styles.css";
import { Box } from "@chakra-ui/core";
import { receive_post } from "../../store/actions/fetch_order_data";
import { connect } from "react-redux";
import { Checkbox } from "@chakra-ui/core";
import { Avatar } from "@chakra-ui/core";
import OrderStatus from "../dropDown/orderStatus";
import Fulfillment from "../dropDown/fulfillment";

interface ActiveOrders {
  columnNames: Array<{
    orderId: Number;
    created: String;
    customer: String;
    fulfillment: String;
    total: String;
    profit: String;
    status: String;
    updated: String;
  }>;
  orders: Array<{
    orderId: Number;
    created: String;
    customer: String;
    customerSrc: string;
    fulfillment: string;
    total: String;
    profit: String;
    status: string;
    updated: String;
  }>;
  receive_post: Function;
}

const ActiveOrders: React.FC<ActiveOrders> = (props) => {
  const { columnNames, orders, receive_post } = props;
  useEffect(() => {
    receive_post();
  }, [receive_post]);

  return (
    <div className="font-size-15">
      {columnNames &&
        columnNames.map((item, index) => (
          <Box key={index} bg="#F5F5F5" className="mr-20 p-15">
            <div className="flex-row flex-sb mr-20 flex-align-center">
              <Checkbox />
              <span>{item.orderId}</span>
              <span>{item.created}</span>
              <span>{item.customer}</span>
              <span>{item.fulfillment}</span>
              <span>{item.total}</span>
              <span>{item.profit}</span>
              <span>{item.status}</span>
              <span>{item.updated}</span>
            </div>
          </Box>
        ))}
      {orders &&
        orders.map((item, index) => (
          <Box
            key={index}
            bg="white"
            borderWidth="1px"
            rounded="lg"
            className="mb-10 p-15"
          >
            <div className="flex-row flex-sb mr-20 flex-align-center">
              <Checkbox />
              <span className="color-Blue">{item.orderId}</span>
              <span>{item.created}</span>
              <span>
                <Avatar src={item.customerSrc} size="xs" className="mr-10" />
                {item.customer}
              </span>
              <span>
                <Fulfillment fulfillment={item.fulfillment} />
              </span>
              <span>{item.total}</span>
              <span>{item.profit}</span>
              <span>
                <OrderStatus status={item.status} />
              </span>
              <span>{item.updated}</span>
            </div>
          </Box>
        ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  receive_post: () => dispatch(receive_post()),
});

const mapStateToProps = (state: any) => {
  return {
    columnNames: state.columnNames,
    orders: state.orders,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveOrders);
