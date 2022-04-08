import React from 'react';
import './home.css'; 

class HomePage extends React.Component {
    render() {
        return (
            <div className = "Home">
                <img src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/11170746/fdfa47d494b75bd5979742522aa4a07babb7a6cf.png" height="170" class="center"></img>
                <p style={{ color: 'white' }} class="normalinf" >
                You've inherited your grandfather's old farm plot in Stardew Valley. <br></br>
                Armed with hand-me-down tools and a few coins, you set out to begin your new life.<br></br>
                Can you learn to live off the land and turn these overgrown fields into a thriving home? <br></br>

                <h3>It won't be easy.  </h3>

                    <p class="normalinf">
                    Ever since Joja Corporation came to town, the old ways of life have all but disappeared. <br></br>
                    The community center, once the town's most vibrant hub of activity, now lies in shambles. <br></br>
                    But the valley seems full of opportunity. <br></br>

                    <h3>With a little dedication, you might just be the one to restore Stardew Valley to greatness!</h3><br></br>
                    </p>

                </p> 
                
                <h1></h1>

                <article class="container">

                <a href="/bundle" class="kinda-link">
                    <img src="https://stardewvalleywiki.com/mediawiki/images/b/b8/Golden_Scroll.png" class="pic "></img>
                    <h2 class="text-center">Bundle</h2> 
                </a>

                <a href="/npc" class="kinda-link">
                    <img src="https://stardewvalleywiki.com/mediawiki/images/2/2a/Sebastian_Smile.png" class="pic "></img>
                    <h2 class="text-center">Character</h2>
                </a>

                <a href="/map" class="kinda-link">
                    <img src="https://stardewvalleywiki.com/mediawiki/images/7/76/World_Map.png" class="pic"></img>
                    <h2 class="text-center">Map</h2> 
                </a>

                <a href="/skill" class="kinda-link">
                    <img src="https://stardewvalleywiki.com/mediawiki/images/2/2f/Mining_Skill_Icon.png" class="pic "></img>
                    <h2 class="text-center">Skill</h2> 
                </a>

                </article>

                <br></br><h1></h1> <br></br>

                <a href="/developer" class="kinda-link Dev">
                <img src="https://stardewvalleywiki.com/mediawiki/images/0/05/Developed_By_Image.gif" class="center" height="185px"></img><br></br>
                <h2 class="text-center">Developer</h2>
                </a>
                
                <br></br> <h1></h1> <br></br>

                <a href="/member" class="kinda-link">
                <img src="https://raw.githubusercontent.com/sameer-patel-dev/sameer-patel-dev/main/code.gif" class="center" height="270" ></img><br></br>
                <h2 class="text-center">Member</h2><br></br>
                </a>

            </div>
        );
    }
}

export default HomePage;

