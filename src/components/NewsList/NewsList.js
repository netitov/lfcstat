import React from 'react';
import News from '../News/News';
import { sources } from '../../utils/constants';
import { Splide, SplideSlide } from '@splidejs/react-splide';

function NewsList(props) {

  const filteredNews = props.news.filter((el) => {
    return sources.some((f) => {
      return el.url.includes(f);
    })
  }).slice(0, 20);

  return (
    <Splide
      options={ {
        width: '90%',
        perPage: 5,
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
