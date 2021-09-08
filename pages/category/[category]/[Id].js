import { useRouter } from 'next/router';
import { getBooks, getCategory } from '../../../api/data';
import Book from '../../../Components/BookContainer/Book';
import NavbarWrapper from '../../../Containers/Navbar/NavbarWrapper';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Brend1 from '../../../Containers/Navbar/BrendBlack.png';
import Brend2 from '../../../Containers/Navbar/BrendBlack.png';
import {
  FaSearch,
  FaSun,
  FaMoon,
  FaShoppingCart,
  FaTimes,
} from 'react-icons/fa';
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import { useSelector } from 'react-redux';
import {
  searchToggle,
  sidebarToggle,
  themeToggle,
} from '../../../Redux/Action/GlobalAction';
import colors from '../../../api/color';
const Id = ({ booksdata, categorydata }) => {
  const router = useRouter();

  const { query } = router;
  const { category, Id } = query;
  let id = parseFloat(Id) - 1;
  let data = booksdata.data.results.books[id];
  const search = useSelector((state) => state.GlobalReducer.search);
  const themes = useSelector((state) => state.GlobalReducer.theme);
  let theme;
  if (themes) {
    theme = 'dark';
  } else {
    theme = 'light';
  }

  let color = colors[theme];
  console.log(search);
  return (
    <div>
      <NavbarWrapper color={color} className="d-flex justify-content-between">
        {search && (
          <div className=" w-100 d-flex justify-content-between align-items-center ">
            <Link href="/">
              <a>
                <img
                  src={`https://www.logo.wine/a/logo/Book_Depository/Book_Depository-Logo.wine.svg`}
                  alt=""
                  className="logo "
                />
              </a>
            </Link>
            <div className="icon">
              <Button className="mx-2" onClick={() => searchToggle()}>
                <FaSearch />
              </Button>
              <Button className="mx-2 " onClick={() => themeToggle()}>
                {(!themes && <FaSun />) || <FaMoon />}
              </Button>
              <Button className="mx-2">
                <FaShoppingCart />
              </Button>
            </div>
          </div>
        )}
        {!search && (
          <div className=" d-flex align-items-center justify-content-center w-100   ">
            <Form className="d-flex  w-75  align-items-center">
              <FormGroup row l className="m-0 w-100">
                <Col sm={50} className="w-100">
                  <Input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Search"
                  />
                </Col>
              </FormGroup>
            </Form>
            <Button onClick={() => searchToggle()}>
              <FaTimes />
            </Button>
          </div>
        )}
      </NavbarWrapper>
      <Book data={data} color={color} />
    </div>
  );
};
export const getServerSideProps = async (context) => {
  const { category } = context.query;
  const res1 = await getBooks(category);
  const res2 = await getCategory();
  return { props: { booksdata: res1, categorydata: res2 } };
};

export default Id;
