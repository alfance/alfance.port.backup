var React = require('react');
import Project from "./Project";

var Project2 = React.createClass({
    render() {
        const ProjectName = "Vgarden";
        const Tagline ="Home IOT Vertical Garden";

        const Titles = [
            "Problem",
            "Solution",
            "Digital Interface",
            "Physical Interface",
            "Design Process",
            "Modeling",
            "Electronics",
        ].map((name, i)=> <Project key={i} name={name}/> );

        const Images =[
            "./media/img/garden/1.png",
            "./media/img/garden/interface-1.png",
            "./media/img/garden/DSC_0385-2.jpg",
            "./media/img/garden/DSC_0355-2.jpg",
            "./media/img/garden/DSC_0353-2.jpg",
            "./media/img/garden/DSC_0365-2.jpg",
            "./media/img/garden/howworks.gif",
            "./media/img/garden/individual_plant.png",
            "./media/img/garden/one_unit_breakdown.png",
            "./media/img/garden/One_unit_connection_topbottom.png",
            "./media/img/garden/final1.jpg",

            "./media/img/garden/final2.jpg",
            "./media/img/garden/final3.jpg",
            "./media/img/garden/final4.jpg",
            "./media/img/garden/3dblack.png",
            "./media/img/garden/2929.png",
            "./media/img/garden/model1.png",
            "./media/img/garden/model2.png",
            "./media/img/garden/model3.png",
        ]
        const Contents = [

            "As the digital invasion penetrates into people’s daily life, environmental health has become a critical concern for today’s shrinking living space and heavy urbanization (Dunnett, 2004). ",

            "The Modular Vertical Garden is a digital and ‘smart’ system that I designed to ease the pain points of maintaining a vertical garden. The modularity allows users to have a garden as big or as small as he/she likes, flexible to the constraints of physical space and personal preference. ",
            //problem
            "Vertical gardens (green wall) are great resource for home use. However, the cost of design, construction and maintenance are factors that hinder the development of vertical garden into different architectural types and expanding into multiple user segments. Because of this, home gardening is still at a lagging stage within the rapid development of digital media.",
            //solution
            "The modular garden allows users to have a garden as big or as small as he/she likes, flexible to the constraints of physical space and personal preference. It talks to the web, allowing the user to observe and control the vegetation right off of their computer or smartphone device. This project benefits apartment/condo dwellers and people who have limited physical space time and efforts. ",

            "For ever garden, there is a central unit where power source and internet modules are stored. When additinal unit connects to the central unit, Data is transfered. Whenever the customer introduced a new plant or member to the “family”, the transmitter will send the basic information to the app, thus updated in the interface. ",

            "The digital interface is simple and minimal. it has two main pages: one that displays the garden's overall condition; and another one display each plant individual status.",

            "Part of the project components were 3D printed. For example, the water tube connectors. The bottom part container is laser cutted, and the top part container is made of foam board covered with water-proof spray.",
        ].map((info, i)=> <Project keys={i} info={info}/> );

        return (
            <div className ="flex-box">
                <div className="project-page-single center-align border-right">
                    <Project ProjectName={ProjectName} />
                    {Tagline}
                    <i>{Contents[0]}</i>
                    {Contents[1]}
                     <img src ={Images[0]}/>
                     <p><b>Supervisors: </b>Steve Daniels, Micheal Carter</p>
             </div>

             <div className="project-page-single">
                    {Titles[0]}
                    {Contents[2]}
                    {Titles[1]}
                    {Contents[3]}
                     <b> The components of the project include: </b>
                     <p></p>
                     <p><b>Software</b> - digital interface that display the status of the plants </p>
                      <p><b>Hardware</b> - individual units each contain one plant & corresponding water system. </p>
                     <ul>
                         <li>Arduino Uno & Leonardo & Ethernet Shield</li>
                         <li>Moisture, Temperature, Humidity and Air Quality sensors</li>
                         <li>110V Aquarium Pump & Relays</li>
                         <li>Plastic and Permisive pipes</li>
                         <li>other Electronic Accessories</li>
                     </ul>
             </div>

              <div className="project-page-img">
                  <div className="ImgStyle1">
                  <div className="image-up">
                      <p>Units emsembled</p>
                      <img src ={Images[2]}/>
                 </div>
                 <div className ="image-row">
                        <p>Individual Units </p>
                      <img src ={Images[3]}/><img src ={Images[4]}/><img src ={Images[5]}/>
                     </div>
                 </div>
                 </div>

                <div className = "project-page-img addborder">
                    <p></p>
                    <b>The digital Interface </b>
                    {Contents [5]}
                    <img src = {Images[1]} />
                    <p></p>
                </div>

                <div className = "project-page-img">
                    <b>How it Works</b><p></p>
                    <img src = {Images[6]} />
                    {Contents [4]}
                </div>

                <div className = "project-page-img addborder">
                    {Titles[4]}
                    <table className="table64 wow animated fadeInRight"><tbody>
                        <tr>
                            <td><img src = {Images[7]} /></td>
                            <td>One Unit and Multi-units connection desing.</td>
                        </tr>
                        <tr>
                            <td><img src = {Images[8]} /></td>
                            <td>Each unit is divided into two parts. The top part contains the plant and the bottom halp holds the electronics.</td>
                        </tr>
                        <tr>
                            <td><img src = {Images[9]} /></td>
                            <td>Bottom design for each unit.</td>
                        </tr>
                    </tbody></table>
                <p></p>
                </div>

                <div className = "project-page-img">
                    {Titles[5]}
                    <img src = {Images[14]} />
                    {Contents [6]}
                    <img src = {Images[15]} />
                </div>

                <div className = "project-page-img border-right">
                    <p><b>Modeling - Final Revision</b></p>
                    <table className="table64 wow animated fadeInRight"><tbody>
                        <tr>
                            <td><img src = {Images[18]} /></td>
                            <td><p><b>Electronics Container</b></p>
                            <p>The Bottom part contains all the electronics as well as the pipe that trasfer water. Instead of 3D print, this part is been laser cut (see the 3rd image)</p>
                            </td>
                        </tr>
                        <tr>
                            <td><img src = {Images[17]} /></td>
                            <td><p><b>Water Connector</b></p>
                            <p>The water connection units go inside the electronics container. Plastic Pipes are insertd from the central unit to the other three.</p>
                            </td>
                        </tr>
                        <tr>
                            <td><img src = {Images[16]} /></td>
                            <td><p><b>Laser cut diagram for container</b></p>
                            <p>Due to the size of each planter, I choose to laser cut the container. There are 8 .125 inch layers in total. they are layed on top of each other.</p>
                            </td>
                        </tr>
                    </tbody></table>
                </div>

                <div className = "project-page-img border-right">
                    {Titles [6]}
                    <div className="image-row">
                        <img src = {Images[10]} />
                        <img src = {Images[11]} />
                    </div>
                    {Contents [4]}
                    <div className="image-row">
                        <img src = {Images[12]} />
                        <img src = {Images[13]} />
                    </div>
                </div>
            </div>

        )
    }
});

module.exports = Project2;
