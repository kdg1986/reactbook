import React,{useState, useCallback,useMemo} from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

export default () => {

  const [ category, setCategory ] = useState('all');
  /* const onSelect = useMemo( category => {
    console.log(1)
    return  (category) => {      
      setCategory(category) 
    }
  },[]); */
  const onSelect = useCallback( category => {    
    setCategory(category)
  },[]);
  /* const onSelect = (category) => {    
    console.log(1)
    setCategory(category);
  } */
  

  return (
    <>
      <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category}/>  
    </>
  )
}
   

