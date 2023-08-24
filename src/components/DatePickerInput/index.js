import style from './index.module.css';
import calendarIcon from '../../assets/calendar.png';

export default () => (
  <div className={style.birthdayInput}>
    <div className={style.birthdayTitleItem}>出生日期</div>
    <div>
      <span className={style.birthdayPlaceholder}>年/月/日</span>
      <img src={calendarIcon} alt="datapicker icon" className={style.calendarIcon} />
    </div>
  </div>
);
