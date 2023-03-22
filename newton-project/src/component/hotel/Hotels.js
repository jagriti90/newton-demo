import React, { useState } from 'react'
// import Card from '../../maincard/Card'
import Fdata from '../../maincard/Fdata'
export const Hotels = () => {
  const [item, setItems] = useState(Fdata)
  console.log(item)

  const fillterItem = (categItem) => {
   
    const updateItem = Fdata.filter((cureElem) => {
      return cureElem.category === categItem
    })

    setItems(updateItem)
   
  }



  // Constructor (props){
  //   super(props);
  //   this.props =props;
  // }
  return (
    <>
      <div className='flights_bar'>
        <div className='h-[100vh] relative'>
          <div className=''>
            <img className='w-screen h-[95vh]' src='https://wallpaperaccess.com/full/459026.jpg'></img>
          </div>
          <div>
          </div>
          <div className='hotel_bar absolute'>
            <div className='bg-white h-[60vh] w-[50vh border-box]'>
              <div className='ml-10 py-3'>
                <ul className='flex space-x-4'>
                  <li onClick={() => fillterItem("Hotel")}>Hotal</li>
                  <li onClick={() => fillterItem("destion")}>destinaon</li>
                  <li></li>
                </ul>
              </div>
              <div>
                {/* {this.props.} */}
              </div>
            </div>

          </div>
        </div>

      </div>
      
      <div className='grid grid-cols-4 gap-4'>
        {
          item.map((item) => {
            const {id,category,imgsrc,sname} =item;
            return (
              <>
                <div className='cards flex relative '>
                  <div key={id} className='card flex rounded-2xl'>
                    <img src={imgsrc} alt='mtv' className='img_bar rounded-3xl' />
                    <div className='Card_info absolute'>
                      <span className='card_title font-bold pt-4'> {sname}</span>
                      {/* <h3 className='link_info'>{props.link} </h3> */}
                      {/* <a className='hero_info'>{props.welcome} </a> */}
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      
      </div>
      {/* <div className='flex mt-[-8vh]'>

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
      </div> */}
      {/* <div className='flex'>
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
      </div> */}
    </>
  )
}
