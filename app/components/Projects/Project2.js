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
            "WireFrame",
            "Hi-Fidelity Mockup",
            "Future Development",
        ].map((name, i)=> <Project key={i} name={name}/> );

        const Images =[
            "./media/img/garden/1.png",
            "./media/img/garden/interface-1.png",
            "./media/img/garden/DSC_0385-2.jpg",
            "./media/img/garden/DSC_0355-2.jpg",
            "./media/img/garden/DSC_0353-2.jpg",
            "./media/img/garden/DSC_0365-2.jpg",
        ]
        const Contents = [

            "As the digital invasion penetrates into people’s daily life, environmental health has become a critical concern for today’s shrinking living space and heavy urbanization (Dunnett, 2004). ",

            "The Modular Vertical Garden is a digital and ‘smart’ system that eases the pain points of maintaining a vertical garden in small urban spaces. The modularity allows users to have a garden as big or as small as he/she likes, flexible to the constraints of physical space and personal preference. ",
            //problem
            "Vertical gardens (green wall) are great resource for home use. However, the cost of design, construction and maintenance are factors that hinder the development of vertical garden into different architectural types and expanding into multiple user segments. Because of this, home gardening is still at a lagging stage within the rapid development of digital media.",
            //solution
            "The modular garden allows users to have a garden as big or as small as he/she likes, flexible to the constraints of physical space and personal preference. It talks to the web, allowing the user to observe and control the vegetation right off of their computer or smartphone device. This project benefits apartment/condo dwellers and people who have limited physical space time and efforts. ",

            "Hi-Fidelity Mockup",

            "Future Development",
        ].map((info, i)=> <Project keys={i} info={info}/> );

        return (
            <div className ="flex-box">
                <div className="project-page-single center-align">
                    <Project ProjectName={ProjectName} />
                    {Tagline}
                    <i>{Contents[0]}</i>
                    {Contents[1]}
                     <img src ={Images[0]}/>
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

                <div className = "project-page-img">
                    <p>The digital Interface </p>
                    <img src = {Images[1]} />
                </div>
            </div>
            
        )
    }
});

module.exports = Project2;
