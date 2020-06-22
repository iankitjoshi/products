import React from 'react'

class MobileProducts extends React.Component{
    constructor(){
        super()
        this.state = {
            mobiles : ['10.Or','Amoi','BBK','Coolpad','Cubot','Gfive','Haier','Hisense','Honor','Huawei','Konka','LeEco','Lenovo','Meitu','Meizu','OnePlus','Oppo','Realme','Smartisan','TCL Corporation','Tecno Mobile','Vivo','Vsun','Wasam','Xiaomi, Redmi-Mi','Zopo Mobile','ZTE','ZUK Mobile']
        }
    }
    render(){
        return(
            <div>
                <h2 className="mobile-list"><u>Chinese Mobile Phones -</u></h2>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap" rel="stylesheet" />

                <div class="card-group" >
                    <div className="container" >
                        <div class="row row-cols-4">
            {
                this.state.mobiles.map((mobile,i) => {
                    return(
                            <div className="col" key={i}>
                                <div className="card mobile-card" >
                                    <div className="card-body card-mobile1" key={i}>
                                        <h5 className="card-title h1-mobile">{mobile}</h5>
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

export default MobileProducts

