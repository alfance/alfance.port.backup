var React = require('react');
import Project from "./Project";

var Project1 = React.createClass({
    render() {
        const ProjectName = "Cycnav";
        const Tagline ="Home IOT Vertical Garden";

        const Titles = [
            "Problem",
            "Solution",
            "Objective",
            "WireFrame",
            "Hi-Fidelity Mockup",
            "Future Development",
        ].map((name, i)=> <Project key={i} name={name}/> );

        const Images =[
            "./media/img/cycnav/1.png",
            "./media/img/cycnav/01.png",
            "./media/img/cycnav/02.png",
            "./media/img/cycnav/03.png",
            "./media/img/cycnav/04.png",
            "./media/img/cycnav/05.png",
            "./media/img/cycnav/06.png",
            "./media/img/cycnav/07.png",
            "./media/img/cycnav/08.png",
            "./media/img/cycnav/09.png",
            "./media/img/cycnav/11.png",
            "./media/img/cycnav/12.png",
            "./media/img/cycnav/13.png",
            "./media/img/cycnav/14.png",
            "./media/img/cycnav/DSC_0033.png",
            "./media/img/cycnav/1.jpg",
            "./media/img/cycnav/DSC_0025.jpg",
            "./media/img/cycnav/group14-paper-wireframe.png",

        ]

        const adText =[
            "1 dd",
            "2 dd",
            "3 dd",
            "4 dd",
            "5 dd",
        ]
        const Contents = [

            "“All About Biking” is for the urban cyclist, it’s an up to date and interactive bikers map of the city that allows cyclists to see where current construction, potholes and obstructions are taking place.",
            "Users contribute to the map by updating the status of bike specific road conditions and road blocks they see.",
            "The app will give all the necessary features you need as an urban cyclist: list detours,  nearby bike services, bike parking and more.",

            //problem
            "The biggest pain that every cyclist has experienced, especially the urban cyclist, is various road conditions and incidents that lead to unexpected detours. Looking for an applicable route can be time consuming, while bypassing the original road can be dangerous. Currently there have been apps that help cyclists navigate through the road, but they do not offer alternate route options. most importantly, cyclists needed to be constantly updated while they are biking. the iphone apps pose safety concerns if the cyclists check them frequently on the road. ",
            //solution
            "bike light connected to blue tooth, crowdsourced app is overlayed on top of google maps. The app can either be used through a smartphone, computer or ipad for maximum accessibility.",

            "Every safe cyclist needs a bike light at night, we thought that attaching the functions of our product to a technology our consumer already uses would be the simplest and easiest way to integrate the product into their everyday lives.",


            "Hi-Fidelity Mockup",

            "Future Development",
        ].map((info, i)=> <Project keys={i} info={info}/> );

        const randomAd = adText[Math.round(Math.random() * (adText.length -1) )];
        return (
            <div className ="flex-box">
                <div className="project-page-single center-align">
                    <Project ProjectName={ProjectName} />
                    {Contents[0]}
                    {Contents[1]}
                    {Contents[2]}
                    <img src ={Images[0]} />

                 </div>
                 <div className="project-page-single">
                    {Titles[0]}
                    {Contents[3]}
                    {Titles[1]}
                    {Contents[4]}
                    {Contents[5]}

                 </div>
                  <div className="ImgStyle2">
                      <p>Mobile Interface</p>
                      <div className="image-row">
                          <p>login Pages</p>
                          <img src ={Images[1]} />
                          <img src ={Images[2]} />
                          <img src ={Images[3]} />
                      </div>
                      <div className="image-row">
                          <p>Route Navigateion</p>
                          <img src ={Images[4]} />
                          <img src ={Images[8]} />
                          <img src ={Images[9]} />
                      </div>
                  </div>

                  <div className="ImgStyle1">
                      <div className="image-up">
                          <p>Digital Interface</p>
                          <img src ={Images[14]}/>
                     </div>
                     <div className ="image-row">
                          <img src ={Images[15]}/><img src ={Images[16]}/>
                    </div>
                    </div>

                <div className = "project-page-img">
                    <p>WireFrame</p>
                    <img src = {Images[17]} />
                </div>
            </div>
        )
    }
});

module.exports = Project1;
