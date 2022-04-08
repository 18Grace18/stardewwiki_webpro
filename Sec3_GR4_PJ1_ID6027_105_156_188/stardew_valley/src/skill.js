import React from 'react';
import './info.css'; 

class Skill extends React.Component {
    render() {
        return (
            <div className = "Skill">
            <div class="infbody">

              <img src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/11170746/fdfa47d494b75bd5979742522aa4a07babb7a6cf.png" height="170" class="center"></img>
              <p class="normalinf" > 

                  Skills are player attributes which are leveled up through the use of specific tools or actions. Each skill has ten levels. <br></br>
                  A skill level increase is awarded immediately upon earning enough experience points for a new level, and is immediately displayed on the skills tab of the inventory. The new skill level immediately increases the proficiency of the tool(s) associated with that skill.<br></br><br></br>

                  Overnight, after the player goes to bed on the day a skill level increases, a popup announces the increase, and additionally awards knowledge of any applicable crafting or cooking recipes. At level 5 and level 10, players also select which one of two available Professions to specialize in. Each profession has its own set of benefits, such as sell price bonuses for related items. It should be noted that awards of recipe knowledge or profession benefits do not take place until seen in the popup overnight, and are not available until the first thing the following morning. In particular, items sold or shipped the day of the skill level increase do not receive the new price bonuses. Like recipes, profession benefits are only available beginning the following day.<br></br><br></br>

                  All skills need the following experience points to increase skill level:<br></br><br></br>

                  Lvl	Experience	Total Experience<br></br><br></br>
                  1	100	100<br></br>
                  2	+280	380<br></br>
                  3	+390	770<br></br>
                  4	+530	1300<br></br>
                  5	+850	2150<br></br><br></br>
                  Lvl	Experience	Total Experience<br></br><br></br>
                  6	+1150	3300<br></br>
                  7	+1500	4800<br></br>
                  8	+2100	6900<br></br>
                  9	+3100	10000<br></br>
                  10	+5000	15000<br></br><br></br></p>

                  <img src="https://stardewcommunitywiki.com/mediawiki/images/2/29/Character_creation_menu.png" height="400" class="center"></img><br></br>
                
                <h1></h1>

                
              <article class="container">
                  <article class="column">
                      <section class="dummy_text" >
                          
                          <img src="https://stardewcommunitywiki.com/mediawiki/images/8/82/Farming_Skill_Icon.png" class="center" height="200"></img><br></br>
                          
                          <h3>Farming</h3> <br></br>
                          Farming skill is gained by harvesting crops. Caring for animals also adds experience: Petting, milking, and shearing farm animals or picking up an animal product inside a barn or coop each give 5 experience points. Using a hoe or watering can does not grant experience by itself. Each level grants +1 proficiency to hoes and watering cans.<br></br>
                          
                      </section>
                  </article>

                  <article class="column">
                      <section class="dummy_text">
                          
                          <img src="https://stardewcommunitywiki.com/mediawiki/images/2/2f/Mining_Skill_Icon.png" class="center" height="200"></img><br></br>
                          
                          <h3>Mining</h3> <br></br>
                          Mining skill is increased by breaking rocks. Each level adds +1 to Pickaxe proficiency. You are awarded mining skill points when rocks are destroyed -- it doesn't matter if this is done by Pickaxe, Bombs, or by the action of Monsters. <br></br>Different rock types give different numbers of experience points.<br></br>

                      </section>
                  </article>
              </article>

              <article class="container">
                  <article class="column">
                      <section class="dummy_text">
                          
                          <img src="https://stardewcommunitywiki.com/mediawiki/images/f/f1/Foraging_Skill_Icon.png" class="center" height="200"></img><br></br>
                          
                          <h3>Foraging</h3> <br></br>
                          Foraging skill is increased both by gathering forage items found on the ground throughout Stardew Valley and by chopping down Trees with an Axe. Each foraging skill level adds +1 axe proficiency.<br></br>

                      </section>
                  </article>

                  <article class="column">
                      <section class="dummy_text">
                          
                          <img src="https://stardewcommunitywiki.com/mediawiki/images/c/cf/Combat_Skill_Icon.png" class="center" height="200"></img><br></br>
                          
                          <h3>Combat</h3> <br></br>
                          Combat skill is increased by fighting monsters (from farm, cave, etc.). Some levels add to the player's total HP (health points), as shown by an increase in the health meter.<br></br>
                      
                      </section>
                  </article>
                
              </article>

              <article class="container">
                  <article class="column">
                      <section class="dummy_text">
                          
                          <img src="https://stardewcommunitywiki.com/mediawiki/images/e/e7/Fishing_Skill_Icon.png" class="center" height="200"></img><br></br>
                          
                          <h3>Fishing</h3> <br></br>
                          Fishing Skill is increased by catching Fish, Trash, Seaweed, Green Algae, or White Algae with a Fishing Rod/Pole or by harvesting Crab Pots.<br></br>

                          Each level grants +1 Fishing Rod Proficiency, increases the minimum fish size (in/cm) and bobber bar height, and decreases the max amount of time before fish bite. Fishing skill also increases the chance to find quality (silver or gold star) fish.<br></br>

                      </section>
                  </article>

              </article>
              <br></br><br></br>
                
              </div> 

            </div>
        );
    }
}

export default Skill;

