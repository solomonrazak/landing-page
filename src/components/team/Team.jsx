import React from 'react'

const Team = () => {
  return (
    <div className="p-10 mt-10">
        <div className="flex flex-col text-white gap-8">
            <h1 className="text-start md:text-center text-[2rem] md:text-[3rem]">About <span className="text-blue-400">Super Simple</span></h1>
            <div className="grid grid-cols-3 grid-rows-2 md:grid-cols-6 md:grid-rows-1 gap-8 md:gap-3">
                <div className="flex flex-col font-medium">
                    <h1 className="text-[22px]">98%</h1>
                    <p>Satisfaction rate</p>
                </div>
                <div className="flex flex-col font-medium">
                    <h1 className="text-[22px]">200+</h1>
                    <p>Successful projects</p>
                </div>
                <div className="flex flex-col font-medium">
                    <h1 className="text-[22px]">25</h1>
                    <p>Countries Connected</p>
                </div>
                <div className="flex flex-col font-medium">
                    <h1 className="text-[22px]">70%</h1>
                    <p>Senior Specialist</p>
                </div>
                <div className="flex flex-col font-medium">
                    <h1 className="text-[22px]">3</h1>
                    <p>Years' Client engagement</p>
                </div>
                <div className="flex flex-col font-medium">
                    <h1 className="text-[22px]">5+</h1>
                    <p>Years on the market</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team