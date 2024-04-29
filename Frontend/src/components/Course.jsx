import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios"
import { Link } from "react-router-dom";



const Course = () => {

const [book, setBook] =useState([]);
useEffect(()=>{
  const getBook = async ()=>{
    try {
      const res = await axios.get("http://localhost:4005/book")
      console.log(res.data);
      setBook(res.data);
    } catch (error) {
      console.log(error)
    }
  }
  
  getBook();
},[]);


  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white ">
      <div className="mt-20 item-center justify-center text-center dark:bg-slate-900 dark:text-white">
        <div>
        <h1 className="text-2xl md:text-4xl">
          we are deighted to have you{" "}<span className="text-pink-500">Here :)</span>
        </h1>
        </div>
        <p className="mt-12">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Consequatur similique quas suscipit nostrum? Quisquam impedit itaque
          recusandae soluta aliquid, minima assumenda aut molestias earum cum
          veritatis numquam libero error facilis voluptate ab. Nisi placeat
          totam neque pariatur quia veritatis, minima consequuntur. Quam
          similique inventore harum repudiandae nam. Aliquam, sequi
          repudiandae!
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
        {book.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  </>
  );
};

export default Course;
