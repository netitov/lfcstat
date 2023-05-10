import React, { useEffect, useState } from 'react';
import News from '../News/News';
import { sources } from '../../utils/constants';
import { Splide, SplideSlide } from '@splidejs/react-splide';

function NewsList(props) {

  const [newsPerPage, setNewsPerPage] = useState(5);

  const filteredNews = props.news.filter((el) => {
    return sources.some((f) => {
      return el.url.includes(f.source);
    })
  }).slice(0, 20);

  useEffect(() => {
    if (window.outerWidth <= 780) {
      setNewsPerPage(3);
    }
    if (window.outerWidth <= 580) {
      setNewsPerPage(2);
    }
  }, [])

  return (
    <Splide
      options={ {
        width: '100%',
        perPage: newsPerPage,
        perMove: 2,
        gap: 10
      } }
    >
      {filteredNews.map((i) => {
        return (
          <SplideSlide key={i.name}>
            <News
              url={i.url}
              name={i.name}
              image={i.image}

            />
          </SplideSlide>
        )
      })}
    </Splide>
  )
}

export default NewsList
