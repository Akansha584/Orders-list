import React from "react";

interface Settings {
  isSettingsVisible: Boolean;
}

const Settings: React.FC<Settings> = (props) => {
  if (props.isSettingsVisible) {
    return <div>Settings</div>;
  } else {
    return null;
  }
};

export default Settings;
