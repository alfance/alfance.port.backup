var React = require('react');
import Project from "./Project";

var Project1 = React.createClass({
    render() {
        const ProjectName = "Cycnav";
        const Tagline ="Home IOT Vertical Garden";

        const Titles = [
            "Problem",
            "Solution",
            "High Level Concept",
            "Choosing Route",
            "Contributing",
            "Process",
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
            "./media/img/cycnav/night.jpg",
            "./media/img/cycnav/DSC_0025.jpg",
            "./media/img/cycnav/mobilescreen.png",
            "./media/img/cycnav/group14-paper-wireframe.png",
            "./media/img/cycnav/night.jpg",

            "./media/img/cycnav/DSC_0025.jpg",
            "./media/img/cycnav/mobilescreen.png",
            "./media/img/cycnav/Prototypes3.png",
            "./media/img/cycnav/Prototypes4.png",
            "./media/img/cycnav/Prototypes5.png",
            "./media/img/cycnav/Prototypes6.png",
            "./media/img/cycnav/storyboard.png",
            "./media/img/cycnav/3d6.png",
            "./media/img/cycnav/3d7.png",
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
            "The biggest pain that every cyclist has experienced, especially the urban cyclist, is various road conditions and incidents that lead to unexpected detours. Looking for an applicable route can be time consuming, while bypassing the original road can be dangerous. Currently there have been apps that help cyclists navigate through the road, but they do not offer alternate route options. most importantly, cyclists needed to be constantly updated while they are biking.",
            //solution
            "bike light connected to blue tooth, crowdsourced app is overlayed on top of google maps. The app can either be used through a smartphone, computer or ipad for maximum accessibility.",

            "Every safe cyclist needs a bike light at night, we thought that attaching the functions of our product to a technology our consumer already uses would be the simplest and easiest way to integrate the product into their everyday lives.",

            //Prototypes
            "Whenever you login to Cycnav, it is automatically synced with the Physical Interface. After you entered your destination, the app calculates the best route for you and grabs realtime data of the road conditions. You can then choose between the shortest route and the recommended route",

            "Cycnav bike light can easily be attached and detached from any bike, giving greater accessibility to consumers. Cyclists do not have to purchase a new bike or replace sections of their bike. They can easily place the Cycnav physical interface into their bag or bring it inside when it is not in use.",

            //engaging user contribution
            "Users can contribute to the Cycnav community by adding road blocks discovered by them. ",

            "For this project, I am in charge of the UX/UI design as well as User flow architect for both the digital and physical interfaces. I have also 3D designed and printed the physical bike light. ",

            "We have adapted various design techniques and technologies for Cycnav. Inclusing product validation, market research in the early phase, rapid prototyping, high fidelity 3D printed mockup and digital interface for the product development, lastly road test and qualitative user test.",
        ].map((info, i)=> <Project keys={i} info={info}/> );

        const randomAd = adText[Math.round(Math.random() * (adText.length -1) )];
        return (
            <div className ="flex-box">
                <div className="project-page-single center-align">
                    <Project ProjectName={ProjectName} />
                    {Contents[0]}
                    {Contents[1]}
                    {Contents[2]}
                    <img className="col-sm-8" src ={Images[0]} />
                    <p><b>Collaborators: </b>Marisa Hoicka, Aditi Bhatia, Kylo Xue</p>
                    <p><b>Technologies: </b>Adobe PS, AI, AE, Rhinoceros, Balsamiq, MakerBot</p>

                 </div>
                 <div className="project-page-single">
                    {Titles[0]}
                    {Contents[3]}
                    {Titles[1]}
                    {Contents[4]}
                    {Contents[5]}
                    <a  href="https://www.youtube.com/watch?v=zar9Efp7DGM" target="_blank">Concept Video</a>

                 </div>
                  <div className="project-page-img border-left">
                      {Titles[2]}
                      <b>Mobile Interface - Cycnav App</b>
                      {Contents[6]}
                      <br></br>
                      <div className="image-row">
                          <img src ={Images[2]} />
                          <img src ={Images[3]} />
                          <img src ={Images[4]} />
                      </div>
                  </div>

                  <div className="project-page-img">
                      <div className="image-up">
                          <b>Physical Interface - Bike Light</b>
                          <p></p>
                          <img src ={Images[14]}/>
                          {Contents[7]}
                     </div>
                     <div className ="image-row">
                          <img src ={Images[15]}/><img src ={Images[16]}/>
                    </div>
                    </div>

                <div className = "project-page-img">
                    <b>IOT and APP Connection</b>
                    <p></p>
                    <img className= "addborder" src = {Images[17]} />
                </div>

                <div className = "project-page-img">
                    {Titles[3]}
                    <table><tbody>
                        <tr>
                        <td><img src = {Images[8]} /></td>
                        <td><img src = {Images[9]} /></td>
                        <td><img src = {Images[10]} /></td>
                        </tr>
                        <tr>
                            <td>Choose the route you would like to take.</td>
                            <td>Click on the various road block icons to see what is going on at the place.</td>
                            <td>It tracks your travel distance in real time and recommend the best route from your current location.</td>
                        </tr>
                    </tbody></table>
                </div>

                <div className="project-page-img border-left">
                    {Titles[4]}
                    <b>User Engagement to the Cycnav Community</b>
                    {Contents[8]}
                    <br></br>
                    <table><tbody>
                        <tr>
                            <td>You can check your hitory, favourites and user contributions.</td>
                            <td>Upload your own findings either though the app or by press the button on your bike light.</td>
                            <td>Choose from different obstacle types, take a photo and leave your notes. </td>
                        </tr>
                        <tr>
                            <td><img src = {Images[11]} /></td>
                            <td><img src = {Images[12]} /></td>
                            <td><img src = {Images[13]} /></td>
                        </tr>
                    </tbody></table>
                </div>
                <div className="project-page-single">
                    {Titles[5]}
                    {Contents[9]}
                    {Contents[10]}
                    <p>Click <a href ="./media/img/cycnav/market_analysis.pdf" target="_blank">HERE </a>to see the Market Analysis and Personas for Cycnav</p>
                </div>
                <div className="project-page-single">
                    <b>Paper WireFrame</b>
                    <img src ={Images[18]} />
                    <b>Digital WireFrame</b>
                    <div className="image-row">
                        <img src = {Images[22]} />
                        <img src = {Images[23]} />
                        <img src = {Images[24]} />
                        <img src = {Images[25]} />
                    </div>
                </div>

                <div className="project-page-single">
                    <b>StoryBoard</b><p></p>
                    <img src ={Images[26]} />
                    <a href="media/img/cycnav/storyboard-device.pdf" target="_blank"> <p>See the full Storyboard</p></a>
                </div>

                <div className="project-page-single">
                    <b>3D Model for the physical Interface</b><p></p>
                    <img src ={Images[27]} />
                    <img src ={Images[28]} />
                </div>
            </div>
        )
    }
});

module.exports = Project1;
