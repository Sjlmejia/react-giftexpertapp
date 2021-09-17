import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const categoriesArray = ['One punch'];
  let [categories, setCategories] = useState(categoriesArray);
  return (
    <>
      <h2>GifexpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr/>
      <ol>
        {
          categories.map(category => (
            <GifGrid
              key= { category } 
              category={ category }
            />
          ))
        }
      </ol>
    </>
  )
}
export default GifExpertApp;