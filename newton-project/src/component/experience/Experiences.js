import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Experiences.css";
import Card from "../../maincard/Card";
import Fdata from "../../maincard/Fdata";

const Experiences = () => {
  return (
    <>
      <div>
        <div>
          <div className="crausal_bar">
            <Carousel className="" autoPlay
     infiniteLoop
     showArrows={false}>
              
              <div>
                <img
                  className="h-[70vh] w-[50vh]"
                  src="https://media.cntraveler.com/photos/628fd5ceeccad063f926fe99/master/w_3936,h_2624,c_limit/Plitvice-Lakes-Croatia-GettyImages-1080935866.jpg"
                />
                <p className="font-white word">Welcome to Perfectland</p>
              </div>
              <div>
                <img
                  className="h-[70vh] w-[50vh]"
                  src="https://i.pinimg.com/564x/d2/68/49/d26849e3d65ecb2c9790aa28173e5447.jpg"
                />
               <p className="font-white word">Welcome to Perfectland</p>
              </div>
              <div>
                <img
                  className="h-[70vh] w-[50vh]"
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/great-ocean-road-174028267-1494616481.jpg"
                />
                <p className="font-white word">Welcome to Perfectland</p>
              </div>
              <div>
                <img
                  className="h-[70vh] w-[50vh]"
                  src="https://static.toiimg.com/thumb/msid-87867224,width-748,height-499,resizemode=4,imgsize-232412/.jpg"
                />
                <p className="font-white word">Welcome to Perfectland</p>
              </div>
              <div>
                <img
                  className="h-[70vh] w-[50vh]"
                  src="https://www.treebo.com/blog/wp-content/uploads/2018/06/Snow-Sand-Road-The-21-Most-Beautiful-Places-In-India.jpg"
                />
                <p className="font-white word">Welcome to Perfectland</p>
              </div>
              <div>
                <img
                  className="h-[70vh] w-[50vh]"
                  src="https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg"
                />
                <p className="font-white word">Welcome to Perfectland</p>
              </div>
              <div>
                <img
                  className="h-[70vh] w-[50vh]"
                  src="https://www.fabhotels.com/blog/wp-content/uploads/2019/09/Munnar-Kerala-1.jpg"
                />
                <p className="font-white word">Welcome to Perfectland</p>
              </div>
            </Carousel>

            <div className="search_tag w-[65rem] bg-white/70 h-[14vh] ml-[20vh]">
              <div className="exp_bar">
                <div className="flex">
                  <input
                    className="input_bar"
                    type="text"
                    placeholder="Enter a destination, attraction or experience"
                  />
                  <input
                    className=" date_bar text-sm text-black "
                    type="date"
                    placeholder="Checks-in - Checks-out"
                    name="date"
                  />
                  <input
                    className=" date_bar text-sm text-black "
                    type="date"
                    placeholder="Checks-in - Checks-out"
                    name="date"
                  />
                  <input
                    className="bg-blue-600/80 h-[3rem] w-[20vh] ml-2 rounded-lg  text-white font-bold text-lg"
                    type="button"
                    value="Search"
                    onclick="msg(this is)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-[-8vh]">
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
      <div className="flex">
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
  );
};

export default Experiences;
