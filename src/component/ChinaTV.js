import React from 'react'

class ChinaTV extends React.Component{
    constructor(){
        super()
        this.state = {
            tvs : ['Mi TV Xiaomi','Haier','TCL','Realme','OnePlus']
        }
    }
    render(){
        return(
            <div>
                <h2 className="mobile-list"><u>Chinese Major TV Companies in india -</u></h2>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap" rel="stylesheet" />

                <div class="card-group" >
                    <div className="container" >
                        <div class="row row-cols-4">
            {
                this.state.tvs.map((tv,i) => {
                    return(
                            <div className="col" key={i}>
                                <div className="card mobile-card" >
                                    <div class="card-body card-mobile1" key={i}>
                                        <h5 className="card-title h1-mobile">{tv}</h5>
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

export default ChinaTV