import * as React from "react";
import { nodeProps } from "../interface";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from '@material-ui/core/CardActionArea';
import Collapse from "@material-ui/core/Collapse";
import Hidden from '@material-ui/core/Hidden';
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link } from "gatsby";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    markdown: {
      ...theme.typography.body2,
      padding: theme.spacing(3, 0),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
    card: {
      display: 'flex',
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
  })
);

const Blogpost = (props: nodeProps) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Grid item xs={12} md={8}>
        <CardActionArea component="a">
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  {props.detail.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {props.detail.updatedAt}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {props.detail.excerpt.excerpt}
                </Typography>
                <CardMedia
                  className={classes.media}
                  image={props.detail.featuredImage.fluid.src}
                  title={props.detail.slug}
                />
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                {props.detail.title === "Why do we use it?" ?
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                      })}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <Link to='/blog/why-do-we-use-it'>
                        <ArrowRightAltIcon />
                      </Link>
                    </IconButton> :
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                      })}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <Link to='/blog/what-is-lorem-ipsum'>
                        <ArrowRightAltIcon />
                      </Link>
                    </IconButton>}
                </Typography>

              </CardContent>
            </div>
          </Card>
        </CardActionArea>

      </Grid>
      
    </div>
  );
};

export default Blogpost;
