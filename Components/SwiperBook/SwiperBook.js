import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import {SwiperBookWrapper} from './SwiperBookWrapper'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const data = [
  {
    amazon_product_url:
      'http://www.amazon.com/Highest-Duty-Search-Really-Matters/dp/0061924695?tag=NYTBSREV-20',

    author: 'Chesley B Sullenberger III with Jeffrey Zaslow',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780061924682.jpg',
    description:
      'A memoir by the pilot who made an emergency landing on the Hudson River in 2009. Originally published as “Highest Duty” in 2009. The basis for the 2016 movie.',

    price: '0.00',
    rank: 5,
    title: 'SULLY',
    buy_links: [
      {
        name: 'Amazon',
        url: 'http://www.amazon.com/Highest-Duty-Search-Really-Matters/dp/0061924695?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/bu…or=Chesley+B+Sullenberger+III+with+Jeffrey+Zaslow',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?u…w.barnesandnoble.com%2Fw%2F%3Fean%3D9780062561206',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/re…lenberger%252BIII%252Bwith%252BJeffrey%252BZaslow',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/re…s%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DSULLY',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/re…erger%2BIII%2Bwith%2BJeffrey%2BZaslow%26aff%3DNYT',
      },
    ],
  },
  {
    amazon_product_url:
      'http://www.amazon.com/Humans-New-York-Brandon-Stanton/dp/1250038820?tag=NYTBSREV-20',

    author: 'Brandon Stanton',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781250038821.jpg',

    buy_links: [
      {
        name: 'Amazon',
        url: 'http://www.amazon.com/Humans-New-York-Brandon-Stanton/dp/1250038820?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=HUMANS+OF+NEW+YORK&author=Brandon+Stanton',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?u…w.barnesandnoble.com%2Fw%2F%3Fean%3D9781250038821',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/re…S%252BOF%252BNEW%252BYORK%252BBrandon%252BStanton',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/re…org%2Fbooks%3Fkeywords%3DHUMANS%2BOF%2BNEW%2BYORK',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/re…2BOF%2BNEW%2BYORK%2BBrandon%2BStanton%26aff%3DNYT',
      },
    ],

    description:
      'Four hundred color photos of New Yorkers, with brief commentary. Originally published in 2013.',
    price: '0.00',
    rank: 4,
    title: 'HUMANS OF NEW YORK',
  },
  {
    amazon_product_url:
      'https://www.amazon.com/Lion-Movie-Tie-Saroo-Brierley/dp/0399584692?tag=NYTBSREV-20',

    author: 'Saroo Brierley',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780399584695.jpg',

    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Lion-Movie-Tie-Saroo-Brierley/dp/0399584692?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=LION&author=Saroo+Brierley',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?u…w.barnesandnoble.com%2Fw%2F%3Fean%3D9780399584695',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/re…Fsearch%253Fquery%253DLION%252BSaroo%252BBrierley',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/re…ps%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DLION',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/re…book%3Fkeys%3DLION%2BSaroo%2BBrierley%26aff%3DNYT',
      },
    ],
    description:
      'The author was lost on a train in India at age 5, then adopted by a couple in Australia; he searched for and found his birth family as an adult. Originally published in 2014 as “A Long Way Home” and the basis for the 2016 movie.',
    price: '0.00',
    rank: 9,
    title: 'LION',
  },
];
import React from 'react';
import { BookCardWrapper } from '../Book/BookCardWarpper';
import { FaStar } from 'react-icons/fa';

const SwiperBook = ({color}) => {
  return (
    <SwiperBookWrapper color={color}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {data.map((v, i) => {
          return (
            <SwiperSlide key={i}>
              <BookCardWrapper color={color}>
                <div className="d-flex w-100 justify-content-center  align-items-center">
                  <img src={`${v.book_image}`} className="w-75" alt="" />
                </div>
                <div>
                  <p className="fw-bold m-0 my-1  text-start pt-2">{v.title}</p>
                  <p className="fw-bold m-0 my-1 text-start">
                    <span className="text-danger">Price: </span>
                    <span className="lineThrough">
                      {parseFloat(v.price) + 45}$
                    </span>
                  </p>
                  <p className="fw-bold m-0 my-1 text-start">
                    <span className="text-danger ">Sale: </span>
                    {parseFloat(v.price) + 30}$
                  </p>
                  <div className="d-flex justify-content-start text-start align-items-center ">
                    {(parseInt(v.rank) % 5 >= 0 && (
                      <FaStar className="me-1 mb-3 text-warning" />
                    )) || <FaStar className="me-1 text-ligdark" />}
                    {(parseInt(v.rank) % 5 > 1 && (
                      <FaStar className="me-1 mb-3 text-warning" />
                    )) || <FaStar className="me-1 mb-3 text-dark" />}
                    {(parseInt(v.rank) % 5 > 2 && (
                      <FaStar className="me-1 mb-3 text-warning" />
                    )) || <FaStar className="me-1 mb-3 text-dark" />}
                    {(parseInt(v.rank) % 5 > 3 && (
                      <FaStar className="me-1 mb-3 text-warning" />
                    )) || <FaStar className="me-1 mb-3 text-dark" />}
                    {(parseInt(v.rank) % 5 > 4 && (
                      <FaStar className="me-1 mb-3 text-warning" />
                    )) || <FaStar className="me-1 mb-3 text-dark" />}
                  </div>

                  <div className="d-flex justify-content-start w-100  align-items-center">
                    <Link href={`${v.amazon_product_url}`}>
                      <a target="_blank" className="btn btn-warning px-4">
                        Buy
                      </a>
                    </Link>
                  </div>
                </div>
              </BookCardWrapper>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperBookWrapper>
  );
};

export default SwiperBook;
