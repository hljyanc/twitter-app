import Header from '@components/Header';
import { Outlet } from 'react-router-dom';
// import style from './index.module.scss';

const App = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default App;
