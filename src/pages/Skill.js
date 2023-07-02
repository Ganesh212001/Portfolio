import React from 'react'
import BottomLine from '../components/atoms/BottomLine'

const Skill = () => {
  return (
    <>
        <div className='mt-20'>
            <h1 className="text-4xl font-semibold drop-shadow-md text-center">
                <span className="text-primary">Skills</span>
            </h1>
          <BottomLine />
            <div className='flex flex-wrap mt-16 justify-center space-x-20'>
                <div className='flex w-40 h-40 bg-red-500 rounded-2xl'>

                </div>
                <div className='flex w-40 h-40 bg-yellow-500 rounded-2xl'>

                </div>
                <div className='flex w-40 h-40 bg-green-500 rounded-2xl'>

                </div>
                <div className='flex w-40 h-40 bg-blue-500 rounded-2xl'>

                </div>
            </div>
        </div>
    </>
  )
}

export default Skill
