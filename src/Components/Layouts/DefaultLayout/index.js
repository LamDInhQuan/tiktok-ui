import Header from '../components/Header';
import SideBar from './SideBar';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div>
                <SideBar />
                <div className="content">{children}</div>
            </div>
        </>
    );
}

export default DefaultLayout;
