import { Link, Outlet } from 'react-router-dom';
import './styles.scss'
import { SearchIcon } from '../../assets/icons/searchIcon';
import { ArrowLeftIcon } from '../../assets/icons/arrowLeftIcon';

const Layout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
      <>
        <Outlet />
      </>
      <div className='back-btn_wrapper'>
        <ArrowLeftIcon className="back-btn_icon" />
        <Link to='/' className='back-btn_link'>Back</Link>
      </div>
    </div>
  );
};

export default Layout;