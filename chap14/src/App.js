import React,{useState, useCallback,useMemo} from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import NewsPage from './pages/NewsPage';
import { Route } from 'react-router-dom';


export default () => {
  /* const [ category, setCategory ] = useState('all');  
  const onSelect = useCallback( category => {    
    setCategory(category)
  },[]);
  return (
    <>
      <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category}/>  
    </>
  ) */

  return <Route path='/:category?' component={NewsPage} />


}
   

