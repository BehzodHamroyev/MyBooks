import Container from '../Containers/Container/Container';
import { SET_CATEGORY } from '../Redux/Type';
import { getBooks, getCategory } from '../api/data';
import { dispatch } from '../Redux/Store';
import BookCard from '../Components/Book/BookCard';
import colors from '../api/color';
import { useSelector } from 'react-redux';
export default function Home({ datascategory, booksdata }) {
  const datasCategory = () => {
    const action = { type: SET_CATEGORY, payload: datascategory };
    dispatch(action);
  };
  datasCategory();
  datascategory = datascategory.results;
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
        {booksdata?.results?.books?.map((v, i) => {
          return (
            <div key={i} className="col-lg-3 col-md-4 col-sm-6 mt-3">
              <BookCard
                data={v}
                url={`category/combined-print-and-e-book-nonfiction`}
                color={color}
              />
            </div>
          );
        })}
      </div>
    </Container>
  );
}
export const getServerSideProps = async (contex) => {
  const { category } = contex.query;
  console.log(category);
  const res = await getCategory();
  console.log(res);
  const res2 = await getBooks(category);
  return {
    props: {
      datascategory: res.data || [],
      booksdata: res2.data || [],
    },
  };
};
