import axios from 'axios';
const baseUrl = 'https://api.nytimes.com/svc/books/v3';
const apiKey = '0nG5do2caU59G7F2PT1eRQD0RAsaX5Du';
const booksCategory = `${baseUrl}/lists/names.json?api-key=${apiKey}`;
const list = 'combined-print-and-e-book-nonfiction';
 const getCategory =async() => {
  try {
    const res = await axios.get(booksCategory);
    return { success: true, data: res.data };
  } catch (error) {
    console.log(error);
  }
};
getCategory()
 const getBooks =async(category=list) => {
  try {
    const res = await axios.get(
      `${baseUrl}/lists/curent/${category}.json?api-key=${apiKey}`
    );
    console.log(res);
    return { success: true, data: res.data };
  } catch (error) {
    console.log(error);
  }
};
export { getCategory, getBooks };