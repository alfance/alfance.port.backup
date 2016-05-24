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
            "Replays",
            "Interactivity",
            "Logo",
            "Game",
            "Flow Chart",
            "Process",
        ].map((name, i)=> <Project key={i} name={name}/> );

        const Images =[
            "./media/img/gameon/gameon1.png",
            "./media/img/gameon/mockup.png",
            "./media/img/gameon/ar-1-p02.png",
            "./media/img/gameon/ar-2-p03.png",
            "./media/img/gameon/ar-3-p04.png",
            "./media/img/gameon/ar-4-p05.png",
            "./media/img/gameon/ar-5-p06.png",
            "./media/img/gameon/gameon-home.png",
            "./media/img/gameon/2305.jpg",
            "./media/img/gameon/logo.png",
            "./media/img/gameon/logofinal.png",

            "./media/img/gameon/logosketch.png",
            "./media/img/gameon/replay1.png",
            "./media/img/gameon/replay2.png",
            "./media/img/gameon/replay3.png",
            "./media/img/gameon/strategy_board-05.png",
            "./media/img/gameon/game.png",
            "./media/img/gameon/flowchart1.png",
        ]
        const Contents = [

            "GAMEON provides a new way for stadium goers to experience the game, engages those at the stadium and incites the stay home fans to come to the stadium.",

            "Real Time Sports Fan Engagement - GameOn is an immersive companion app for hard-core fans and pleasure goers alike.",
            //problem
            "Stadium fans loose out on the experience that stay home fans have. Fans needs more than halftime shows to engage themselves at the venue and come back. In person experience does not match fans’ consumption habits",
            //solution
            "PWC research suggests that CAGR for the sports market to go from $56.9 billion to $70.7 billion just in North America. In this 8% of it is expected to be in sponsorship and gate revenues. The aim is to not only Lapsed Season Holders but also groups and Corporate tickets. Many sports fans we talked about are very interested in such a Technology and were our inspiration behind this. ",

            "GameOn allows the onsite sports fans to engage with their team and game, giving them an unique experence and sense of unity. It encourages more fans to come in person for the experience they cannot have by watching TV at home.",

            "The concept for the logo is to be playful and game-like. We all agree on taking inspiration from strategy board and play button to represent the nature of the app. Many of our ideas were seen in the early design.",

            "Fans can support their teams by competing in the 'Fan vs Fan' social game. By uploading a photo showing the team they are rooting, GameOn will count the number of supporters for each team and upload their photos to the social media site. The team with the most photos wins",

            "One of the engaging features GameOn offers is the ability to let fans doing realtime interactions on the replays. You can tap on the player to get a detailed status of him. You can also make your own strategies and share them using the VR strategy board.",

            "The GameOn is a Hackthon project we managed to finish within 2days. We started off as a simple statium replay app and expand its features to immersive fans engagement. ",

            "My job for this project is early user research, Logo design and UI design. ",
        ].map((info, i)=> <Project keys={i} info={info}/> );

        return (
            <div className ="flex-box">
                <div className="project-page-single center-align border-right">
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
                    <YouTube className="imageW90"
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

             <div className="project-page-single border-right">
                 <img className="imageW70" src = {Images[7]} />
                 <p>GameOn offers 4 main features. </p>
                 <ul>
                     <li>replays you can choose from all the camera angles</li>
                     <li>Most popular and fan choose high lights</li>
                     <li>Fan engagement games to boost the spirit</li>
                     <li>Realtime AR strategy board</li>
                 </ul>
             </div>

             <div className="project-page-img">
                 {Titles[3]}
                 <table><tbody>
                     <tr>
                         <td>My favourite replays</td>
                         <td>Most recent replays</td>
                         <td>Most popular replays</td>
                     </tr>
                     <tr>
                         <td><img src = {Images[12]} /></td>
                         <td><img src = {Images[13]} /></td>
                         <td><img src = {Images[14]} /></td>
                     </tr>
                 </tbody></table>
             </div>

             <div className="project-page-img">
                {Titles[4]}
                {Contents[7]}
                 <table><tbody>
                     <tr>
                         <td><img src = {Images[3]} /></td>
                         <td>Watch the replay video</td>
                     </tr>
                     <tr>
                         <td><img src = {Images[4]} /></td>
                         <td>Tap on the player to checkout his/her status and information</td>
                     </tr>
                     <tr>
                         <td><img src = {Images[15]} /></td>
                         <td>AR strategy board let you become the coach</td>
                     </tr>
                 </tbody></table>
             </div>

             <div className="project-page-img border-right" >
                 {Titles[6]}
                  <img src ={Images[16]} />
                 {Contents[6]}
             </div>

             <div className="project-page-single" >
                 {Titles[8]}
                 {Contents[8]}
                 {Contents[9]}
                  <p>Checkout the App <a href ="https://invis.io/AM6C7BW23" target="_blank">HERE</a></p>
             </div>

              <div className="project-page-img border-left">
              {Titles[5]}
              <div className="image-row">
                  <img src ={Images[8]} />
                  <img src ={Images[9]} />
                  <img src ={Images[10]} />
              </div>
               {Contents[5]}
                    <img src ={Images[11]} />
              </div>

              <div className="project-page-img box-size-80" >
                  {Titles[7]}
                   <img src ={Images[17]} />
              </div>

            </div>
        )
    }
});

module.exports = Project3;
