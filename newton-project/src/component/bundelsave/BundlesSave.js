import React from 'react'
import Card from '../../maincard/Card'
import Fdata from '../../maincard/Fdata'
const bundlesSave = () => {
    return (
        <>
            <div className='flights_bar'>
                <div>
                    <div className='absolute'>
                        <img className='w-screen h-[95vh]' src='https://wallpaperaccess.com/full/459026.jpg'></img>
                    </div>
                    <div>
                        <div className='relative py-12 px-6 '>
                            <div className='bg-white w-[150vh] h-[80vh] rounded-3xl px-6 py-4'>
                                <div>
                                    <p className='text-blue-900 text-4xl font-bold'>
                                        Book your flight with confidence & Bundles+Save on your Deals
                                    </p>
                                    <p className='text-blue-900/70 text-bold text-xl mt-1 font-medium'>Book a flight with free cancellation for flexibility</p>
                                </div>
                                <div className='trip_type mt-4'>
                                    <form action="/action_page.php" className='text-blue-900/70 flex'>
                                        <div className='px-2'>
                                            <input className='accent-blue-500 focus:accent-blue-800 w-5 h-5' type="radio" id="Round-Trip" name="fav_language" value="Round-Trip" />
                                            <label for="Round-Trip" className='ml-1 text-sm'>Round-Trip</label>
                                        </div>
                                        <div className='px-2'>
                                            <input className='accent-blue-500 focus:accent-blue-800 w-5 h-5' type="radio" id="One-way" name="fav_language" value="One-way" />
                                            <label for="One-way" className='ml-1 text-sm'>One-way</label>
                                        </div>
                                        <div className='px-2'>
                                            <input className='accent-blue-500 focus:accent-blue-800 w-5 h-5' type="radio" id="Multi-destination" name="fav_language" value="Multi-destination" />
                                            <label for="Multi-destination" className='ml-2 text-sm'>Multi-destination</label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className='place_selection'>
                                <div className=' mt-[-49vh] flex px-7'>
                                    <div>
                                        <form action="/action_page.php place_bar">
                                            <input className=' place_bar text-sm border-2 border-blue-500 rounded-2xl p-4 w-[70vh] text-white hover:text-border-800 items-center text-center font-bold ' type="text" placeholder="Departing from....?" name="search" />
                                        </form>
                                    </div>
                                    <div className='ml-4'>
                                        <form action="/action_page.php">
                                            <input className='text-sm  text-sm border-2 border-blue-500 rounded-2xl p-4 w-[70vh] text-white hover:text-border-800 items-center text-center font-bold ' type="text" placeholder="Going to....?" name="search" />
                                        </form>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                                <div className='flex mt-4 px-6'>
                                    <div>
                                        <form>
                                            <input className=' date_bar text-sm text-black  text-sm border-2 border-blue-500 rounded-2xl p-4 w-[40vh] hover:text-border-800 items-center text-center font-bold' type="date" placeholder='Checks-in - Checks-out' name="date" />
                                        </form>
                                    </div>
                                    <div className='h-[80vh] w-[80vh] border-red-400 px-6 rounded-3xl'>
                                        <label for="class"></label>
                                        <select name="class" id="class" className=' slect_bar text-sm border-2 border-blue-500 rounded-2xl bg-white p-4 w-[40vh] hover:text-border-800 items-center text-center font-bold'>
                                            <option value="economylvo">Economy</option>
                                            <option value="premimum Economy">Premimum Economy</option>
                                            <option value="business">Business</option>
                                            <option value="first">First</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='mt-[-72vh] px-[40vh] border-b border-gray-400 py-5 w-[150vh]'>
                                    <button>
                                        <form>
                                            <input className='bg-blue-600 rounded-2xl p-4 w-[60vh] text-white hover:bg-blue-800 hover:text-white items-center text-center font-bold' type="Button" value="Find your Flight" />
                                        </form>
                                    </button>
                                    <div className='text-sm ml-[13vh] text-blue-900/70 text-bold font-medium mt-1'>Book a flight with free cancellation for flexibility</div>
                                </div>

                                <div className='w-[150vh] mt-2'>
                                    <div className=' text-center items-center'>
                                        <a className='text-mg font-bold '>Want even bigger discount? Save up to 50% by <span className='text-blue-600 '>Searching Express Deals</span>.</a>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='other_tag py-6 mt-[8vh]'>
                    <div className='h-[30vh] w-full bg-blue-600'>
                            <h1 className='bg-white font-bold text-4xl'>Best Offer on Perfectland</h1>
                    </div>
                </div> */}
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
        </>
    )
}

export default bundlesSave