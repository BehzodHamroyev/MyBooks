import React from 'react';
import { useSelector } from 'react-redux';
import colors from '../../api/color';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import  ContainerWrapper from './ContainerWrapper';

const Container = (props) => {
   const sidebar = useSelector((state) => state.GlobalReducer.sidebar);
    const themes = useSelector((state) => state.GlobalReducer.theme);
    let theme;
    if (themes) {
      theme = 'dark';
    } else {
      theme = 'light';
    }
   
    let color = colors[theme];
  console.log(props);
  return (
    <ContainerWrapper color={color}>
      <div className="navabar">
        <Navbar />
      </div>
      <div className="right">
        {sidebar && (
          <div className="sidebar border">
            <Sidebar data={props.data} />
          </div>
        )}
        <div className="content border">{props.children}</div>
      </div>
    </ContainerWrapper>
  );
};

export default Container;
