import React, {useState, useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import styles from './Post.module.scss';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      margin: 20,
    },
    media: {
      height: 140,
    },
  });

const Post = ({title, image, date, url, excerpt }) => {

      const classes = useStyles();


    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6">
              {title}
            </Typography>
            <Typography gutterBottom variant="h6" component="h6">
              {date}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {excerpt}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };

  export default Post;