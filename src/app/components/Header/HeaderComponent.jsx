import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        padding: `0 ${theme.spacing(4)}`,
        height: '80px'
    }
}));
export default function AppViewComponent() {
    const classes = useStyles();
    return <header className={classes.root}>User Interface Template</header>;
}
