import React, { useEffect } from 'react';
import SidebarWrapper from './SidebarWrapper';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import colors from '../../api/color';
const Sidebar = (props) => {
  const datas = props.data;
  const router = useRouter();
  const { query } = router;
  const category = query.category;
   const search = useSelector((state) => state.GlobalReducer.search);
   const sidebar = useSelector((state) => state.GlobalReducer.sidebar);
   const themes = useSelector((state) => state.GlobalReducer.theme);
   let theme;
   if (themes) {
     theme = 'dark';
   } else {
     theme = 'light';
   }

   let color = colors[theme];
  return (
    <SidebarWrapper color={color}>
      <ul className="p-0">
        {datas?.map((v, i) => {
          return (
            <li key={v.list_name_encoded}>
              <Link href={`/category/${v.list_name_encoded}`}>
                <a
                  className={`${
                    (v.list_name_encoded == category && 'active') || ''
                  } d-flex justify-content-start align-items-center py-3 px-4`}
                >
                  {v?.list_name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </SidebarWrapper>
  );
};

export default Sidebar;
