import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd-mobile';
import style from './index.module.scss';

/**
 * 富交互的Input
*/
const TInput = ({
  label,
  value,
  length,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (value) {
      setIsFocused(true);
    }
  }, []);
  const onFocus = () => {
    setIsFocused(true);
    setHide(true);
  };

  const onBlur = () => {
    if (value.length === 0) {
      setIsFocused(false);
    }
    setHide(false);
  };

  const onChangeHandler = (val) => {
    if (length && val.length > length) {
      return;
    }
    onChange(val);
  };
  return (
    <div className={hide ? style.tInputFocused : style.tInput}>
      <div className={isFocused ? style.labelFocused : style.label}>
        {label}
        {hide && length && (
        <span className={style.labelRight}>
          {value.length}
          /
          {length}
        </span>
        )}
      </div>
      <Input
        className={isFocused ? style.inputItemFocused : style.inputItem}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChangeHandler}
        value={value}
      />
    </div>
  );
};

TInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  length: PropTypes.number,
  onChange: PropTypes.func,
};

TInput.defaultProps = {
  label: '',
  value: undefined,
  length: undefined,
  onChange: () => {},
};

export default TInput;
