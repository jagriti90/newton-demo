import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <>
      <nav className='sticky top-0 top-9 mt-10'>
        <div className='search-container flex sticky top-0'>
          <div className='ml-4'>
            <form action="/action_page.php">
              <input className='text-sm text-black' type="text" placeholder="Where to....?" name="search" />
              <button type="submit"></button>
            </form>
          </div>
          <div className='date_selection ml-2'>
            <form>
              <input className='text-sm text-black relative' type="date" name="date" />
              <h2 className='absolute top-[12px] left-[80vh] text-sm'>Checks-in - Checks-out </h2>
            </form>
          </div>
          <div className='ml-2'>
            <form>
              <input className='text-sm text-black' type="" placeholder='Checks-in - Checks-out' name="date" />
            </form>
          </div>
          <div className='ml-2'>
            <input className='bg-blue-600 h-[-20px] w-[40vh] text-white font-bold text-lg' type="button" value="Find your Trip" onclick="msg(this is)" />
            <p className='text-sm text-gray-400 text-center'>Book a hotel with free cancellation for flexibility</p>
          </div>
        </div>
        <div className='flex bg-yellow-300 h-10 w-[40vh] rounded-lg text-center items-center ml-4 mt-[-10px] font-bold'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24" aria-hidden="true" fill="currentcolor" color="highlight.shade" tabindex="-1" focusable="false" role="img" class="Svg-sc-12lgb6u-0 cbmaON Discount__SvgDiscount-sc-6qjs14-0 jGIFxZ"><path d="M23 12l-2.4 2.7.3 3.5-3.6.8-1.9 3-3.4-1.4L8.6 22l-1.9-3-3.6-.8.3-3.5L1 12l2.4-2.7-.3-3.5L6.7 5l1.9-3L12 3.4 15.4 2l1.9 3 3.6.8-.3 3.5L23 12zm-10.8-.6c-1.3-.3-1.8-.7-1.8-1.3 0-.6.6-1.1 1.6-1.1s1.4.5 1.5 1.2h1.3c0-1-.7-1.9-1.9-2.2V6.7h-1.8V8c-1.1.2-2 1-2 2.1 0 1.3 1.1 2 2.8 2.4 1.5.4 1.8.9 1.8 1.4 0 .4-.3 1-1.6 1-1.2 0-1.7-.5-1.8-1.2H9c.1 1.3 1 2 2.2 2.2v1.3H13V16c1.1-.2 2.1-.9 2.1-2.1-.1-1.6-1.5-2.2-2.9-2.5z"></path></svg>
          <p>Bundle+Save On your Deals</p>
        </div>
        <div>
        </div>
      </nav>

    </>
  )
}

export default Header