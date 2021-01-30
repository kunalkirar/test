import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
}));

export default function IconAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar>
        <FolderIcon />
      </Avatar>
      <Avatar className={classes.pink}>
        <PageviewIcon />
      </Avatar>
      <Avatar className={classes.green}>
        <AssignmentIcon />
      </Avatar>
      <Avatar variant="square" className={classes.square}>
  N
</Avatar>
<Avatar variant="rounded" className={classes.rounded}>
  <AssignmentIcon />
</Avatar>
<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.small} />
<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
    </div>
  );
}