import Main from '../components/Main';
import Sidebar from '../components/Sidebar';

function Layout() {
  return (
    <div className="h-screen w-screen flex md:grid-rows-2 md:grid-cols-2">
      <Sidebar />
      <Main />
    </div>
  );
}

export default Layout;
