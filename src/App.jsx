import { makeStyles } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import AppLayout from './app/components/AppLayout';
import ErrorBoundary from './app/components/Error';
import Page from './app/page';
import React from 'react';
import store from './app/model/Store';
import styles from './styles/global';

const useStyles = makeStyles(styles);

export default function App() {
    useStyles();
    return (
        <ErrorBoundary>
            <Provider store={store}>
                <AppLayout>
                    <Page />
                </AppLayout>
            </Provider>
        </ErrorBoundary>
    );
}
