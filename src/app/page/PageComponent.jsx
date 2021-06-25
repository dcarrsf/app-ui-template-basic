import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles({
    centerAlign: {
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 5rem'
    }
});
export default function PageComponent() {
    const classes = useStyles();
    return (
        <div className={classes.centerAlign}>
            <div>
                <Typography variant="h1">PAGE</Typography>
            </div>
        </div>
    );
}
