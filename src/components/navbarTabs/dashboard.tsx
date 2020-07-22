import React from "react";

interface Dashboard {
  isDashboardVisible: Boolean;
}

const Dashboard: React.FC<Dashboard> = (props) => {
  if (props.isDashboardVisible) {
    return <div>Dashboard</div>;
  } else {
    return null;
  }
};

export default Dashboard;
