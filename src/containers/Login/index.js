import {
  Button, Form, Input, Dialog,
} from 'antd-mobile';
import { loginService } from '../../services/login';
import './index.css';

const initialValues = {
  username: 'test',
  password: 'test',
};

const Login = () => {
  const [form] = Form.useForm();

  const onSubmit = async () => {
    const values = form.getFieldsValue();
    const res = await loginService(values.username, values.password);
    if (res && res.length > 0) {
      Dialog.alert({
        content: 'Login success',
      });
      return;
    }
    Dialog.alert({
      content: 'Login failed',
    });
  };
  return (
    <div className="login">
      <Form
        layout="horizontal"
        mode="card"
        form={form}
        initialValues={initialValues}
        footer={(
          <Button block color="primary" onClick={onSubmit} size="large">
            Log in
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
