import React from 'react'

class ChinaApps extends React.Component{
    constructor(){
        super()
        this.state = {
            apps : ['TikTok','Like','Helo','SHAREit','UCBrowser','PUBG','Xender','VMate','BeautyPlus','Club Factory','All Video Downloader','Vigo Video','Viva Video','AppLock','UDictionary','LivU','Vigo Live','Guns of Glory','Clash of Kings','Castle Clash', 'CamScanner','Game of Sultans','NonoLive','Flash KeyBoard','NewsDog','LivU']
        }
    }
    render(){
        return(
            <div>
                <h2 className="mobile-list"><u>Chinese Major Mobile Apps -</u></h2>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap" rel="stylesheet" />

                <div class="card-group" >
                    <div className="container" >
                        <div class="row row-cols-4">
            {
                this.state.apps.map((app,i) => {
                    return(
                            <div className="col" key={i}>
                                <div className="card mobile-card" >
                                    <div class="card-body card-mobile1" key={i}>
                                        <h5 className="card-title h1-mobile">{app}</h5>
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

export default ChinaApps