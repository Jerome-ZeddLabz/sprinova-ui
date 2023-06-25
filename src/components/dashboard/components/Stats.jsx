import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faTv,
  faHourglass,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import "../style.css";
import { Dropdown } from "antd";

const Stats = ({ title }) => {

  const StatCard = ({ icon, title, data }) => (
    <div>
      <div className="bg-[#E6F1FF] w-12 h-12 rounded-full flex justify-center items-center">
        <FontAwesomeIcon className="text-[17px] text-[#002F6B]" icon={icon} />
      </div>
      <h2 className="mt-3 uppercase text-[#8D969E] text-base font-medium">
        {title}
      </h2>
      <h1 className="text-2xl text-[#011627] font-bold">{data}</h1>
    </div>
  );

  const items = [
    {
      key: "1",
      // icon: <FontAwesomeIcon className="text-[12px] mr-1" icon={faUser} />,
      label: "This Month",
      style: { fontSize: "14px", display: "flex" },
    },
    {
      key: "2",
      // icon: <FontAwesomeIcon className="text-[12px] mr-1" icon={faUser} />,
      label: "This Year",
      style: { fontSize: "14px", display: "flex" },
    },
  ];

  return (
    <div className="bg-white p-3 px-4 rounded-2xl border border-[#D9DCDF]">
      <div className="text-[#011627] flex justify-between items-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <Dropdown menu={{items}}>
          <h3 className="flex items-center gap-2 text-sm font-semibold cursor-pointer">
            This week{" "}
            <FontAwesomeIcon className="text-[17px]" icon={faCaretDown} />{" "}
          </h3>
        </Dropdown>
      </div>
      <div className="mt-7 mr-4 flex justify-between items-center">
        <StatCard icon={faTv} title="Rendering Jobs" data="14" />
        <StatCard icon={faHourglass} title="Waiting Jobs" data="14" />
        <StatCard icon={faThumbsUp} title="Completed Jobs" data="14" />
        <StatCard icon={faTriangleExclamation} title="Failed Jobs" data="14" />
      </div>
    </div>
  );
};

export default Stats;
