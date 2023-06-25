import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table } from 'antd'
import React from 'react'
import Stats from './components/Stats'
import { faEye } from '@fortawesome/free-regular-svg-icons';
import Chart from './components/Chart';
import SemiCircleProgress from 'react-progressbar-semicircle';

const Dashboard = () => {

  const columns = [
    {
      key:"1",
      title: "JOB ID",
      render: (data) => (<p className='text-[#011627] text-base font-medium'>{data?.jobID}</p>)
    },
    {
      key:"2",
      title: "PROJECT ID",
      render: (data) => (<p className='text-[#011627] text-base font-medium'>{data?.projectId}</p>)
    },
    {
      key:"3",
      title: "STAGE",
      render: (data) => (<p className='text-[#011627] text-base font-medium'>{data?.stage}</p>)
    },
    {
      key:"4",
      title: "SCENE/SHOT NAME",
      render: (data) => (<p className='text-[#011627] text-base font-medium'>{data?.scene}</p>)
    },
    {
      key:"5",
      title: "VIEW",
      render: (data) => (<FontAwesomeIcon className='text-[#0171FE] ml-2 cursor-pointer' icon={faEye} />)
    },
  ];

  const data = [
    {
      key:"1",
      jobID:"1234567890",
      projectId:"Pro_256",
      stage:"Rendering",
      scene:"KD1_00123_DPI_JK001_light assembly_v017.hip(/obj/...)",
    },
    {
      key:"2",
      jobID:"1234567890",
      projectId:"Pro_256",
      stage:"Uploading",
      scene:"KD1_00123_DPI_JK001_light assembly_v017.hip(/obj/...)",
    },
    {
      key:"3",
      jobID:"1234567890",
      projectId:"Pro_256",
      stage:"Analysis",
      scene:"KD1_00123_DPI_JK001_light assembly_v017.hip(/obj/...)",
    },
    {
      key:"4",
      jobID:"1234567890",
      projectId:"Pro_256",
      stage:"Uploading",
      scene:"KD1_00123_DPI_JK001_light assembly_v017.hip(/obj/...)",
    },
    {
      key:"5",
      jobID:"1234567890",
      projectId:"Pro_256",
      stage:"Uploading",
      scene:"KD1_00123_DPI_JK001_light assembly_v017.hip(/obj/...)",
    },
    {
      key:"6",
      jobID:"1234567890",
      projectId:"Pro_256",
      stage:"Uploading",
      scene:"KD1_00123_DPI_JK001_light assembly_v017.hip(/obj/...)",
    },
  ]

  return (
    <div className='flex gap-7'>
      <div className='w-3/5 flex flex-col gap-7'>
        <Stats title="Running Jobs" />
        <Stats title="Running Frames" />
        <div className='bg-white p-5 rounded-2xl border border-[#D9DCDF]'>
          <h2 className="text-xl text-[#011627] font-semibold mb-3">Active Jobs</h2>
          <Table columns={columns} dataSource={data} pagination={false} />
        </div>
      </div>
      <div className='w-2/5 flex flex-col gap-7'>
        <div className='bg-white p-5 rounded-2xl border border-[#D9DCDF]'>
          <h2 className="text-xl text-[#011627] font-semibold mb-3">Network</h2>
          <Chart />
        </div>
        <div className='flex gap-7'>
          <div className='w-1/2 bg-white p-5 rounded-2xl border border-[#D9DCDF] flex flex-col justify-between gap-3'>
            <h2 className="text-xl text-[#011627] font-semibold mb-3">Balance</h2>
            <div>
              <h1 className='text-3xl font-bold text-[#011627]'><sup>$</sup>458</h1>
              <div className='mt-2 flex items-center gap-7'>
                <div className='w-1/2 font-medium text-base border-r'>
                  <h2 className='text-[#8D969E]'>Coupon</h2>
                  <h3 className='text-[#011627] text-lg'><sup>$</sup>25</h3>
                </div>
                <div className='w-1/2 font-medium text-base'>
                  <h2 className='text-[#8D969E]'>Credits</h2>
                  <h3 className='text-[#011627] text-lg'><sup>$</sup>0</h3>
                </div>
              </div>
            </div>
            <button className='mt-3 border border-[#0171FE] text-[#0171FE] text-xl font-semibold rounded-full p-3 hover:bg-[#0171FE] hover:text-white'>
              Recharge Now
            </button>
          </div>
          <div className='w-1/2 bg-white p-5 rounded-2xl border border-[#D9DCDF] flex flex-col justify-between gap-3'>
            <h2 className="text-xl text-[#011627] font-semibold mb-3">Storage</h2>
            <div>
              <SemiCircleProgress
                percentage={80}
                background="#E6F1FF"
                stroke="#002F6B"
                strokeWidth={30}
                diameter={270}
               />
              <div className='text-center -mt-10'>
                <h1 className='text-3xl font-bold text-[#011627]'>88 GB</h1>
                <h2 className='text-[#011627] text-lg font-medium'>out of 100 GB (88%)</h2>
              </div>
            </div>
            <button className='mt-3 border border-[#0171FE] text-[#0171FE] text-xl font-semibold rounded-full p-3 hover:bg-[#0171FE] hover:text-white'>
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard