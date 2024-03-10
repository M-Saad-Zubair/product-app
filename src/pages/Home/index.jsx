import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import axios from "axios";


const Home = () => {
  const [productData,setProductData] = useState(null)
const fetchData = async () =>{
  try {
    const response = await axios.get('https://fakestoreapi.com/products')
    console.log(response.data);
    setProductData(response.data)
  } catch (error) {
    console.log(error);
  }
} 
useEffect(()=>{fetchData()},[]);

  return (
    <div>
      <Navbar />
      <div className="py-5 px-10 grid grid-cols-4 gap-5 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 ">
        {productData?.map((value,index)=>{
          return <Card title={value.title} desc={value.description} price={value.price} img={value.image} key={value.id} />
        })}
      </div>
    </div>
  );
};

export default Home;
