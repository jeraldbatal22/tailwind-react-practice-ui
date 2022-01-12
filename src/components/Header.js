import React, { useEffect, useLayoutEffect, useState } from 'react'

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const Header = () => {
  const [isShow, setisShow] = useState(false)
  const [width] = useWindowSize()
  useEffect(() => {
    if(width > 768){
      setisShow(false)
    }
  }, [width])

  return (
    <header className='p-10'>
      <nav className='md:flex-col md:items-center md:gap-10 lg:flex-row flex justify-between text-gray-100'>
        <h1>THE PLANETS</h1>
        <h1 className='md:hidden' onClick={() => setisShow(!isShow)}><i className="fas fa-bars"></i></h1>
        <ul className={`md:flex gap-10 ${isShow ? 'absolute bg-gray-600 shadow-lg  mt-10 left-0 right-0 text-center mx-8' : 'hidden'}`}>
          <li className='cursor-pointer my-4'>MERCURY</li>
          <li className='cursor-pointer my-4'>VENUS</li>
          <li className='cursor-pointer my-4'>EARTH</li>
          <li className='cursor-pointer my-4'>MARS</li>
          <li className='cursor-pointer my-4'>JUPITER</li>
          <li className='cursor-pointer my-4'>SATURN</li>
          <li className='cursor-pointer my-4'>URANUS</li>
          <li className='cursor-pointer my-4'>NEPTUNE</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
