import Link from 'next/link'
import { withRouter } from 'next/router';
import classNames from 'classnames';

const Header = ({ router }) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className={classNames('nav-item', {
                    active: router.route === '/'
                })}>
                    <Link href="/"><a className="nav-link" >Home</a></Link>
                </li>
                <li className={classNames('nav-item', {
                    active: router.route === '/about'
                })}>
                    <Link href="/about"><a className="nav-link" >About</a></Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default withRouter(Header)
