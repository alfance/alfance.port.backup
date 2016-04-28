import React from "react";

export default class HomeProject extends React.Component {
    render() {
        const Titles = [
            "Cycnav",
            "Personal Vertical Garden",
            "GameON",
            "DME Avatars",
            "Hack&Talk",
            "Shposys Menu",
            "Logos",
        ].map((name, i)=> <HomeProject key={i} name={name}/> );

        const Types = [
            "Mobile, Physical Computing, 3D Print",
            "Web App, Physical Computing",
            "Mobile",
            "Branding, Website, Illustration",
            "Fashion, PHysical Computing",
            "Print, Branding",
            "Logo Design, Branding",
        ]

        const Images =[
            "./media/img/1/1.JPG",
            "./media/img/2/1.Png",
            "",
        ]
        return (
            <div className="flex-box">
            <div className="image-grid-each">
             <img className="image-grid-image" src="media/img/1/1.jpg"/>
           </div>
           <div className="image-grid-each">
            <img className="image-grid-image" src="media/img/2/1.png"/>
          </div>
          <div className="image-grid-each">
           <img className="image-grid-image" src="media/img/2/1.png"/>
         </div>
            </div>
        )
    }
}
