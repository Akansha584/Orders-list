import React from "react";
import { Select } from "@chakra-ui/core";
import "../styles.css";

interface OrderStatus {
  status: string;
}
const OrderStatus: React.FC<OrderStatus> = (props) => {
  return (
    <div>
      <Select placeholder={props.status} size="sm">
        <option value="authorized" className="bg-mustard">
          Authorized
        </option>
        <option value="paid" className="bg-green">
          Paid
        </option>
      </Select>
    </div>
  );
};

export default OrderStatus;
