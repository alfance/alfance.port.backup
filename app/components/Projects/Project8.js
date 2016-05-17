var React = require('react');
import Project from "./Project";

var Project8 = React.createClass({
    render() {
        const ProjectName = "Shopsys's Deli Menu Design";
        const Tagline ="";

        const Titles = [
            "Logo",
            "Solution",
            "Digital Interface",
            "Physical Interface",
            "WireFrame",
            "Hi-Fidelity Mockup",
            "Future Development",
        ].map((name, i)=> <Project key={i} name={name}/> );

        const Images =[
            "./media/img/shopsys/2.png",
            "./media/img/shopsys/001.png",
            "./media/img/shopsys/02.png",
            "./media/img/shopsys/01.png",
            "./media/img/shopsys/03.png",
            "./media/img/shopsys/04.png",
            "./media/img/shopsys/logo1.svg",
            "./media/img/shopsys/logo2.svg",
            "./media/img/shopsys/logo3.svg",
            "./media/img/shopsys/logo4.svg",
        ]
        const Contents = [

            "Shopsys is a restaurant chain that serves deli sandwiches across Toronto. Started as a ice cream parlour in the 1920s, Shopsys' main dishes including hot dogs, pastrami, Corned beef, salami etc. ",

            "The Shopsys Deli BBQ menu focuses on the restaurant's new Summer hits. Considering the restaurant's homie style, I approach this project with such a relax, warm theme that suits their brand image.",
            //problem
            "In addition to the Shopsys's original logo, I need to create a secondary logo that will only be used for Deli BBQ menus. Specifily asking to have fork, knife and crown as the elements I had came up with several variations.",
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
                    {Contents[0]}
                     {Contents[1]}
                     <img src ={Images[0]}/>
                    <p>Click <a href="http://d.irishembassygroup.com/ShopsysCateringBBQMenus-72DPI.pdf" target="_blank">HERE</a> to see the full menu</p>
             </div>

             <div className="project-page-img">
                 {Titles[0]}
                  {Contents[2]}
                 <img src ={Images[6]}/>
                 <div className="image-row">
                     <img src ={Images[7]}/>
                     <img src ={Images[8]}/>
                     <img src ={Images[9]}/>
                 </div>
             </div>

              <div className="project-page-img box-size-80">
                  <img src ={Images[1]}/>
              </div>

            <div className="project-page-img box-size-80">
                <img src ={Images[2]}/>
             </div>

             <div className="project-page-img box-size-80">
                 <img src ={Images[3]}/>
             </div>

             <div className="project-page-img box-size-80">
                 <img src ={Images[4]}/>
             </div>
             <div className="project-page-img">
                 <img src ={Images[5]}/>
             </div>
          </div>
        )
    }
});

module.exports = Project8;
