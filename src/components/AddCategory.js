import React, { useState } from "react";
import PropTypes from 'prop-types';
export const AddCategory = ({setCategories}) => {

  let [inputValue, setInputValue] = useState('')
  const onChangeValue = (value) => {
    setInputValue(value.target.value)
    console.log('llamado')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if( inputValue.trim().length > 2) {
      setCategories(cats => [inputValue, ...cats]);
      setInputValue('');
    }
  }
  return (
    <form onSubmit= {handleSubmit}>
      <input
        type= "text"
        value= {inputValue}
        onChange= {(e)=>{onChangeValue(e)}}
      ></input>
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}