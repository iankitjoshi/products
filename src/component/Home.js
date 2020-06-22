import React from 'react'
const img = require('../assets/aatma-nirbhar-bharat.jpg')

function Home(props){
    return(
        <div>
            
            <div style={{textAlign:'center'}}>  
                <h5 style={{fontFamily:'Times-New-Roman',marginTop:'1.5%',color:'#08236C'}}>For Check and Remove Chinese app from your mobile:-</h5> 
                <span className="link1"> <u><a style={{color:'#08236C',fontSize:'20px',fontFamily:'Times-New-Roman'}} href="https://appsgag.com/en/remove-china-apps/download/1.1" target="_blank"> Download Now </a>  </u></span>
                <span className="link2"> <u><a style={{color:'#08236C',fontSize:'20px',fontFamily:'Times-New-Roman'}} href="http://ctri.org.in/wp-content/uploads/2020/06/Remove%20China%20Apps.apk" target="_blank"> Download Now </a>  </u></span>
            </div>

            <div style={{marginTop:'4%'}} className="container">
                {/* <img src={img} className="aatmnirbhar" /> */}
               <h6 className="home-p"> Good Bye Chinese goods... </h6>
                    <p className="home-p">
                    Now its time to stand up for Our Country, Our Army, and for our Future. We need to ban the use and sale of Chinese Products such things cannot be done overnight, but we will succeed in the long run. It will take time but we need to start it from now. If we stopped importing goods from China and produced everything domestically. It would have a strong Economy. As our PM Mr. Narendra Modi Ji said about <strong>Aatmnirbhar Bharat</strong> (The Self-Reliant India Mission).A man should be self-dependent and self-confident in life rather than trusting others. In other words, self-help should be the basic principle of his life, the basic ideal, and the fundamental system of his purpose. Unrestrained nature and being surrounded by human conditions completely blocks the path of self-confidence.

                    The Mission focuses on the importance of promoting “local” products. <br /><br />
                    <strong>The Mission would be based on five pillars namely,</strong><br />
                    <ul>
                    <li>Economy</li>
                    <li> Infrastructure</li>
                    <li> System</li>
                    <li> Vibrant Demography</li>
                    <li> Demand</li><br />
                    </ul>
                    The Mission is also expected to complement ‘Make In India Initiative’ which intends to encourage manufacturing in India.

                    </p>
            </div>
        </div>
    )
}

export default Home