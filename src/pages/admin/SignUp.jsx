import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { axiosUrl } from "../../services/axiosInstance";
export const Signup = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    let { data } = await axiosUrl.post("/signUp", {
      values,
    });
    console.log(data);
    if (data.adminInfo.message) {
      message.error(data.adminInfo.message ?? data.message);
    }
    if (data.adminInfo.signUp) {
      navigate("/");
    }
  };
  return (
    <div className="flex w-full h-screen">
      <div className=" min-w-[500px] h-full bg-black">
        <div className="mt-32 m-20">
          <h1 className="text-white text-xl font-bold mb-5 ">Sign up</h1>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your full name!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Full Name"
              />
            </Form.Item>
            <Form.Item
              name="userName"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="UserName"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" className="bg-purple-500 text-white">
                Sign Up
              </Button>
            </Form.Item>
            <div className="text-white">Or </div>
            <div
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Login
            </div>
          </Form>
        </div>
      </div>
      <div className="bg-[#0B3366] w-full"></div>
    </div>
  );
};
