import React from "react";
import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Outlet, useNavigate } from "react-router-dom";
import "./style.css"

const MainLayout = () => {
    const navigate = useNavigate();

  const items = [
    {
      key: "1",
      // icon: <FontAwesomeIcon className="text-[12px] mr-1" icon={faUser} />,
      label: "Dashboard",
      style: { fontSize: "14px", display: "flex" },
      onClick: () => navigate("/dashboard"),
    },
    {
      key: "2",
      // icon: <FontAwesomeIcon className="text-[12px] mr-1" icon={faUser} />,
      label: "Assets",
      style: { fontSize: "14px", display: "flex" },
      onClick: () => navigate("/assets"),
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        className="py-7 rounded-r-3xl"
        style={{ backgroundColor: "#011627" }}
      >
        <Menu
          className="mt-10"
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          style={{ backgroundColor: "#011627" }}
          items={items}
        />
      </Sider>
      <Layout>
        <Header className="bg-white border-b border-[#DEE1E3]">
          <div className="font-medium flex justify-between items-center">
            <h2 className="">CPU Region 11 (16-cores) Normal</h2>
            <div>Daren Joe</div>
          </div>
        </Header>
        <Content className="bg-[#F5F5F5] p-10">
          <Outlet />
        </Content>
        <Footer className="border-t border-[#DEE1E3] bg-white text-right">
            <h2 className="text-sm font-medium">70mbps 110mpbs</h2>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
