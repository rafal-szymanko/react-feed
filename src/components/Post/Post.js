import React, {useState, useEffect} from 'react';

const Post = ({title, image, date, url, exceptt }) => {

    return (
        <div>
            <img src={image}></img>
        </div>
    );
  };

  export default Post;