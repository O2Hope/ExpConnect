import React, { Fragment } from "react";
import {
  FormContainer,
  SignInButton,
  ForgotPassword,
  TitleContainer
} from "./sign-in.styles";

import { Form, Icon, Input, Checkbox, Row, Avatar } from "antd";

// const handleSubmit = () => {
//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         console.log("Received values of form: ", values);
//       }
//     });
//   };
// };

const SignIn = ({ form }) => {
  const { getFieldDecorator } = form;
  return (
    <Fragment>
      <Row type="flex" justify="center">
        <Avatar shape="square" size={120} icon="user" />
      </Row>
      <FormContainer type="flex" justify="center">
        <TitleContainer>Sign in</TitleContainer>
        <Form
          onSubmit={e => {
            e.preventDefault();
            form.validateFields((err, values) => {
              if (!err) {
                console.log("Received values of form: ", values);
              }
            });
          }}
        >
          <Form.Item>
            {getFieldDecorator("email", {
              rules: [{ required: true, message: "Please enter your email!" }]
            })(
              <Input
                prefix={
                  <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Email"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please enter your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            <ForgotPassword href="#!">Forgot password</ForgotPassword>
            <SignInButton type="primary" htmlType="submit">
              Log in
            </SignInButton>
            Or <a href="#!">register now!</a>
          </Form.Item>
        </Form>
      </FormContainer>
    </Fragment>
  );
};

const SignInForm = Form.create({ name: "login" })(SignIn);

export default SignInForm;
