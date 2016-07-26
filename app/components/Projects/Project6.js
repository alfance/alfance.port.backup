var React = require('react');
import Project from "./Project";

var Project6 = React.createClass({
    render() {
        const ProjectName = "dme Branding";
        const Tagline ="";

        const Titles = [
            "Problem",
            "Solution",
            "5 Characters",
            "Website",
            "Print Marketing",
            "Process",
            "Drafts",
        ].map((name, i)=> <Project key={i} name={name}/> );

        const Images =[
            "./media/img/dme/all1.png",
            "./media/img/dme/2.jpg",
            "./media/img/dme/PC_bw.png",
            "./media/img/dme/PCposter.png",
            "./media/img/dme/physical_computing.svg",
            "./media/img/dme/3d_print.svg",
            "./media/img/dme/graphic_design.svg",
            "./media/img/dme/videography.svg",
            "./media/img/dme/programming.svg",
            "./media/img/dme/web.png",
            "./media/img/dme/workshop.png",
            "./media/img/dme/others.png",

            "./media/img/dme/3D_poster.png",
            "./media/img/dme/pins.svg",
            "./media/img/dme/2862.jpg",
            "./media/img/dme/2952.jpg",
            "./media/img/dme/0480.jpg",
            "./media/img/dme/0481.jpg",
        ]
        const Contents = [

            "The Digital Media Experience Lab (dme) located in the Student Life Center of Ryerson University is a Library resource that supports curricula and extracurricular student learning. It focuses on helping students learning basic and advanced digital skill-set while exposing them to new and emerging techologies.",

            "This space provides high-end multimedia workstations, peer-mentoring and support, workshops and specialized equipments. People are able to use PC/MAC desktop & laptops, Oculus Rift, Aruidno, Little bits, 3D printer DSL cameras for their project or just for fun.",
            //problem
            "Eventhough the dme is open to every students and faculty of Ryerson, people without technological or digital background often find it daunting to come. The dme is misunderstood as engineering exclusive. A research we have conducted on the campus showed that, many non-tech students (Nursing, Arts, Community services etc) are not willing to use the dme because the technolgoies seem too professional.",
            "In addition, within the people who come to dme, there is a big ratio difference in genders. The gender ratio at Ryerson is 1:1 with slightly 300 more female students; However, the ratio of people who use dme resources are M 7 : F 3. This is mainly due to the stereotypical perception for technolgoies been dominanted by males.",
            //solution
            "First project I have been working to engage different user types for dme is the characters design. dme has 5 sub-divisions each acquires unique knowledges, equipments and technologies. My goal is to create approachable visual representations of the divisions, so people can find the new techs less distant and intimidating.",

            "The next objective for the dme branding is to integrate the characters in all dme marketing materials.",

            "The 5 divisions are Physical Computing, 3D Print, Visual Design, Videography and Programming. ",

            "The Workshop page is a convinient portal for students and faculty to search, filter and register for the upcoming events and workshops of dme. Connected to the Ryerson's google calender. People can directly add the event to their own calender.",

            "People can learn about dme, see the featured projects, get in contact with the team and request for 3D print or equipments. The dme website creates maximum convinience for people to do exactly the same thing as they come in person.",

            "In addition to the webiste, I have also managed to create multiple printed marketing materials for dme. For instances, posters, stand and stickers. The printed materials will be the major marketing tool spread out thoughout campus to promote the dme's new iamge.",

            "Following are some of the ideations and draft designs we have for the characters. this project had gone though series of iteration and it is still under development as of now.",
        ].map((info, i)=> <Project keys={i} info={info}/> );

        return (
            <div className ="flex-box">
                <div className="project-page-single center-align border-right">
                    <h1> {ProjectName}</h1>
                    {Contents[0]}
                     {Contents[1]}
                     <img src ={Images[0]}/>
                     <p><b>Technologies: </b>Adobe PS, AI, html5, CSS3, Jquery</p>
             </div>

             <div className="project-page-single">
                     {Titles[0]}
                     {Contents[2]}
                     {Contents[3]}
                     <img className="imageW80" src ={Images[1]}/>
             </div>

             <div className="project-page-img">
                 {Titles[1]}
                 <table><tbody>
                     <tr>
                         <td> {Contents[4]}</td>
                          <td>{Contents[5]}
                              <p>Click <a href="http://kyloxue.design/DMETheme/index.html" target="_blank">HERE</a> to see the website mockup</p>
                          </td>
                     </tr>
                     <tr>
                         <td><img src ={Images[2]}/></td>
                          <td><img src ={Images[3]}/></td>
                     </tr>
                 </tbody></table>
                </div>

              <div className="project-page-img box-size-60">
                  {Titles[2]}
                   {Contents[6]}
                        <table className="center-align tableborder"><tbody>
                            <tr>
                                <td>
                                    <i className="icon-pc icon-size-50 center-image"></i><br />
                                    <b> Physical Computing </b>
                                </td>
                                 <td><img src ={Images[4]}/></td>
                                 <td><p>Color - Turquoise</p>
                                <p>Internet of Things, Wearables, Robots, Drones, Sensors, Machine Automation</p>
                                 </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="icon-3d icon-size-50 center-image"></i><br />
                                    <b> 3D Print </b>
                                </td>
                                 <td><img src ={Images[5]}/></td>
                                 <td><p>Color - White</p>
                                <p>Modeling, MVP, Rapid Manufacturing, Massiv Customization</p>
                                 </td>
                            </tr>
                        </tbody></table>
                 </div>

                 <div className="project-page-img box-size-50 border-right">
                         <table className="center-align"><tbody>
                             <tr>
                                 <td>
                                     <i className="icon-gd icon-size-50 center-image"></i><br />
                                     <b> Graphic Design </b>
                                 </td>
                                  <td><img src ={Images[6]}/></td>
                                  <td><p>Color - ALl Colors!</p>
                                 <p>Raster, Victor, Robots, Colour Code, Illustration</p>
                                  </td>
                             </tr>
                             <tr>
                                 <td>
                                     <i className="icon-video icon-size-50 center-image"></i><br />
                                     <b> Videography </b>
                                 </td>
                                  <td><img src ={Images[7]}/></td>
                                  <td><p>Color - Pink</p>
                                 <p>Pixels, Wearables, Frames, Soundwaves, Filming, Keys</p>
                                  </td>
                             </tr>

                             <tr>
                                 <td>
                                     <i className="icon-code icon-size-50 center-image"></i><br />
                                     <b> Programming </b>
                                 </td>
                                  <td><img src ={Images[8]}/></td>
                                  <td><p>Color - Black</p>
                                 <p>Syntax, Debug, Development, Environment, Hacks, Open Source</p>
                                  </td>
                             </tr>
                         </tbody></table>
                 </div>
                 <div className="project-page-img">
                     {Titles[3]}
                     <a href="http://kyloxue.design/DMETheme/index.html" target="_blank"><b>Main Page</b></a>
                         <table><tbody>
                             <tr>
                             <td>
                             <img src = {Images[9]} />
                             </td>
                             <td className="td-sizing">
                           {Contents[7]}
                           </td>
                       </tr>
                         </tbody></table>
                    </div>

                <div className="project-page-img border-left">
                    <b>Workshops</b><br />
                     {Contents[7]}
                      <img src = {Images[10]} />
                </div>

                <div className="project-page-img box-size-60">
                        <table><tbody>
                            <tr>
                            <td className="td-sizing">
                                <b>Other Pages</b><br />
                                {Contents[8]}
                          </td>
                            <td>
                            <img src = {Images[11]} />
                            </td>
                      </tr>
                        </tbody></table>
                   </div>

                   <div className="project-page-img addborder">
                      {Titles[4]}
                        {Contents[9]}
                        <div className="image-row">
                         <img src = {Images[12]} />
                         <img src = {Images[13]} />
                         </div>
                   </div>
                   <div className="project-page-img">
                      {Titles[5]}
                        {Contents[10]}
                        <p>Click <a href="./media/img/dme/ThoughtDoc.pdf" target="_blank">HERE</a> to see the research I had done for the project </p>
                         <img src = {Images[14]} />
                   </div>

                   <div className="project-page-img">
                      {Titles[6]}
                         <img src = {Images[16]} />
                         <div className="image-row">
                             <img src = {Images[15]} />
                             <img src = {Images[17]} />
                         </div>
                   </div>
            </div>
        )
    }
});

module.exports = Project6;
