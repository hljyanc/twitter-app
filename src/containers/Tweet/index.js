import { useState, useEffect } from 'react';
import TweetCard from '@components/TweetCard';
import style from './index.module.scss';

/**
* 主页推文
*/
const Tweet = () => {
  const [data, setDate] = useState();
  useEffect(() => {
    console.log('data', data);
    setDate([]);
  }, []);
  return (
    <div className={style.container}>
      <TweetCard />
    </div>
  );
};

export default Tweet;
