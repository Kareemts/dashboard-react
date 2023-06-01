import React, { useEffect } from "react";
import { Layout, Menu, Popover } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../public/logo.png";
import account from "../../public/account.png";
import notification from "../../public/notification.png";
import headset from "../../public/headset.png";
import dashboard from "../../public/dashboard.png";
import campaign from "../../public/new.png";
import command1 from "../../public/command1.png";
import zone from "../../public/zone.png";
import channels from "../../public/channels.png";
import devices from "../../public/devices.png";
import media from "../../public/media.png";
import history from "../../public/history.png";
import headphone1 from "../../public/headphone1.png";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, imageSrc) {
  return {
    label,
    key,
    icon: <img src={imageSrc} alt={label} />,
  };
}
const items = [
  getItem("Dashboard", 1, dashboard),
  getItem("Compaigns", "2", campaign),
  getItem("Commands", "3", command1),
  getItem("Zones", "4", zone),
  getItem("Channels", "5", channels),
  getItem("Devices", "6", devices),
  getItem("Media Library", "7", media),
  getItem("History", "8", history),
];

export const AdminPageLayout = ({ children }) => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 900) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [windowWidth]);

  const logout = () => {
    localStorage.removeItem("login");
    navigate("/");
  };

  return (
    <Layout className="min-h-screen">
      <Sider
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          backgroundColor: "#0B3366",
          borderRadius: 0,
        }}
        className="sider"
      >
        <div className=" m-8 ">
          <img src={logo} alt="" />
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          items={items}
          className="bg-[##0B3366] text-white text-[16px] "
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="bg-[#FAFAFA] h-[68px]">
          <div className="flex justify-end ">
            <div className="flex w-48 justify-between mt-5">
              <div className="cursor-pointer">
                <img src={headset} alt="" />
              </div>
              <div className="cursor-pointer">
                <img src={notification} alt="" />
              </div>
              <Popover title="Logout">
                <div className="cursor-pointer" onClick={logout}>
                  <img src={account} alt="" />
                </div>
              </Popover>
            </div>
          </div>
        </Header>
        <Content className=" mt-6 ">
          <div>{children}</div>
        </Content>
        <Footer className="flex justify-end bg-[#FFFFFF] h-[30px] relative">
          {" "}
          <img className='absolute bottom-7 right-7' src={headphone1} alt="" />
        </Footer>
      </Layout>
    </Layout>
  );
};
