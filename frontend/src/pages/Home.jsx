import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import Books from "../components/Books";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = (await axios.get("http://localhost:5555/api/books")).data;
      setBooks(data);
      setLoading(false);
      console.log(data);
    };
    fetchBooks();
  }, []);

  return (
    <>
      <h2 className="text-3xl text-red-400 text-center py-4">Book Store</h2>
      {loading ? <Spinner /> : <Books books={books} />}
    </>
  );
};

export default Home;
