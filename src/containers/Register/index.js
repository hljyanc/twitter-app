import { useState } from 'react';
import { Button, Form, Input } from 'antd-mobile';
import DatePickerInput from '@components/DatePickerInput';
import Header from '../../components/Header';

import style from './index.module.scss';

const ACCOUNT_TYPE = {
  PHONE: 'PHONE',
  EMAIL: 'EMAIL',
};

const Register = () => {
  const [formData] = useState({
    name: '1234',
    phone: '',
    email: '',
    birthday: '20220223',
  });
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.PHONE);

  const onAccountTypeChange = () => {
    if (accountType === ACCOUNT_TYPE.PHONE) {
      setAccountType(ACCOUNT_TYPE.EMAIL);
    } else {
      setAccountType(ACCOUNT_TYPE.PHONE);
    }
  };
  return (
    <div>
      <Header />
      <div className={style.form}>
        <div className={style.formTitle}>创建你的账号</div>
        <Form initialValues={formData} className={style.formContainer}>
          <Form.Item name="name">
            <Input placeholder="username" className={style.input} />
          </Form.Item>
          { accountType === ACCOUNT_TYPE.PHONE
            && (
            <Form.Item name="phone">
              <Input placeholder="phone" className={style.input} />
            </Form.Item>
            ) }
          { accountType === ACCOUNT_TYPE.EMAIL
          && (
          <Form.Item name="email">
            <Input placeholder="email" className={style.input} />
          </Form.Item>
          ) }
          <div className={style.changeTypeButton} onClick={onAccountTypeChange}>
            { accountType === ACCOUNT_TYPE.PHONE ? '改用电子邮件' : '改用手机号码' }
          </div>
          <div className={style.birthdayTitle}>出生日期</div>
          <div>这不会公开显示,确认你自己的年龄, 即使此账号是用于业务、宠物或其他内容的。</div>
          <Form.Item name="birthday">
            <DatePickerInput />
          </Form.Item>
        </Form>
      </div>
      <div className={style.footer}>
        <Button className={style.footerButton}>下一步</Button>
      </div>
    </div>
  );
};

export default Register;
