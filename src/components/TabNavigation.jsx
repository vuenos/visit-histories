import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetTabs } from "../store";
import { Button } from "antd";

const Tabs = () => {
  const tabs = useSelector((state) => state.app.tabs);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTabClick = (url) => {
    navigate(url);
  };

  const handleLogout = () => {
    dispatch(resetTabs());
    navigate("/");
  };

  return (
    <div>
      {tabs.map((tab, index) => (
        <Button key={index} onClick={() => handleTabClick(tab.url)}>
          {tab.name}
        </Button>
      ))}
      <Button type="primary" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Tabs;
