var React = require('react');
import Project from "./Project";
import YouTube from "../../../node_modules/react-youtube/dist/YouTube";

var Project3 = React.createClass({
    render() {
        const opts = {
         height: 'auto',
         width: 'auto',
           autoplay: 0
         }

        const ProjectName = "GameOn";
        const Tagline ="Re-Invent Sports";

        const Titles = [
            "Problem",
            "Market",
            "Inclusive Experience",
            "Digital Interface",
            "WireFrame",
            "Hi-Fidelity Mockup",
            "Future Development",
        ].map((name, i)=> <Project key={i} name={name}/> );

        const Images =[
            "./media/img/gameon/1.png",
            "./media/img/gameon/mockup.png",
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
            "Stadium fans loose out on the experience that stay home fans have. Fans needs more than halftime shows to engage themselves at the venue and come back. In person experience does not match fans’ consumption habits",
            //solution
            "PWC research suggests that CAGR for the sports market to go from $56.9 billion to $70.7 billion just in North America. In this 8% of it is expected to be in sponsorship and gate revenues. The aim is to not only Lapsed Season Holders but also groups and Corporate tickets. Many sports fans we talked about are very interested in such a Technology and were our inspiration behind this. ",

            "GameOn allows the onsite sports fans to engage with their team and game, giving them an unique experence and sense of unity. It encourages more fans to come in person to cheer up with their teams",

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
                     <p><b>Collaborators: </b>Danning Luu, Shamraiz Gul, Fernando Toro, Naomi Cowan Kylo Xue</p>
                     <p><b>Technologies: </b>Adobe PS, AI, AE, Balsamiq, Invision</p>
             </div>
             <div className="project-page-single">
                    {Titles[0]}
                    {Contents[2]}
                     {Titles[1]}
                    {Contents[3]}
                    <YouTube
                       videoId="5ugPo8z-5hM"
                       opts={opts}
                       onReady={this._onReady}
                     />
             </div>

             <div className="project-page-img addborder" >
                 {Titles[2]}
                 {Contents[4]}
                 <img src ={Images[1]} /><p><br></br></p>
             </div>

             <div className="project-page-img">
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
