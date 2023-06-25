import React from "react";
import { Avatar, Badge, Divider, Dropdown, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Outlet, useNavigate } from "react-router-dom";
import splogo from "../../assets/splogo.png"
import avatar from "../../assets/avatar.png"
import "./style.css"
import { DownOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faGift, faCloudArrowUp, faCloudArrowDown, faBorderAll, faSlidersH, faCloudBolt, faCommentSlash, faX , faCircleRadiation, faRightLeft, faCube, faGear, faHeadset, faTicket } from "@fortawesome/free-solid-svg-icons";
import { faBell, faFolder, faMessage, faFile } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const MainLayout = () => {
  const navigate = useNavigate();
  const [ad, setAd] = useState(true);

  const menuItems = [
    {
      key: "1",
      icon: <FontAwesomeIcon icon={faBorderAll} />,
      label: "Dashboard",
      style: { fontSize: "14px", display: "flex" },
      onClick: () => navigate("/"),
    },
    {
      key: "2",
      icon: <FontAwesomeIcon icon={faFolder} />,
      label: "Pools",
      style: { fontSize: "14px", display: "flex" },
      onClick: () => navigate("/pools"),
    },
    {
      key: "3",
      icon: <FontAwesomeIcon icon={faSlidersH} />,
      label: "Analysis",
      style: { fontSize: "14px", display: "flex" },
    },
    {
      key: "4",
      icon: <FontAwesomeIcon icon={faCircleRadiation} />,
      label: "Jobs",
      style: { fontSize: "14px", display: "flex" },
    },
    {
      key: "5",
      icon: <FontAwesomeIcon icon={faFile} />,
      label: "Reports",
      style: { fontSize: "14px", display: "flex" },
    },
    {
      key: "6",
      icon: <FontAwesomeIcon icon={faRightLeft} />,
      label: "Transfer",
      style: { fontSize: "14px", display: "flex" },
    },
  ];

  const menuItems2 = [
    {
      key: "1",
      icon: <FontAwesomeIcon icon={faCube} />,
      label: "Project",
      style: { fontSize: "14px", display: "flex" },
    },
    {
      key: "2",
      icon: <FontAwesomeIcon icon={faGear} />,
      label: "Setting",
      style: { fontSize: "14px", display: "flex" },
    },
    {
      key: "3",
      icon: <FontAwesomeIcon icon={faHeadset} />,
      label: "Support",
      style: { fontSize: "14px", display: "flex" },
    },
    {
      key: "4",
      icon: <FontAwesomeIcon icon={faMessage} />,
      label: "Feedback",
      style: { fontSize: "14px", display: "flex" },
    },
    {
      key: "5",
      icon: <FontAwesomeIcon icon={faTicket} />,
      label: "Raise Ticket",
      style: { fontSize: "14px", display: "flex" },
    },
  ];

  const items = [
    {
      key: "1",
      // icon: <FontAwesomeIcon className="text-[12px] mr-1" icon={faUser} />,
      label: "Project 1",
      style: { fontSize: "14px", display: "flex" },
    },
    {
      key: "2",
      // icon: <FontAwesomeIcon className="text-[12px] mr-1" icon={faUser} />,
      label: "Project 2",
      style: { fontSize: "14px", display: "flex" },
    },
  ];

  return (
    <>
      {ad ? <div className="bg-[#E6F1FF] p-2 flex justify-between px-10">
        <div></div>
        <h2 className="text-sm font-medium">SGCloud agent not running. Please <span className="text-[#0171FE]">download</span> and launch SGCloud agent</h2>
        <button onClick={() => setAd(false)}>
          <FontAwesomeIcon className="text-sm" icon={faX} />
        </button>
      </div> : null}
      <Layout className="h-screen">
        <Sider
          className="py-7 rounded-r-3xl"
          style={{ backgroundColor: "#011627" }}
        >
          <img className="px-4 pb-8" src={splogo} alt="" />
          <Menu
            className="mt-10"
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            style={{ backgroundColor: "#011627" }}
            items={menuItems}
          />
          <div className="px-3">
            <Divider className="bg-[#1F3241]" />
          </div>
          <Menu
            className="absolute bottom-5"
            theme="dark"
            defaultSelectedKeys={[]}
            mode="inline"
            style={{ backgroundColor: "#011627" }}
            items={menuItems2}
          />
        </Sider>
        <Layout>
          <Header className="bg-white border-b border-[#DEE1E3]">
            <div className="font-medium flex justify-between items-center">
              <Dropdown menu={{items}}>
                <h2 className="flex items-center gap-2">Default Project <FontAwesomeIcon className="mt-0.5 text-[16px]" icon={faAngleDown} /> </h2>
              </Dropdown>
              <div className="flex items-center gap-6">
                <button>
                  <FontAwesomeIcon className="text-[#FD6B22] text-[17px]" icon={faGift} />
                </button>
                <button>
                  <Badge dot={true} offset={[-2,4]}>
                    <FontAwesomeIcon className="text-[17px]" icon={faBell} />
                  </Badge>
                </button>
                <Dropdown menu={{items}}>
                  <div className="flex items-center gap-2">
                    <Avatar size={42} src={avatar} />
                    <h2>Darren Joe</h2>
                    <FontAwesomeIcon className="mt-0.5 text-[16px]" icon={faAngleDown} />
                  </div>
                </Dropdown>
              </div>
            </div>
          </Header>
          <Content className="bg-[#F5F5F5] p-10 overflow-y-scroll">
            <Outlet />
          </Content>
          <Footer className="border-t border-[#DEE1E3] bg-white text-right">
              <div className="flex justify-between items-center"> 
                <div className="flex items-center gap-5">
                  <h2 className="text-sm font-medium flex items-center gap-2 cursor-pointer"><FontAwesomeIcon className="text-[16px]" icon={faCloudArrowDown} /> Client Download</h2> 
                  <FontAwesomeIcon className="text-[16px] cursor-pointer" icon={faCloudBolt} />
                  <FontAwesomeIcon className="text-[16px] cursor-pointer" icon={faCommentSlash} />
                </div>  
                <div className="flex items-center gap-5">
                  <h2 className="text-sm font-medium flex items-center gap-2"><FontAwesomeIcon className="text-[16px] text-[#8D969E]" icon={faCloudArrowDown} /> 70mbps</h2> 
                  <h2 className="text-sm font-medium flex items-center gap-2"><FontAwesomeIcon className="text-[16px] text-[#8D969E]" icon={faCloudArrowUp} /> 110mbps</h2> 
                </div>  
              </div>
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;
