import React from 'react';
import Categories from '../components/Categories';
import NewsLIst from '../components/NewsList';

export default ({ match }) => {

    const category = match.params.category || 'all';

    return (
        <>
            <Categories />
            <NewsLIst category={category} />
        </>
    )
}