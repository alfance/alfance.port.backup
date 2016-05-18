var React = require('react');
var Slider = require('react-slick');
import Project from "./Project";

var Project5 = React.createClass({
    render() {
        var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
        const ProjectName = "Physical Computing";
        const Tagline ="A collection of my electronic works";

        const Titles = [
            "City Beat",
            "City Beat - Development",
            "PlantBot",
            "Physical Interface",
            "WireFrame",
            "Hi-Fidelity Mockup",
            "Future Development",
        ].map((name, i)=> <Project key={i} name={name}/> );

        const Images =[
            "./media/img/hacktalk/1.png",
            "./media/img/hacktalk/0016.jpg",
            "./media/img/hacktalk/0009.jpg",
            "./media/img/hacktalk/0010.jpg",
            "./media/img/hacktalk/DSC_0334.png",
            "./media/img/hacktalk/0005.jpg",
            "./media/img/hacktalk/DSC_0323.jpg",
            "./media/img/hacktalk/DSC_0327.jpg",
            "./media/img/hacktalk/DSC_0279.jpg",
            "./media/img/hacktalk/DSC_0281.jpg",
            "./media/img/hacktalk/DSC_0271.jpg",

            "./media/img/hacktalk/DSC_0294.jpg",
            "./media/img/hacktalk/DSC_0314.jpg",
            "./media/img/hacktalk/plant6.png",
            "./media/img/hacktalk/plant2.jpg",
            "./media/img/hacktalk/plant1.jpg",
            "./media/img/hacktalk/plant4.jpg",
            "./media/img/hacktalk/plant3.jpg",
        ]
        const Contents = [

            "This section showcases some of my physical computing projects. ",

            "I was first introduced to physical computing early 2015, and soon became fascinated by the electronic world. I realized that it adopts the same development process just like the design methodoloty I used to do for years, but with a tangible outcome. I am still a rookie in physical computing, this section will be updated regularly hopefuly with more and hopfully better projects.",
            //problem
            "CityBeat is a interactive dress with colour changing LEDs. It is responsive to the Open source data of Toronto, the colours changes according to the municipality's current traffic. The purpose of the project is to bring interactivity to your clothing, as well as conneting your city's cuture via the fashion.",

            "I worked mainly on the physical wiring between the arduinos and the LEDs. In addition, sewing the dress together.",
            //solution
            "PlantBot is a IOT (Internet of Things) project developed for the Intel IOT Roadshow 2015. Plantbot features a automatic watering system using the Intel Edison SDK, IBM Bluemix and various phy components such as Temp, Moisture & light sensors, LCD and pump.",
            "My role is to construct the physical interface of the project.",

            "Hi-Fidelity Mockup",

            "Future Development",
        ].map((info, i)=> <Project keys={i} info={info}/> );

        return (
            <div className ="flex-box">
                <div className="project-page-single center-align">
                    <h1> {ProjectName}</h1>
                    {Tagline}
                    {Contents[0]}
                    {Contents[1]}
                     <img src ={Images[12]}/>

             </div>
             <div className="project-page-img box-size-50 addborder">
                 {Titles[0]}
                 <p><b>hack n Talk hackthon 2015</b></p>
                 {Contents[2]}
                 <table><tbody>
                     <tr>
                     <td>
                         <Slider {...settings}>
                                 <div><h3><img src={Images[1]} /></h3></div>
                                 <div><h3><img src={Images[2]} /></h3></div>
                                 <div><h3><img src={Images[3]} /></h3></div>
                                 <div><h3><img src={Images[4]} /></h3></div>
                                 <div><h3><img src={Images[5]} /></h3></div>
                               </Slider>
                     </td>
                     <td className="td-sizing">
                   {Contents[2]}
                   {Contents[3]}
                   <p><b>Collaborators: </b>Danning Luu, Shamraiz Gul, Fernando Toro, Kylo Xue</p>
                   <p><b>Technologies: </b>Arduino, Processing, LEDs, XML, fiber-optic threads</p>
                   </td>
               </tr>
                 </tbody></table>
             </div>

             <div className="project-page-img">
                 {Titles[1]}
                  <table><tbody className="center-align">
                      <tr>
                          <td><img src = {Images[6]} /></td>
                           <td><img src = {Images[7]} /></td>
                          <td><p>Dress Design
                            <b> & </b>
                              Toronto City map</p>
                          </td>
                      </tr>
                      <tr>
                          <td><img src = {Images[8]} /></td>
                           <td><img src = {Images[9]} /></td>
                          <td><p>parse the XML file to processing
                             <b> & </b>
                             Soldering fiber-optic thread onto LED</p>
                          </td>
                      </tr>
                      <tr>
                          <td><img src = {Images[10]} /></td>
                           <td><img src = {Images[11]} /></td>
                          <td><p>The initial cloth
                             <b> & </b>
                             Dress almost complete!</p>
                          </td>
                      </tr>
                  </tbody></table>
                </div>

                <div className="project-page-img box-size-50 addborder">
                    {Titles[2]}
                    <p><b>Intel IOT Roadshow 2015</b></p>
                      {Contents[4]}
                      {Contents[5]}
                            <Slider {...settings}>
                                    <div><h3><img src={Images[13]} /></h3></div>
                                    <div><h3><img src={Images[14]} /></h3></div>
                                    <div><h3><img src={Images[15]} /></h3></div>
                                    <div><h3><img src={Images[16]} /></h3></div>
                                    <div><h3><img src={Images[17]} /></h3></div>
                                  </Slider>

                      <p><b>Collaborators: </b>Danning Luu, Yohan Guan, Kylo Xue</p>
                      <p><b>Technologies: </b>Intel edison, IBM Bluemix, sensors & motors </p>
                </div>

            </div>
        )
    }
});

module.exports = Project5;
