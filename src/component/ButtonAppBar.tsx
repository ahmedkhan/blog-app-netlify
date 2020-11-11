import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Badge, Dialog, DialogTitle, List, Avatar, ListItem, Typography, ListItemAvatar, ListItemText } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { blue } from '@material-ui/core/colors';
import {Link} from "gatsby"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    avatar: {
      backgroundColor: blue[100],
      color: blue[600],
    },
  }),
);

const designs = ['What is Bootstrap', 'What is Material UI'];


export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}


function SimpleDialog(props: SimpleDialogProps) {
  const classes = useStyles();


  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Chose a Article</DialogTitle>
      <List>
        {designs.map((design) => (
          design === "What is Material UI" ?
            <ListItem  button key={design}>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <Link style={{color: "inherit", textDecoration: "none"}} to='/blog/contentful-blog-post1'><ListItemText primary={design} /></Link>
            </ListItem>: 

            <ListItem  button key={design}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <Link style={{color: "inherit", textDecoration: "none"}} to='/blog/contentful-blog-post2'><ListItemText primary={design} /></Link>
          </ListItem>
            
        ))}
      </List>
    </Dialog>
  );
}

export default function ButtonAppBar() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(designs[1]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            See My Blogs
          </Typography>
          <IconButton aria-label="show 4 new mails" color="inherit" onClick={handleClickOpen}>
          <Badge badgeContent={2} color="secondary">
            <AssignmentIcon />
          </Badge>
        </IconButton>
        <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />

        </Toolbar>
      </AppBar>
    </div>
  );
}