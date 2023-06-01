import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { axiosUrl } from "../../services/axiosInstance";
import logo from "../../public/logo.png";

export const Login = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    let { data } = await axiosUrl.post("/adminLogin", {
      values,
    });

    console.log(data);
    if (data.adminInfo.message) {
      message.error(data.adminInfo.message);
    }
    if (data.adminInfo.admin) {
      localStorage.setItem("login", JSON.stringify({ login: true }));
      navigate("/dashboard");
    }
  };
  return (
    <div className="flex w-full h-screen">
      <div className="  min-w-[500px] h-full bg-black">
        <div className="mt-96 m-20">
          <h1 className="text-white text-xl font-bold mb-5 ">
            <img src={logo} alt="" />
          </h1>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
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
                placeholder="Username"
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
              <Button htmlType="submit" className="bg-[#0B3366] text-white">
                Log in
              </Button>
            </Form.Item>
            <div className="text-white">Or </div>
          </Form>
        </div>
      </div>
      <div className="bg-[#0B3366] w-full"></div>
    </div>
  );
};
