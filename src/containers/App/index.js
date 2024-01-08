import Header from '@components/Header';
import { Outlet } from 'react-router-dom';
import Bottom from '@components/Bottom';
// import style from './index.module.scss';

const App = () => (
  <>
    <Header />
    <Outlet />
    <Bottom />
  </>
);

export default App;
