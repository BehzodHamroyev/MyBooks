import React, { useEffect, useState } from 'react';
import NavbarWrapper from './NavbarWrapper';
import Brend1 from './Brend.png';
import Brend2 from './BrendBlack.png';
import Link from 'next/link';
import {
  FaSearch,
  FaBars,
  FaSun,
  FaMoon,
  FaShoppingCart,
  FaTimes,
} from 'react-icons/fa';
import { Button, Col, Form, FormGroup, Input } from 'reactstrap';
import { useSelector } from 'react-redux';
import {
  searchToggle,
  sidebarToggle,
  themeToggle,
} from '../../Redux/Action/GlobalAction';
import colors from '../../api/color';
const Navbar = () => {
  const search = useSelector((state) => state.GlobalReducer.search);
  const sidebar = useSelector((state) => state.GlobalReducer.sidebar);
  const themes = useSelector((state) => state.GlobalReducer.theme);
  return (
    <NavbarWrapper className="d-flex justify-content-between">
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
            <Button className="mr-1" onClick={() => searchToggle()}>
              <FaSearch />
            </Button>
            <Button className="mr-1 " onClick={() => themeToggle()}>
              {(!themes && <FaSun />) || <FaMoon />}
            </Button>
            <Button className="mr-1">
              <FaShoppingCart />
            </Button>
            <Button className="mr-1" onClick={() => sidebarToggle()}>
              {(!sidebar && <FaBars />) || <FaTimes />}
            </Button>
          </div>
        </div>
      )}
      {!search && (
        <div className=" d-flex align-items-center justify-content-center w-100   ">
          <Form className="d-flex  w-75  align-items-center">
            <FormGroup row l className="m-0 w-100">
              <Col sm={50} className="w-100">
                <Input type="text" name="text" id="text" placeholder="Search" />
              </Col>
            </FormGroup>
          </Form>
          <Button onClick={() => searchToggle()}>
            <FaTimes />
          </Button>
        </div>
      )}
    </NavbarWrapper>
  );
};

export default Navbar;
