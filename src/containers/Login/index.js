import {
  Button, Dialog, Form, Input,
} from 'antd-mobile';
import './index.css';

const Login = () => {
  const [form] = Form.useForm();
  const onSubmit = () => {
    const values = form.getFieldsValue();
    Dialog.alert({
      content: JSON.stringify(values),
    });
  };
  return (
    <div className="login">
      <Form
        layout="horizontal"
        mode="card"
        from={form}
        footer={(
          <Button block color="primary" onClick={onSubmit} size="large">
            登录
          </Button>
          )}
      >
        <Form.Item label="Username" name="username">
          <Input placeholder="please enter username" clearable />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input placeholder="please enter password" type="password" clearable />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
