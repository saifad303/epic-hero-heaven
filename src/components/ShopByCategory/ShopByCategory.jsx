import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Card from "./Card";

const ShopByCategory = () => {
  return (
    <div className="w-[300px] xsm:w-[490px] sm:w-[620px] lg:w-[950px] xl:w-[1200px] mx-auto mt-[100px]">
      <Tabs>
        <TabList>
          <Tab>
            <img
              src="/img/icons-marvel.png"
              className=" w-14 xsm:w-20"
              alt=""
            />
          </Tab>
          <Tab>
            <img src="/img/dc.png" className=" w-7 xsm:w-11" alt="" />
          </Tab>
          <Tab>
            <img
              src="/img/transformars.png"
              className=" w-20 xsm:w-28"
              alt=""
            />
          </Tab>
        </TabList>

        <TabPanel>
          <div className=" grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" flex flex-col xsm:flex-row gap-4">
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" flex flex-col xsm:flex-row gap-4">
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
