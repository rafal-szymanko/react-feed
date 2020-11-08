import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


import styles from './Post.module.scss';

const Post = ({title, image, date, url, excerpt }) => {

    return (
        <Card className={styles.root}>
        <CardActionArea>
          <CardMedia
            className={styles.media}
            image={image}
            title={title}
          />
          <CardContent className={styles.content}>
            <Typography className={styles.title}>
              {title}
            </Typography>
            <Typography className={styles.description}>
            <Link href={url} className={styles.url}>
              {excerpt}
            </Link>
            </Typography>
            <Typography className={styles.date}>
              {date}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };

  export default Post;