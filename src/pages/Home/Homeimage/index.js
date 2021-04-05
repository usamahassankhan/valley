import React from 'react'
import './index.css';
import bg from './../../../assets/images/Background.png'
import code from './../../../assets/images/code.png'

import code2 from './../../../assets/images/code2.png'
import code3 from './../../../assets/images/code3.png'
import maincode from './../../../assets/images/maincode.png'

const index = () => {
    return (
        <div>
            <section class="sec-1">
          <div className="bg-img-div">
            <img class="img-bg" src={bg}></img>
            <div class="div-1">
              <div class="div-2">
                <div class="cfo-sec">
                  <div class="cfo-img-div">
                    <h1>Providing Solutions Piece By Piece</h1>
                    {/* <img
                     src={maincode}
                    ></img> */}
                  </div>
                  <div>
                    <p class="para">
                    The Peace Effect is a multidisciplinary company that specializes in media and software services by keeping storytelling at its forefront.
                    </p>
                  </div>
                  <div class="bt-div">
                    <button class="bt">Read More</button>
                  </div>
                </div>
                <div class="back4-imgs-main">
                  <div class="hero-img1">
                    <img
                      style={{ width: "100%", height: "100%" }}
                    src={maincode}
                    ></img>
                  </div>
                  <div class="upper-imgs-main">
                    <div class="h3-img">
                      <div class="hero-img3">
                        <img
                          style={{ width: "100%", height: "100%" }}
                          // src={require(".//assets/images/Hero/3.png")}
                          src={code2}
                        ></img>
                      </div>
                    </div>
                    <div class="upper-imgs">
                      <div class="hero-img4">
                        <img
                          style={{ width: "100%", height: "100%" }}
                          // src={require(".//assets/images/Hero/4.png")}
                          src={code}
                        ></img>
                      </div>
                      <div class="hero-img2">
                        <img
                          style={{ width: "100%", height: "100%" }}
                          // src={require(".//assets/images/Hero/2.png")}
                          src={code3}
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="cont-upper">
              <div class="cont">
                <div class="count-inner">
                  {/* <div class="circle">
                    <img
                      class="icon1"
                      src={require("./assets/images/Feature Icons/1.png")}
                    ></img>
                  </div> */}
                  <div>
                    <text>40+</text>
                  </div>
                  <text>asdfgh</text>
                </div>
                <div class="count-inner">
                  {/* <div class="circle">
                    <img
                      class="icon1"
                      src={require("./assets/images/Feature Icons/1.png")}
                    ></img>
                  </div> */}
                  <div>
                    <text>40+</text>
                  </div>
                  <text>asdfgh</text>
                </div>
                <div class="count-inner">
                  {/* <div class="circle">
                    <img
                      class="icon1"
                      src={require("./assets/images/Feature Icons/1.png")}
                    ></img>
                  </div> */}
                  <div>
                    <text>40+</text>
                  </div>
                  <text>asdfgh</text>
                </div>
                <div class="count-inner">
                  {/* <div class="circle">
                    <img
                      class="icon1"
                      src={require("./assets/images/Feature Icons/1.png")}
                    ></img>
                  </div> */}
                  <div>
                    <text>40+</text>
                  </div>
                  <text>asdfgh</text>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}

export default index
