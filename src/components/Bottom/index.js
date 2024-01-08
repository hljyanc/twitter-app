import { TabBar } from 'antd-mobile';
// import { useCurMenu, useGoTo } from '@utils/hooks';
// import { menus } from '@utils/constants';

import homeSvg from '@assets/home.svg';
import searchSvg from '@assets/search.svg';
import tipSvg from '@assets/tip.svg';
import messageSvg from '@assets/message.svg';

import style from './index.module.scss';

/**
* 底部bar
*/

const menus = [
  {
    key: 'home',
    title: '主页',
    link: '/',
    isMenu: true,
    icon: <img className={style.icon} src={homeSvg} alt="" />,
  },
  {
    key: 'search',
    title: '主页',
    link: '/',
    isMenu: true,
    icon: <img className={style.icon} src={searchSvg} alt="" />,
  },
  {
    key: 'tip',
    title: '主页',
    link: '/',
    isMenu: true,
    icon: <img className={style.icon} src={tipSvg} alt="" />,
  },
  {
    key: 'message',
    title: '主页',
    link: '/',
    isMenu: true,
    icon: <img className={style.icon} src={messageSvg} alt="" />,
  },
];

const Bottom = () => {
  // const go = useGoTo();
  // const menu = useCurMenu();

  const onChangeTabItem = () => {
    // go(key);
  };

  // if (menu.hideHeader) {
  //   return null;
  // }

  return (
    <div className={style.container}>
      <TabBar onChange={onChangeTabItem}>
        {menus.map((item) => (
          item.isMenu && <TabBar.Item key={item.key} icon={item.icon} />
        ))}
      </TabBar>
    </div>
  );
};

export default Bottom;
