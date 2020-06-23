import React , {useEffect} from 'react'
import { BrowserRouter, Route, } from 'react-router-dom'
import './design.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './component/Home'
import MobileProducts from './component/MobileProduct'
import Footer from './footer';
import Products from './component/products';
import ChinaApps from './component/ChinaApps';
import ChinaFunds from './component/ChinaFund'
import ChinaTV from './component/ChinaTV';
import ChinaOthers from './component/ChinaOthers'
import IndianProducts from './component/indianProducts';
import ReactGA from 'react-ga'
const img = require('./assets/indianflag.png')


function App(props){
     useEffect(() => {
        ReactGA.initialize('UA-170496220-1')
        ReactGA.pageview('/')
    } , [])
    return (
        <BrowserRouter>
        

        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap" rel="stylesheet" />

        <img src={img} alt="flag" className="indian-flag" /> <br />
        <h2 className="unite-india">Unite Indian, Be Indian...</h2>
        {/* <Link to="/"> Home  </Link> |
        <Link to="/products">Products</Link> */}

        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light nav-css">
                <div class="navbar-collapse nav2-css" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/"><h5 className="nav-home"> Home</h5> <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/indian-products"><h5 className="navI-products">Indian Products</h5> <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/china-products"><h5 className="navC-products">Chinese Products</h5> <span class="sr-only">(current)</span></a>
                        </li>
                        
                    </ul>
                </div>
            </nav>

        <Route path="/" component={Home} exact={true}/>
        <Route path="/china-products" component={Products} />
        <Route path="/mobiles" component={MobileProducts} />
        <Route path="/apps" component={ChinaApps} />
        <Route path="/funds" component={ChinaFunds} />
        <Route path="/tvs" component={ChinaTV} />
        <Route path="/others" component={ChinaOthers} />

        <Route path="/indian-products" component={IndianProducts} />

        <Footer />
        </div>
        </BrowserRouter>
    )
}

export default App