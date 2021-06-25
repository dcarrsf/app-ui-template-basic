import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
    }
}));
export default function AppLayoutComponent(props) {
    const classes = useStyles();
    return (
        <main className={classes.root}>
            <Header />
            {props.children}
        </main>
    );
}

AppLayoutComponent.propTypes = {
    children: PropTypes.any
};
