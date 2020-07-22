import React, { useEffect } from "react";
import "../styles.css";
import { Button } from "@chakra-ui/core";
import { Icon } from "@chakra-ui/core";
import { FaEllipsisH } from "react-icons/fa";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core";
import { Box } from "@chakra-ui/core";
import ActiveOrders from "../orderListTabs/activeOrders";
import AllOrders from "../orderListTabs/allOrders";
import Unpaid from "../orderListTabs/unpaid";
import Unfulfilled from "../orderListTabs/unfulfilled";
import { receive_post } from "../../store/actions/fetch_order_data";
import { connect } from "react-redux";
import OrderGraph from "../graph";

const options = ["All orders", "Active", "Unpaid", "Unfulfilled"];
const tabDetails = [AllOrders, ActiveOrders, Unpaid, Unfulfilled];

interface Orders {
  graphData: Array<{
    orderType: String;
    count: number;
    graphColor: string;
    graphStroke: string;
  }>;
  isOrdersVisible: Boolean;
  receive_post: Function;
}

const Orders: React.FC<Orders> = (props) => {
  const { graphData } = props;
  useEffect(() => {
    receive_post();
  });

  if (props.isOrdersVisible) {
    return (
      <div className="flex-column">
        <div className="flex-row flex-sb mt-30 p-lr-90">
          <div className="font-size-20 font-w-600">Orders list</div>
          <div className="flex-row flex-sb w-12 flex-align-center">
            <FaEllipsisH />
            <Button variantColor="blue" size="sm">
              Create Order
            </Button>
          </div>
        </div>

        <div className="flex-row flex-sb mt-30 mb-30 p-lr-90">
          {graphData &&
            graphData.map((item, index) => (
              <Box
                key={index}
                bg="white"
                borderWidth="1px"
                rounded="sm"
                className="p-10"
              >
                <div className="flex-row flex-sb">
                  <div className="flex-column mr-45">
                    <div className="gray">{item.orderType}</div>
                    <div>
                      <b>{item.count}</b>
                    </div>
                  </div>
                  <div className="ml-20">
                    <OrderGraph
                      graphColor={item.graphColor}
                      graphStroke={item.graphStroke}
                    />
                  </div>
                </div>
              </Box>
            ))}
        </div>

        <div className="p-lr-80">
          <Tabs variant="unstyled">
            <TabList>
              {options.map((item, index) => {
                return (
                  <Tab className="tabStyle" key={index}>
                    {item}
                  </Tab>
                );
              })}
              <Icon name="search" color="gray" />
            </TabList>
            <TabPanels>
              {tabDetails.map((item, index) => {
                const TabDetails = item;
                return (
                  <TabPanel className="p-15" key={index}>
                    <TabDetails />
                  </TabPanel>
                );
              })}
            </TabPanels>
          </Tabs>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

const mapDispatchToProps = (dispatch: any) => ({
  receive_post: () => dispatch(receive_post()),
});

const mapStateToProps = (state: any) => {
  return { graphData: state.graphData };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
