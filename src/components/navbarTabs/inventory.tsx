import React from "react";

interface Inventory {
  isInventoryVisible: Boolean;
}
const Inventory: React.FC<Inventory> = (props) => {
  if (props.isInventoryVisible) {
    return <div>Inventory</div>;
  } else {
    return null;
  }
};

export default Inventory;
