import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SearchIcon from '@material-ui/icons/Search';
import { Button, Dialog, DialogTitle, List, Avatar, ListItem, Typography, ListItemAvatar, ListItemText } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { blue } from '@material-ui/core/colors';
import {Link} from "gatsby"


const useStyles = makeStyles((theme: Theme) =>
  createStyles({

   toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
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
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          Blog
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        <Link style={{color: "inherit", textDecoration: "none"}} to="/">Technology</Link>
        <Link style={{color: "inherit", textDecoration: "none"}} to="/">Design</Link>
        <Link style={{color: "inherit", textDecoration: "none"}} to="/">Culture</Link>
        <Link style={{color: "inherit", textDecoration: "none"}} to="/">Business</Link>
        <Link style={{color: "inherit", textDecoration: "none"}} to="/">Politice</Link>
        <Link style={{color: "inherit", textDecoration: "none"}} to="/">Opnion</Link>
        <Link style={{color: "inherit", textDecoration: "none"}} to="/">Scince</Link>
        <Link style={{color: "inherit", textDecoration: "none"}} to="/">Health</Link>
        <Link style={{color: "inherit", textDecoration: "none"}} to="/">Style</Link>
        <Link style={{color: "inherit", textDecoration: "none"}} to="/">Travel</Link>        
      </Toolbar>
    </React.Fragment>
  );
}