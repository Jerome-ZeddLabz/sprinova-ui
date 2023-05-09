import React from 'react'

const Dashboard = () => {
  return (
    <div>
        <h1 className='text-3xl font-bold'>Dashboard</h1>
        <div className='mt-10 bg-white rounded-xl h-[10rem] border border-[#DEE1E3]'>
        </div>
        <div className='mt-6'>
            <div className='w-1/2 p-4 bg-white rounded-xl border border-[#DEE1E3]'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-semibold'>Running Jobs</h2>
                    <span className='text-sm font-medium'>This week</span>
                </div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard