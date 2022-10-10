import React from 'react'

const HackathonList = () => {
  return (
    <div>
        <div className='bg-[#002A3B] py-[72px] '>
            <h2 className='text-center text-2xl font-semibold text-white mb-16'>Explore Challenges</h2>
            <div className='flex justify-between max-w-screen-md mx-auto px-4'>
                <input type="text " className='w-10/12  py-2 px-4 bg-white'/>

                <div className='w-2/12  ml-2 py-2 px-4 bg-white'>
                    <button className='text-center'>Filter</button>
                    {/* <span>
                    </span> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default HackathonList