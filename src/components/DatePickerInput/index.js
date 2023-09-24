import { useState, forwardRef } from 'react';
import { DatePicker } from 'antd-mobile';
import moment from 'moment';
import PropTypes from 'prop-types';
import style from './index.module.scss';
import calendarIcon from '../../assets/calendar.png';

/**
 * 出生日期选择器
*/

const DatePickerInput = forwardRef(({
  value, onChange,
}, ref) => {
  const [visible, setVisible] = useState(false);
  const onClickDatePicker = () => {
    setVisible(true);
  };
  return (
    <div ref={ref}>
      <DatePicker
        title="日期选择"
        visible={visible}
        onClose={() => setVisible(false)}
        onConfirm={(val) => {
          onChange(moment(val).format('YYYYMMDD'));
        }}
      />
      <div className={style.birthdayInput} onClick={onClickDatePicker}>
        <div className={style.birthdayTitleItem}>出生日期</div>
        <div>
          <span className={style.birthdayPlaceholder}>{value ? moment(value).format('YYYY年/MM月/DD日') : '年/月/日'}</span>
          <img src={calendarIcon} alt="datapicker icon" className={style.calendarIcon} />
        </div>
      </div>
    </div>
  );
});

DatePickerInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

DatePickerInput.defaultProps = {
  value: '',
  onChange: () => {},
};

export default DatePickerInput;
