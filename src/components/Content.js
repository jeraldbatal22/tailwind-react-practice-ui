import React from 'react'

const Content = () => {
  return (
    // sm:grid lg:grid-cols-2 lg:mt-36 sm:grid-cols-1 sm:gap-10 sm:mt-12 sm:px-0 px-40 text-gray-100
    <div className='lg:grid lg:grid-cols-2 lg:px-40 lg:mt-32 lg:text-left text-gray-100 my-10 text-center px-5'>
      <div className='lg:m-auto mb-16'>
        <img className='rounded-full m-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ebSXHb-eq49FgXDQVTyIgrvoW7_pxrakhg&usqp=CAU" alt=''/>
      </div>
      <div className=' m-auto md:w-4/5'>
        <div>
          <h1 className='text-5xl'>EARTH</h1>
          <p className='mt-5'>Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's
            surface is land with remain 70.8% is covered with water. Earth's distance from the Sun. Physical
            properties and geological history have allowed life to evolve and thrive.
          </p>
          <p className='mt-5'>
            <span className='mr-3'>Source:</span>
            <a href='#a'>Wikipedia</a>
          </p>
        </div>
        <div className='mt-5 hidden lg:block'>
          <button className='my-1 p-4 bg-violet-500 w-full text-left'><span className='mr-3'>01</span> OVERVIEW</button>
          <button className='my-1 p-4 w-full text-left border-2 border-gray-600'><span className='mr-3'>02</span> INTERNAL STRUCTURE</button>
          <button className='my-1 p-4 w-full text-left border-2 border-gray-600'><span className='mr-3'>03</span> SURfACE GEOLOGY</button>
        </div>
      </div>
    </div>
  )
}

export default Content
