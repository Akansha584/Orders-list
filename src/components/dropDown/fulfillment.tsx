import React from "react";
import { Select } from "@chakra-ui/core";
import "../styles.css";

interface Fulfillment {
  fulfillment: string;
}
const Fulfillment: React.FC<Fulfillment> = (props) => {
  return (
    <div>
      <Select placeholder={props.fulfillment} size="sm">
        <option value="fulfilled" className="bg-green">
          Fulfilled
        </option>
        <option value="pending receipt" className="bg-purple">
          Pending Receipt
        </option>
        <option value="unfulfilled" className="bg-mustard">
          Unfulfilled
        </option>
      </Select>
    </div>
  );
};

export default Fulfillment;
