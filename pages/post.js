import React from "react";
import Layout from '../components/Layout.js';
import Button from '../components/Button.js';

import loadDB from '../lib/load-db'

class Post extends React.Component  {

    constructor(props) {
        super(props);

        this.state = {
            isMoreInfoShowed: false
        }
    }

    static async getInitialProps({ query }) {
        const db = await loadDB()
        let item = await db.child('item').child(query.id).once('value')
        item = item.val()

        console.log(item);
        return { item }
    }

    handleShowMoreInfo = () => {
        this.setState({
            isMoreInfoShowed: !this.state.isMoreInfoShowed
        });
    }

    render(){
        const { item } = this.props;
        return (
            <Layout>
                <h1>{item.title}</h1>
                <p>URL: <a target="_blank" href={item.url}>{item.title}</a></p>
                {this.state.isMoreInfoShowed && (<pre>
                    { JSON.stringify(item, null, 2) }
                </pre>)}
                <Button onClick={this.handleShowMoreInfo} > Show full into </Button>
            </Layout>
        );
    }
}


export default Post;
