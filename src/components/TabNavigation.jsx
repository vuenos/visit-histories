import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function TabNavigation() {
  const tabs = useSelector((state) => state.tabs.tabs);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleTabClick = (path) => {
    history.push(path);
  };

  const handleTabClose = (path) => {
    dispatch({ type: "REMOVE_TAB", payload: { path } });
  };

  return (
    <div>
      {tabs.map((tab) => (
        <div key={tab.path}>
          <button onClick={() => handleTabClick(tab.path)}>{tab.name}</button>
          <button onClick={() => handleTabClose(tab.path)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default TabNavigation;
