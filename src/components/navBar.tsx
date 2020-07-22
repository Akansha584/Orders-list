import React from "react";
import { Avatar } from "@chakra-ui/core";
import { FaCube } from "react-icons/fa";
import { Icon } from "@chakra-ui/core";
import "./styles.css";

const NavBar: React.FC<any> = (props) => {
  const {
    updateDashboardVisibility,
    updateOrdersVisibility,
    updateInventoryVisibility,
    updateSettingsVisibility,
    updateCustomersVisibility,
    isDashboardVisible,
    isOrdersVisible,
    isSettingsVisible,
    isCustomersVisible,
    isInventoryVisible,
    updateVisibilityValues,
  } = props;
  const options: any = {
    dashboards: {
      name: "Dashboards",
      updateFunction: updateDashboardVisibility,
      currentFlag: isDashboardVisible,
    },
    orders: {
      name: "Orders",
      updateFunction: updateOrdersVisibility,
      currentFlag: isOrdersVisible,
    },
    customers: {
      name: "Customers",
      updateFunction: updateCustomersVisibility,
      currentFlag: isCustomersVisible,
    },
    inventory: {
      name: "Inventory",
      updateFunction: updateInventoryVisibility,
      currentFlag: isInventoryVisible,
    },
    settings: {
      name: "Settings",
      updateFunction: updateSettingsVisibility,
      currentFlag: isSettingsVisible,
    },
  };
  return (
    <div className="flex-row flex-sb flex-align-center bg-white w-100 p-lr-90 p-10">
      <FaCube />
      <div>
        {Object.keys(options).map((item, index) => {
          return (
            <span
              className="mr-20 tabStyle"
              style={{ cursor: "pointer" }}
              key={index}
              onClick={() => updateVisibilityValues(options[item].name)}
            >
              {options[item].name}
            </span>
          );
        })}
      </div>
      <div>
        <Icon name="bell" color="gray" className="mr-15" />
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/code-beast"
          size="sm"
          className="mr-10"
        />
        <Icon name="triangle-down" color="gray" />
      </div>
    </div>
  );
};

export default NavBar;
