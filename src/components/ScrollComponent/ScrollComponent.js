import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Post from '../Post/Post'

const ScrollComponent = () => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [bottom, setBottom] = useState(false);

    useEffect(() => {
      if(bottom || data.length === 0) {
          const fetchData = async () => {
          const result = await axios(`http://localhost:4000/posts?_page=${currentPage}&_limit=9`);
          setData(prevState => [...prevState, ...result.data]);
      };
        fetchData();
        setCurrentPage(currentPage + 1)
      }
    }, [bottom]);

    useEffect(() => {
      const  handleScroll = () => {
        const isBottom = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 1);
        console.log(window.innerHeight)
        console.log(window.scrollY)
        console.log(document.body.offsetHeight)
        setBottom(isBottom);
      }
      window.addEventListener("scroll", handleScroll);
      return () => {
      window.removeEventListener("scroll", handleScroll);
      };
      }, []);

      console.log(bottom)

    return (
      <div>
        {data.length > 0 ? data.map(item => <Post key={item.title} title={item.title} image={item.thumb} date={item.date} excerpt={item.excerpt} url={item.url}/>) : null}
      </div>
    );
  };

  export default ScrollComponent;