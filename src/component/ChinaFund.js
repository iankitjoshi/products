import React from 'react'

class ChinaFunds extends React.Component{
    constructor(){
        super()
        this.state = {
            funds : ['BigBasket',"Byju's",'Delhivery','Flipkart','Hike','Make My Trip','OLA','OYO','Paytm','Paytm Mall','PolicyBazaar','Quikr','Snapdeal','Swiggy','Udaan','Zomato']
        }
    }
    render(){
        return(
            <div>
                <h2 className="mobile-list"><u>China Funds in Major Indian Companies -</u></h2>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap" rel="stylesheet" />

                <div class="card-group" >
                    <div className="container" >
                        <div class="row row-cols-4">
            {
                this.state.funds.map((fund,i) => {
                    return(
                            <div className="col" key={i}>
                                <div className="card mobile-card" >
                                    <div class="card-body card-mobile1" key={i}>
                                        <h5 className="card-title h1-mobile">{fund}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                })
            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChinaFunds