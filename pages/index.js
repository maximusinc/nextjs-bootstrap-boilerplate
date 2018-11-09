import Layout from '../components/Layout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import loadDB from './../lib/load-db.js';

const PostLink = ({ id, title }) => (
    <li>
        <Link as={`/p/${id}`} href={`/post?id=${id}`}>
            <a>
                {title}
            </a>
        </Link>
        <style jsx>{`
            li {
                list-style: none;
                margin: 5px 0;
            }

            a {
                text-decoration: none;
                color: blue;
                font-family: 'Arial';
            }

            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </li>
);

const Index = (props) => (
    <Layout>
        <h1>Hacker news articles</h1>
        <ul>
            {props.stories.map((story) => (
                <PostLink key={story.id} id={story.id} title={story.title} />
            ))}
        </ul>
        <style jsx>{`
            ul {
                padding: 0;
            }
            h1,
            a {
                font-family: 'Arial';
            }
        `}</style>
    </Layout>
);

Index.getInitialProps = async function() {

    const db = await loadDB()

    const ids = await db.child('topstories').once('value')
    let stories = await Promise.all(
        ids.val().slice(0, 20).map(id => db
            .child('item')
            .child(id)
            .once('value')
        )
    )

    stories = stories.map(s => s.val())


    return {
        stories: stories
    };
};

export default Index;
