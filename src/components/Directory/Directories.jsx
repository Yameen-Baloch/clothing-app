import React from 'react'
import CategoryItem from '../category-item/category-item'
import './Directories.scss'

const Directories = ({ categories }) => {
  return (
    <div className='categories-container'>
    {categories.map(( category ) =>(
       <CategoryItem  key={category.id} category={category}/>
    ))}
   
</div>
  )
}

export default Directories