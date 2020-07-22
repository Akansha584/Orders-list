import React from "react";

interface Customers {
  isCustomersVisible: Boolean;
}

const Customers: React.FC<Customers> = (props) => {
  if (props.isCustomersVisible) {
    return <div>Customers</div>;
  } else {
    return null;
  }
};

export default Customers;
