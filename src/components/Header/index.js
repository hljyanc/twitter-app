import PropTypes from 'prop-types';
import { CloseOutline } from 'antd-mobile-icons';
import logo from '../../assets/twitter-logo.svg';

import style from './index.module.scss';

const Header = ({
  onClickClose,
}) => (
  <div className={style.header}>
    {onClickClose && <CloseOutline className={style.closeIcon} onClick={onClickClose} />}
    <img src={logo} alt="logo" className={style.twitterLogo} />
  </div>
);

Header.propTypes = {
  onClickClose: PropTypes.func,
};

Header.defaultProps = {
  onClickClose: null,
};

export default Header;
