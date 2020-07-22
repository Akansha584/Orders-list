import React, { useState } from "react";
import { Box } from "@chakra-ui/core";
import NavBar from "./components/navBar";
import Orders from "./components/navbarTabs/orders";
import Settings from "./components/navbarTabs/settings";
import Dashboard from "./components/navbarTabs/dashboard";
import Customers from "./components/navbarTabs/customers";
import Inventory from "./components/navbarTabs/inventory";

const App: React.FC = () => {
  const [isDashboardVisible, updateDashboardVisibility] = useState(false);
  const [isOrdersVisible, updateOrdersVisibility] = useState(false);
  const [isSettingsVisible, updateSettingsVisibility] = useState(false);
  const [isCustomersVisible, updateCustomersVisibility] = useState(false);
  const [isInventoryVisible, updateInventoryVisibility] = useState(false);

  const updateVisibilityValues = (name: String) => {
    if (name === "Dashboards") {
      updateDashboardVisibility(true);
      updateOrdersVisibility(false);
      updateSettingsVisibility(false);
      updateCustomersVisibility(false);
      updateInventoryVisibility(false);
    }
    if (name === "Inventory") {
      updateDashboardVisibility(false);
      updateOrdersVisibility(false);
      updateSettingsVisibility(false);
      updateCustomersVisibility(false);
      updateInventoryVisibility(true);
    }
    if (name === "Settings") {
      updateDashboardVisibility(false);
      updateOrdersVisibility(false);
      updateSettingsVisibility(true);
      updateCustomersVisibility(false);
      updateInventoryVisibility(false);
    }
    if (name === "Orders") {
      updateDashboardVisibility(false);
      updateOrdersVisibility(true);
      updateSettingsVisibility(false);
      updateCustomersVisibility(false);
      updateInventoryVisibility(false);
    }
    if (name === "Customers") {
      updateDashboardVisibility(false);
      updateOrdersVisibility(false);
      updateSettingsVisibility(false);
      updateCustomersVisibility(true);
      updateInventoryVisibility(false);
    }
  };

  return (
    <Box
      w="100%"
      h="100%"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      bg="#F5F5F5"
    >
      <NavBar
        updateVisibilityValues={updateVisibilityValues}
        updateDashboardVisibility={updateDashboardVisibility}
        updateOrdersVisibility={updateOrdersVisibility}
        updateInventoryVisibility={updateInventoryVisibility}
        updateSettingsVisibility={updateSettingsVisibility}
        updateCustomersVisibility={updateCustomersVisibility}
        isDashboardVisible={isDashboardVisible}
        isOrdersVisible={isOrdersVisible}
        isSettingsVisible={isSettingsVisible}
        isCustomersVisible={isCustomersVisible}
        isInventoryVisible={isInventoryVisible}
      />
      <Orders isOrdersVisible={isOrdersVisible} />
      <Settings isSettingsVisible={isSettingsVisible} />
      <Dashboard isDashboardVisible={isDashboardVisible} />
      <Customers isCustomersVisible={isCustomersVisible} />
      <Inventory isInventoryVisible={isInventoryVisible} />
    </Box>
  );
};

export default App;
