import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Card from "./Card";

const ShopByCategory = () => {
  return (
    <div className="w-[300px] xsm:w-[490px] sm:w-[620px] lg:w-[950px] xl:w-[1200px] mx-auto mt-[100px]">
      <div className="max-w-xl mx-auto space-y-3 mt-[130px] mb-[40px]">
        <p className="text-slate-700 text-center text-3xl font-semibold sm:text-4xl">
          Shop By Category
        </p>
        <p className="text-center text-slate-500">
          Indulge in a wonderland of options explore enchanting toy categories
          tailored to spark imagination
        </p>
      </div>
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
          <div className=" grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3 gap-4">
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
