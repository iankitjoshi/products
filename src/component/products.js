import React from 'react'

function Products(){
    return(
        <div style={{marginTop:'3%'}}>
            <h2 className="mobile-list"><u>Chinese Products Lists :-</u></h2> <br/>
            <div className="list-div  list-group">
                <ul>
                    <a href="/mobiles" className="lists  list-group-item list-group-item-action"><li className="li-tags-product"> Mobile Phones </li></a>
                    <a href="/apps" className="lists  list-group-item list-group-item-action"><li className="li-tags-product">Applicatios </li></a>
                    <a href="/funds" className="lists  list-group-item list-group-item-action"><li className="li-tags-product">Funded Company from China</li></a>
                    <a href="/tvs" className="lists  list-group-item list-group-item-action"><li className="li-tags-product">Televisions</li></a>
                    <a href="/others" className="lists  list-group-item list-group-item-action"><li className="li-tags-product">Other Products and E-Commerce</li></a>
                </ul>
                 </div>
           
           
        </div>
    )
}

export default Products