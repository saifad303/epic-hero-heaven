import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from "axios";
import { useAuthProvider } from "../../context/AuthProvider";
import Spinner from "../Loading/Spinner";
import MarvelCard from "./MarvelCard";
import DCCard from "./DCCard";
import TransformersCard from "./TransformersCard";

const ShopByCategory = () => {
  const { apiLinkPrefix } = useAuthProvider();
  const [isLoading, setIsLoading] = useState(true);
  const [marvel, setMarvel] = useState([]);
  const [dc, setDc] = useState([]);
  const [transformers, setTransformers] = useState([]);

  useEffect(() => {
    axios.get(`${apiLinkPrefix}toy-subcategory`).then((res) => {
      setMarvel(res.data.marvelResult);
      setDc(res.data.dcResult);
      setTransformers(res.data.transformersResult);
      setIsLoading(false);
    });
  }, []);

  console.log("marvel", marvel);
  console.log("DC = ", dc);
  console.log("Transformers = ", transformers);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

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
            {marvel.map((marvelToys, idx) => (
              <MarvelCard key={idx} marvelToys={marvelToys}></MarvelCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dc.map((dcToy, idx) => (
              <DCCard dcToy={dcToy} key={idx}></DCCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3 gap-4">
            {transformers.map((transformersToys, idx) => (
              <TransformersCard
                key={idx}
                transformersToys={transformersToys}
              ></TransformersCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
