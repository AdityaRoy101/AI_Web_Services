
import { Button, Checkbox, Form, Input } from 'antd';
import SecondaryButton from '../components/SecondaryButton';
import LinkTag from '../components/LinkTag';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { redirect, useNavigate } from 'react-router-dom';

// const onFinish = (values) => {
//   console.log('Success:', values);
// };

// const onFinishFailed = (errorInfo) => {
//   console.log('Failed:', errorInfo);
// };

const SignInForm = () => {

  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const register  = () => {
    navigate("/register");
  }

  
  const signinUser = async (e) => {
    // e.preventDefault()
    const {email, password} = data;
    try {
      const {data} = await axios.post('/login',{
        email, password
      })
      if(data.error){
        toast.error(data.error)
      }else{
        setData({});
        toast.success('Logged In Successful!');
        // toast.success('Refresh the Page');
        navigate('/redirect')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onFinish = (values) => {
    signinUser();
  console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
  };


  return(
    <main>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >

        <Form.Item
          label="Email"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input onChange={(e) => {setData({...data, email: e.target.value})}} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password onChange={(e) => {setData({...data, password: e.target.value})}} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
        <div className=' flex gap-5 pl-10'>
          <LinkTag text="Sign Up" route={register}/>
          <PrimaryButton text="Log In" htmlType="submit"/>
        </div>
        </Form.Item>
      </Form>
  </main>
  );
}
export default SignInForm;