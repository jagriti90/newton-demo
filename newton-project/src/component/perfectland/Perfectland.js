import React from 'react'
import Card from '../../maincard/Card'
import Fdata from '../../maincard/Fdata'


const Perfectland = () => {

  return (
    <>
      <div className='w-full h-full relative sticky'>
        <img className='w-full bg-cover  h-[440px]' src='https://t4.ftcdn.net/jpg/03/41/36/81/360_F_341368182_FtfHoNQvUoqc39dT4uAqi6RhByaw1u16.jpg' />

        <div className=' top-4 absolute left-8'>
          <p className='text-blue-600 ml-6 p-6 font-bold  text-3xl'>This is the Season of Seaving </p>
          <div className=' h-72  bg-white rounded-3xl w-[120vh] h-[55vh] '>
            <h2 className='pl-5 text-blue-600 text-3xl font-bold p-1'>Book your flight with confidence</h2>
            <h2 className='pl-5 text-blue-900/70 text-bold text-lg mt-1 font-medium'>Book a flight with free cancellation for flexibility</h2>

            <div className="space-x-3 text-xs text-blue-500 items-center flex ml-5 py-3">
              <form action="/action_page.php" className='text-blue-900/70 flex'>
                <div className='px-2'>
                  <input className='accent-blue-500 focus:accent-blue-600 w-4 h-4' type="radio" id="Round-Trip" name="fav_language" value="Round-Trip" />
                  <label for="Round-Trip" className='ml-1 text-sm'>Round-Trip</label>
                </div>
                <div className='px-2'>
                  <input className='accent-blue-500 focus:accent-blue-600 w-4 h-4' type="radio" id="One-way" name="fav_language" value="One-way" />
                  <label for="One-way" className='ml-1 text-sm'>One-way</label>
                </div>
                <div className='px-2'>
                  <input className='accent-blue-500 focus:accent-blue-600 w-4 h-4' type="radio" id="Multi-destination" name="fav_language" value="Multi-destination" />
                  <label for="Multi-destination" className='ml-2 text-sm'>Multi-destination</label>
                </div>
              </form>
            </div>
            <div className="ml-10">
              <div className="grid grid-cols-2">
                <div className="grid grid-cols-2 gap-x-20 items-center">
                  <div>
                    <input placeholder="Departing from..?" className=' place_bar text-sm border-2 border-blue-500 rounded-2xl p-4 w-[50vh] text-black hover:text-border-800 items-center text-center font-bold ' type="text" />
                  </div>
                  <div className='ml-[20vh]'>
                    <input placeholder="Going to..?" className=' place_bar text-sm border-2 border-blue-500 rounded-2xl p-4 w-[50vh] text-black hover:text-border-800 items-center text-center font-bold ' type="text" />
                  </div>
                </div>

              </div>
              <div className="grid grid-cols-2 py-3 ">
                <div className='flex'>
                  <div className="grid grid-cols-2 gap-x-8 items-center">
                    <div className=''>
                      {/* <DateRangePicker
                                           ranges={[selectionRange]}
                                           minDate={new Date()}
                                           rangeColors={["blue"]}
                                           onChange={handleSelect}
                                        /> */}
<form>
                      <input className=' date_bar text-sm text-black  text-sm border-2 border-blue-500 rounded-2xl p-4 w-[35vh] hover:text-border-800 items-center text-center font-bold' type="date" placeholder='Checks-in - Checks-out' name="date" />
                    </form>
                    </div>
                    <div>
                      <select className='h-14 w-[35vh] rounded-2xl bg-white border-2 border-blue-500 ml-[8vh]'>
                        <option value="one">Economy</option>
                        <option value="two">Premimum Economy</option>
                        <option value="three">Business</option>
                        <option value="three">First</option>
                      </select>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex mt-[-8vh]'>
          <Card
            imgsrc={Fdata[0].imgsrc}
            sname={Fdata[0].sname}
            link={Fdata[0].link}
            welcome={Fdata[0].welcome}
          />
          <Card
            imgsrc={Fdata[1].imgsrc}
            sname={Fdata[1].sname}
            link={Fdata[1].link}
            welcome={Fdata[1].welcome}
          />
          <Card
            imgsrc={Fdata[2].imgsrc}
            sname={Fdata[2].sname}
            link={Fdata[2].link}
            welcome={Fdata[2].welcome}
          />
          <Card
            imgsrc={Fdata[3].imgsrc}
            sname={Fdata[3].sname}
            link={Fdata[3].link}
            welcome={Fdata[3].welcome}
          />
        </div>
        <div className='flex'>
          <Card
            imgsrc={Fdata[4].imgsrc}
            sname={Fdata[4].sname}
            link={Fdata[4].link}
            welcome={Fdata[4].welcome}
          />
          <Card
            imgsrc={Fdata[5].imgsrc}
            sname={Fdata[5].sname}
            link={Fdata[5].link}
            welcome={Fdata[5].welcome}
          />
          <Card
            imgsrc={Fdata[6].imgsrc}
            sname={Fdata[6].sname}
            link={Fdata[6].link}
            welcome={Fdata[6].welcome}
          />
          <Card
            imgsrc={Fdata[7].imgsrc}
            sname={Fdata[7].sname}
            link={Fdata[7].link}
            welcome={Fdata[7].welcome}
          />
        </div>
        <div className='mt-10'>
          <div>
            <img className='h-[70vh] w-full' src='https://i.ytimg.com/vi/j9WYa8XFr1M/maxresdefault.jpg' />
          </div>
        </div>
      </div>
      {/* <div> 
        <div className='flex bg-yellow-300 h-10 w-[40vh] rounded-lg text-center items-center ml-4 mt-[-10px] font-bold'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24" aria-hidden="true" fill="currentcolor" color="highlight.shade" tabindex="-1" focusable="false" role="img" class="Svg-sc-12lgb6u-0 cbmaON Discount__SvgDiscount-sc-6qjs14-0 jGIFxZ"><path d="M23 12l-2.4 2.7.3 3.5-3.6.8-1.9 3-3.4-1.4L8.6 22l-1.9-3-3.6-.8.3-3.5L1 12l2.4-2.7-.3-3.5L6.7 5l1.9-3L12 3.4 15.4 2l1.9 3 3.6.8-.3 3.5L23 12zm-10.8-.6c-1.3-.3-1.8-.7-1.8-1.3 0-.6.6-1.1 1.6-1.1s1.4.5 1.5 1.2h1.3c0-1-.7-1.9-1.9-2.2V6.7h-1.8V8c-1.1.2-2 1-2 2.1 0 1.3 1.1 2 2.8 2.4 1.5.4 1.8.9 1.8 1.4 0 .4-.3 1-1.6 1-1.2 0-1.7-.5-1.8-1.2H9c.1 1.3 1 2 2.2 2.2v1.3H13V16c1.1-.2 2.1-.9 2.1-2.1-.1-1.6-1.5-2.2-2.9-2.5z"></path></svg>
          <p>Bundle+Save On your Deals</p>
        </div>
      </div> */}

    </>
  )
}

export default Perfectland