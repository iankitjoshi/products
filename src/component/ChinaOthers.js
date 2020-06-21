import React from 'react'

class ChinaOthers extends React.Component{
    constructor(){
        super()
        this.state = {
            others : ['Chinese Lamp','Chinese Light','Diwali Lights','Chinese Candles','Club Factory', 'Aliexpress', 'Shein','WeChat']
        }
    }
    render() {
        return (
            <div>
                <h2 className="mobile-list"><u>Other Products and E-Commerce </u></h2>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap" rel="stylesheet" />

                <div class="card-group" >
                    <div className="container" >
                        <div class="row row-cols-4">
            {
                this.state.others.map((other,i) => {
                    return(
                            <div className="col" key={i}>
                                <div className="card mobile-card" >
                                    <div class="card-body card-mobile1" key={i}>
                                        <h5 className="card-title h1-mobile">{other}</h5>
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
        );
    }
}

export default ChinaOthers