import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import tabsMapper from "../../constants/tabsMapper";
import { Users } from "../../Components/Users/User";
import Counter from "../../Components/Counter/Counter";
import { DataFetcher } from "../../Components/DataFetcher/DataFetcherComponent";
import { TodoComponent } from "../../Components/Todo/TodoComponent";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Users");
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTab = (title, index) => {
    setActiveTab(title);
    setActiveTabIndex(index);
  };

  return (
    <div className='home-page-container'>
      <div className='tab'>
        {tabsMapper.map((title, i) => {
          return (
            <h4
              onClick={() => handleTab(title, i)}
              key={i}
              className={activeTabIndex === i ? "active" : ""}
            >
              {title}
            </h4>
          );
        })}
      </div>
      {activeTab === "Users" ? (
        <Users />
      ) : activeTab === "Counter" ? (
        <Counter />
      ) : activeTab === "DataFetcher" ? (
        <DataFetcher />
      ) : (
        <TodoComponent />
      )}
    </div>
  );
};
