var React = require('react');
import Project from "./Project";

var Project4 = React.createClass({
    render() {
        const ProjectName = "DEMHUB";
        const Tagline ="The Disaster and Emergency Management Network";

        const Titles = [
            "Problem",
            "Solution",
            "Main Page",
            "Newsfeeds",
            "Connection",
            "Colour code",
            "Events by Geolocation",
            "User Dashboard",
            "Process",
            "WireFrame",
            "Iteration",
        ].map((name, i)=> <Project key={i} name={name}/> );

        const Images =[
            "./media/img/demhub/1.png",
            "./media/img/demhub/DEMHUB-main.png",
            "./media/img/demhub/newsfeed-01.png",
            "./media/img/demhub/newsfeedcs6-05.png",
            "./media/img/demhub/DSC_0353-2.jpg",
            "./media/img/demhub/DSC_0365-2.jpg",
            "./media/img/demhub/connections-02.png",
            "./media/img/demhub/connections-03.png",
            "./media/img/demhub/connections-01.png",
            "./media/img/demhub/icon-dem1.svg",
            "./media/img/demhub/icon-dem2.svg",

            "./media/img/demhub/icon-dem3.svg",
            "./media/img/demhub/icon-dem4.svg",
            "./media/img/demhub/icon-dem5.svg",
            "./media/img/demhub/icon-dem6.svg",
            "./media/img/demhub/mainpagecs6-02.png",
            "./media/img/demhub/user-dashboard-01.png",
            "./media/img/demhub/user-dashboard-02.png",
            "./media/img/demhub/user-dashboard-03.png",
            "./media/img/demhub/IMG_3213.png",
            "./media/img/demhub/IMG_3215.png",
            "./media/img/demhub/0487.jpg",
        ]
        const Contents = [

            "DEMHUB is the vertical professional network for the disaster and emergency management industry that provides tools for daily use such as newsfeeds, discussion boards, and search features along with premium tools that allow global collaboration directed at mitigating and planning for disaster response. ",
            //problem
            "Presently, there are too few resources that effectively address the issues around networking, collaboration, and information sharing in the disaster and emergency management industry.",
            //solution
            "DEMHUB is creating a expansive professional network that acts as a centralized access point for all digital resources in the DEM industry while providing tools for users that enhance performance and exposure for emergency management specialists and researchers.",

            "DEMHUB makes it easy for disaster and emergency management professionals to find information that keeps them informed while offering them the opportunity to share their knowledge and experience.",

            "The newsfeed page is the major component of DEMHUB. It keeps the users updated worldwide. The box layout maximize the amount of information that can be feed into one page while not overwhelming the eyes.",

            "Connection is another main service offered by DEMHUB. It adapts a similar design as other networking platform. In addition, the connection and newsfeeds are highly interactive with each other. Users will find social media features on their newsfeeds while sharing their discovery to their network group.",

            "The field of Disaster and Emergency management has various sectors. Each of the sectors is not enclusive. One challenge we face is to create an intuitive platform for people to navigate between the sectors. The colour code system is used throughout the site, creating a visual sensory cue for people to quickly grasp the type of the contents.",

            "My primary duty for the DUMHUB project is User experience, interaction and flow design. I also assited in front-end development of the website. The following diagram illustrates first time user flow thoughout DEMHUB main pages. Many iterations were made afterwards and are showing on the right."
        ].map((info, i)=> <Project keys={i} info={info}/> );

        return (
            <div className ="flex-box">
                <div className="project-page-single center-align">
                    <Project ProjectName={ProjectName} />
                    {Tagline}
                    {Contents[0]}
                     <img src ={Images[0]}/>
                     <p><b>Job Role:</b> UI/UX Designer, Assistant Front-end development </p>
                     <p><b>Hardware:</b> Adobe PS, AI, Balsamiq, Invision, Laravel, Vigrant </p>
             </div>

             <div className="project-page-single">
                    {Titles[0]}
                  <p><i>“There is a dire need for a framework to enable collaborative information gathering and validation...to ensure measurable risk factors and outcomes.”</i></p>
                    <p>       - 2014 Public Safety Canada</p>
                     {Contents[1]}
                     {Titles[1]}
                    {Contents[2]}
                    <a href="http://demhub.net/" target="_blank">Visit the Site</a> <p></p>
             </div>

             <div className="project-page-single">
                     {Titles[5]}
                     {Contents[6]}
                     <table className="addborder center-align custom-table"><tbody>
                         <tr><td><b>Icon</b></td>
                             <td><b>Division</b></td>
                             <td><b>Colour</b></td></tr>
                        <tr><td><img src ={Images[9]} /></td> <td>health & Epidermics</td> <td>#0A8D56</td></tr>
                        <tr><td><img src ={Images[10]} /></td> <td>Science & Environmental</td> <td>#2173A2</td></tr>
                        <tr><td><img src ={Images[11]} /></td> <td>EM Practitioner & Response</td> <td>#DB9528</td></tr>
                        <tr><td><img src ={Images[12]} /></td> <td>Civil & Cyber Security</td> <td>#838788</td></tr>
                        <tr><td><img src ={Images[13]} /></td> <td>Business Continuity</td> <td>#933132</td></tr>
                        <tr><td><img src ={Images[14]} /></td> <td>NGO & Humanitarian</td> <td>#774393</td></tr>
                     </tbody></table>
             </div>

              <div className="project-page-img">
                  {Titles[2]}
                      <table><tbody>
                          <tr>
                          <td>
                          <img src = {Images[1]} />
                          </td>
                          <td className="td-sizing">
                        {Contents[3]}
                        </td>
                    </tr>
                      </tbody></table>
                 </div>

                 <div className="project-page-img">
                     {Titles[3]}
                         <table><tbody>
                             <tr>
                             <td><b>Division Page</b></td>
                             <td><b>Main Newsfeeds</b></td>
                             </tr>
                             <tr>
                            <td><img src = {Images[2]} /> </td>
                             <td className="addborder td-padding">
                                <img src = {Images[3]} />
                                {Contents[4]}
                             </td>
                             </tr>
                         </tbody></table>
                    </div>

                    <div className="project-page-img box-size-60">
                        {Titles[4]}
                        {Contents[5]}
                        <br></br>
                        <div className="image-row">
                            <img src ={Images[6]} />
                            <img src ={Images[7]} />
                            <img src ={Images[8]} />
                        </div>
                    </div>

                    <div className="project-page-img">
                        {Titles[6]}
                        {Contents[7]}
                        <br></br>
                        <img src ={Images[15]} />
                    </div>

                    <div className="project-page-img addborder">
                       {Titles[7]}
                        <table className="table64"><tbody>
                            <tr>
                                <td><img src = {Images[16]} /></td>
                                <td>Home Dashboard has basic user info, connection activities and recent publications</td>
                            </tr>
                            <tr>
                                <td><img src = {Images[17]} /></td>
                                <td>Message system lets the user to communicate, share and reply. </td>
                            </tr>
                            <tr>
                                <td><img src = {Images[18]} /></td>
                                <td>Statistics display current and old user activity inforgraphics and analysis.</td>
                            </tr>
                        </tbody></table>
                    <p></p>
                    </div>

                    <div className="project-page-img">
                        {Titles[8]}
                        {Contents[7]}
                        <img src ={Images[19]} />

                    </div>

                    <div className="project-page-img box-size-50">
                        {Titles[9]}
                        User Dashbord Design Iteration
                        <table><tbody className="center-align">
                            <tr>
                            <td>Initial design</td>
                            <td>Iteration to box layout</td>
                            </tr>
                            <tr>
                           <td><img src = {Images[20]} /> </td>
                            <td>
                               <img src = {Images[21]} />
                            </td>
                            </tr>
                        </tbody></table>
                    </div>
            </div>
        )
    }
});

module.exports = Project4;
