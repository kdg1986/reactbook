import React, { useState, useReducer, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
    title : '제목'
    ,description : '내용'
    ,url : 'https://google.com'
    ,urlToImage : 'https://via.placeholder.com/160'
}


export default () => {
    
    /* const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=0cb830dcfc024f5089ffdbb71d33aa61`,
        );
      }, [category]); */

      const [ articles , setArticles ] = useState(null);
      const [ loading , setLoading ] = useState(false);

      useEffect(()=>{
          const fetchData = async () => {
            setLoading(true);
            try{
                const res = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apikey=0cb830dcfc024f5089ffdbb71d33aa61');
                setArticles( res.data.articles )                
            }catch(e){
                console.log(e);
            }
            setLoading(false);
          };
          fetchData();
      },[])

    
      // 대기중일 때
      //console.log('loading=>>'+loading , articles)
      if (loading) {
        return <NewsListBlock>대기중...</NewsListBlock>;
      }
      // 아직 response 값이 설정되지 않았을 때
      if (!articles) {
        return null;
      }
    
      // 에러가 발생했을 때
      /* if (error) {
        return <NewsListBlock>에러 발생!</NewsListBlock>;
      } */
    
      // response 값이 유효할 때
      //const { articles } = response.data;
      return (
        <NewsListBlock>
          {articles.map(article => (
            <NewsItem key={article.url} article={article} />
          ))}
        </NewsListBlock>
      );
 };
