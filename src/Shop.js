//import 'semantic-ui-css/semantic.min.css'
import React from "react";
import './App.css';
import EmbedExampleYouTube from './EmbedExampleYouTube';

import Menu2 from './Menu2';




//Import web





function Shop() {
// eslint-disable-next-line
  //var [openModal] = React.useState(false);


  //console.log("modal state", openModal);
  
  return (
<div>
      <div className="App-izq">
                <Menu2/>
      </div>
      <div>
        

            <div className="App-EM">
            <h1>
                    Shop Page
            </h1>
              <EmbedExampleYouTube/>
            
            </div>  
      </div>
</div>
    
  );
}

export default Shop;

