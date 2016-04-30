import React from "react";
import {Link} from "react-router";
import HomeProjectShow from "./HomeProjectShow";

export default class HomeProject extends React.Component {
    render() {
            const titles = [
                "Cycnav",
                "Personal Vertical Garden",
                "GameON",
                "DEMHUB",
                "Hack&Talk",
                "DME Avatars",
                "Logos",
                "Shopsys",
            ].map((name, i)=> <HomeProjectShow key={i} name={name}/> );

            const types = [
                "Mobile, Physical Computing, 3D Print",
                "Web App, Physical Computing",
                "Mobile",
                "Web App, Social Network",
                "Branding, Website, Illustration",
                "Fashion, PHysical Computing",
                "Logo Design, Branding",
                "Logo Branding",
            ].map((info, i)=> <HomeProjectShow keys={i} info={info}/> );

            const images =[
                "./media/img/cycnav/1.png",
                "./media/img/garden/1.png",
                "./media/img/gameon/1.Png",
                "./media/img/demhub/1.Png",
                "./media/img/hacktalk/1.Png",
                "./media/img/dme/1.Png",
                "./media/img/logo/1.Png",
                "./media/img/shopsys/1.Png",
            ]

        return (
            <div className="flex-box">
                <Link to="Project1"><div className="image-grid-each">
                 <img className="image-grid-image" src={images[0]}/>
               </div></Link>
           <Link to="Project2"> <div className="image-grid-each">
                <img className="image-grid-image" src={images[1]}/>
              </div></Link>
          <Link to="Project3"><div className="image-grid-each">
               <img className="image-grid-image" src={images[2]}/>
             </div></Link>
         <Link to="Project4"> <div className="image-grid-each">
              <img className="image-grid-image" src={images[3]}/>
                </div></Link>
            <Link to="Project5"><div className="image-grid-each">
                 <img className="image-grid-image" src={images[4]}/>
               </div></Link>
           <Link to="Project6"> <div className="image-grid-each">
                <img className="image-grid-image" src={images[5]}/>
              </div></Link>
          <Link to="Project7"> <div className="image-grid-each">
               <img className="image-grid-image" src={images[6]}/>
             </div></Link>
         <Link to="Project8"> <div className="image-grid-each">
              <img className="image-grid-image" src={images[7]}/>
        </div></Link>
            </div>
        )
    }
}
