import React from 'react';
import { useRouter } from 'next/router';
import Container from '../../Containers/Container/Container';
import { useSelector } from 'react-redux';
import { getBooks, getCategory } from '../../api/data';
import { SET_BOOKS, SET_CATEGORY } from '../../Redux/Type';
import { dispatch } from '../../Redux/Store';
import BookCard from '../../Components/Book/BookCard';
import colors from '../../api/color';

const Category = ({ booksdata, categorydata }) => {
  const datasBooks = () => {
    const action = { type: SET_BOOKS, payload: booksdata };
    dispatch(action);
  };
  datasBooks();
   const datasCategory = () => {
     const action = { type: SET_CATEGORY, payload: categorydata };
     dispatch(action);
   };
   datasCategory();
  const datasbook = useSelector(
    (props) => props.BooksReducer.data.data.results.books
  );
  const datascategory = useSelector(
    (props) => props.CategoryReducer.data.data.results
  );
  console.log(datasbook);
  const router=useRouter()
  const { query } = router;
  console.log(query.category);
      const themes = useSelector((state) => state.GlobalReducer.theme);
      let theme;
      if (themes) {
        theme = 'dark';
      } else {
        theme = 'light';
      }
   
      let color = colors[theme];
  return (
    <Container color={color} data={datascategory}>
      <div className="row m-0">
        {datasbook?.map((v, i) => {
          return (
            <div
              key={v.title}
              className="col-lg-3 col-md-4 col-sm-6 mt-5 px-3 py-2 "
            >
              <BookCard
                data={v}
                url={query.category}
                color={color}
              />
            </div>
          );
        })}
      </div>
    </Container>
  );
};
export const getServerSideProps = async (context) => {
  const { category } = context.query;
  const res1 = await getBooks(category);
  const res2 = await getCategory();
  return { props: { booksdata: res1, categorydata: res2 } };

};
export default Category;
