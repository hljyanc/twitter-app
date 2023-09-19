import { useState } from 'react';
import { Form } from 'antd-mobile';
import DatePickerInput from '@components/DatePickerInput';
import Header from '@components/Header';
import TInput from '@components/TInput';

import style from './index.module.scss';
import Footer from './components/Footer';

const ACCOUNT_TYPE = {
  PHONE: 'PHONE',
  EMAIL: 'EMAIL',
};

const Register = () => {
  const [form] = Form.useForm();
  const [formData] = useState({
    name: '',
    phone: '',
    email: '',
    birthday: '',
  });
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.PHONE);
  const [footerButtonDisabled, setFooterButtonDisabled] = useState(true);

  const onAccountTypeChange = () => {
    if (accountType === ACCOUNT_TYPE.PHONE) {
      setAccountType(ACCOUNT_TYPE.EMAIL);
    } else {
      setAccountType(ACCOUNT_TYPE.PHONE);
    }
  };

  const onClickNextStep = async () => {
    const validate = await form.validateFields();
    if (validate) {
      console.log(validate);
    }
  };

  const onValuesChange = async () => {
    try {
      const validate = await form.validateFields();
      if (validate) {
        setFooterButtonDisabled(false);
      }
    } catch (e) {
      if (e.errorFields.length === 0) {
        setFooterButtonDisabled(false);
        return;
      }
      setFooterButtonDisabled(true);
    }
  };
  return (
    <div>
      <Header />
      <div className={style.form}>
        <div className={style.formTitle}>创建你的账号</div>
        <Form
          form={form}
          initialValues={formData}
          onValuesChange={onValuesChange}
          className={style.formContainer}
        >
          <Form.Item
            name="name"
            rules={[{
              required: true,
              message: '名字不能为空',
            }]}
          >
            <TInput label="名字" length={50} />
          </Form.Item>
          { accountType === ACCOUNT_TYPE.PHONE
            && (
            <Form.Item
              name="phone"
              rules={[{
                required: true,
                message: '需要一个有效手机号',
                pattern: /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/g,
              }]}
            >
              <TInput label="手机" length={11} />
            </Form.Item>
            ) }
          { accountType === ACCOUNT_TYPE.EMAIL
          && (
          <Form.Item
            name="email"
            rules={[{
              required: true,
              message: '需要一个有效邮箱',
              pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g,
            }]}
          >
            <TInput label="邮箱" />
          </Form.Item>
          ) }
          <span className={style.changeTypeButton} onClick={onAccountTypeChange}>
            { accountType === ACCOUNT_TYPE.PHONE ? '改用电子邮件' : '改用手机号码' }
          </span>
          <div className={style.birthdayTitle}>出生日期</div>
          <div>这不会公开显示,确认你自己的年龄, 即使此账号是用于业务、宠物或其他内容的。</div>
          <Form.Item
            name="birthday"
            rules={[{
              required: true,
              message: '出生日期不能为空',
            }]}
          >
            <DatePickerInput />
          </Form.Item>
        </Form>
      </div>
      <Footer onClickNextStep={onClickNextStep} disabled={footerButtonDisabled} />
    </div>
  );
};

export default Register;
