//Pages 
import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search';

// Layouts 
import { HeaderOnly } from '~/Components/Layouts';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout : HeaderOnly },
    { path: '/search', component: Search, layout : null }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
