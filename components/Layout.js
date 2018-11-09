import React from 'react';
import Header from './Header'
import Head from 'next/head'

import '../styles/main.scss';

const Layout = (props) => (
    <React.Fragment>
        <Head>
            <title>My page title</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        <div className="container">
            <Header />
            {props.children}
        </div>
    </React.Fragment>
)

export default Layout