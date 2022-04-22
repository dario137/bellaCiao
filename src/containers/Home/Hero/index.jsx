import Selector from "../Selector";
import Fade from "react-reveal"

const HeroContainer = () => {

  return (
<content>
    <div className="wrapperbg" >
   
        <div className="welcome-content">
        <Fade cascade delay={5000}>
        <ul> 
          <l className="welcome-text">
            The blockchain brought revolution
            to the trading  card industry.
          </l>
       
          </ul>
        
          <ul></ul>
          <l>
          <a href="#"><span>""</span></a>
          </l>
          <ul></ul>
        
          <ul>
          <l className="welcome-text delayed">
            The old guard wasn’t ready.
          </l></ul>
         
          <ul></ul>
         
         <ul>
          <l className="welcome-text last">Help is on the way.
          </l>
          </ul>
          
          </Fade>
         
        </div>
      
</div>
 
<div>

      <section className="welcome-content">
        <Selector />
      </section>
    </div>
</content>








  );
};

export default HeroContainer;
