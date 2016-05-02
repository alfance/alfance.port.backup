var React = require('react');
import Project from "./Project";

var Project3 = React.createClass({
    render() {
        const ProjectName = "GameOn";
        const Tagline ="Re-Invent Sports";

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
            "./media/img/gameon/1.png",
            "./media/img/gameon/apple-touch-startup-image01.png",
            "./media/img/gameon/ar-202.png",
            "./media/img/gameon/ar-303.png",
            "./media/img/gameon/game_mockup_mine07.png",
            "./media/img/gameon/game_mockup-0714.png",
            "./media/img/gameon/game_mockup-0916.png",
        ]
        const Contents = [

            "GAMEON provides a new way for stadium goers to experience the game, engages those at the stadium and incites the stay home fans to come to the stadium.",

            "Real Time Sports Fan Engagement - GameOn is an immersive companion app for hard-core fans and pleasure goers alike.",
            //problem
            "Stadium fans loose out on the experience that stay home fans have Fans needs more than halftime shows to engage themselves at the venue and come backn In person experience does not match fans’ consumption habits",
            //solution
            "PWC research suggests that CAGR for the sports market to go from $56.9 billion to $70.7 billion just in North America. In this 8% of it is expected to be in sponsorship and gate revenues. The aim is to not only Lapsed Season Holders but also groups and Corporate tickets. Many sports fans we talked about are very interested in such a Technology and were our inspiration behind this. ",

            "Hi-Fidelity Mockup",

            "Future Development",
        ].map((info, i)=> <Project keys={i} info={info}/> );

        return (
            <div className ="flex-box">
                <div className="project-page-single center-align">
                    <h1> {ProjectName}</h1>
                    <h4>{Tagline}</h4>
                     <p>{Contents[0]}</p>
                     <p>{Contents[1]}</p>
                     <img src ={Images[0]}/>

             </div>
             <div className="project-page-single">
                     <h4>{Titles[0]}</h4>
                     <p>{Contents[2]}</p>
                     <h4>{Titles[1]}</h4>
                     <p>{Contents[3]}</p>

             </div>
             <div className="ImgStyle2">
                 <p>High Fidelity Mobile Mockup</p>
                 <div className="image-row">
                     <img src ={Images[1]} />
                     <img src ={Images[2]} />
                     <img src ={Images[3]} />
                 </div>
                 <div className="image-row">
                     <img src ={Images[4]} />
                     <img src ={Images[5]} />
                     <img src ={Images[6]} />
                 </div>
             </div>
            </div>
        )
    }
});

module.exports = Project3;
