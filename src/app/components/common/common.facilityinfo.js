import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';
import {Redirect,Link} from 'react-router-dom';
import NumberFormat from 'react-number-format';

class CommonFacilityInfo extends Component{

  constructor()
  {
    super();
  }
 


render(){

    //const {insurancePlans} = this.props.allUnits;
    //const {siteLocation} = this.props.allUnits;
    const {units} =  this.props.allUnits;
    const pathParams = this.props.pathParams;

    const {unit} = this.props.selectedUnitInfo;
    //const selectedSiteLocation = this.props.selectedUnitInfo.siteLocation; 
    
    const {siteLocation} = Object.keys(this.props.selectedUnitInfo).length  > 0 ? this.props.selectedUnitInfo : this.props.allUnits;
    const {insurancePlans} =  Object.keys(this.props.selectedUnitInfo).length  > 0 ? this.props.selectedUnitInfo : this.props.allUnits;
    

    const {moveInCharges} = this.props.moveInCharges;
    const {totalAmount} = this.props.moveInCharges;
 
    var unitInfo = '';
    if(!pathParams.isReloaded){
         unitInfo = !!unit ? unit : {};
    }
    else {
        unitInfo = !!units ? units.filter(x=>x.firstAvailableUnitID == pathParams.unitId)[0] : {};
    }

    const divMoveIncharges = !!moveInCharges && moveInCharges.map((moveInCharge, index) => {
        return(
            <p className="small" key={index}>
             {moveInCharge.description}: ${moveInCharge.amount} USD
             <br/>
             { !!moveInCharge.discount && ('Discount: $' + moveInCharge.discount + ' USD'  ) }

             </p>
        )
    })


    const divMoveInTaxes = !!moveInCharges && moveInCharges.map((moveInCharge, index) => {
        return(
            <p className="small" key={index}>
            {!!moveInCharge.taxRate1 && <span>TAX {moveInCharge.taxRate1}%  <span style={{fontSize: '8px'}}>({moveInCharge.description})</span> : ${moveInCharge.taxAmount1} USD</span>
            }       
             </p>
        )
    })

    
    const divMoveInTaxes2 = !!moveInCharges && moveInCharges.map((moveInCharge, index) => {
        return(
            <p className="small" key={index}>
            {!!moveInCharge.taxRate2 && <span>TAX {moveInCharge.taxRate2}%  <span style={{fontSize: '8px'}}>({moveInCharge.description})</span> : ${moveInCharge.taxAmount1} USD</span>
            }       
             </p>
        )
    })

    return(
        <div className="col-12 col-md-4 ">
        <div className="facility-info">
            <div className="pt-3">
                <h5> Facility Information </h5>
            </div>
            
            <div className="facility-data">
            <div className="data-heading">
                <p> LOCATION  
                  {!!siteLocation &&  !this.props.isInConfirmationScreen && <span className=" pull-right gv-text-color"> 
                  <Link to={`/search/${siteLocation.stateName}`}> Change Location
                  </Link>
                  </span>
                  }
                  {!!siteLocation &&this.props.isInConfirmationScreen && <span className=" pull-right gv-text-color"> 
                  Change Location
                  </span>
                  }
                  {/* {!!selectedSiteLocation &&  <span className=" pull-right gv-text-color">   
                  <Link to={`/search/${selectedSiteLocation.stateName}`}> Change Location
                  </Link></span>
                } */}
                
                </p>
            </div>
            <div className="data-info">
                <p> {!!siteLocation && siteLocation.name} </p>
                {/* <p> {!!selectedSiteLocation && selectedSiteLocation.name} </p> */}
            </div>
            </div>
            
            <div className="facility-data">
            <div className="data-heading">
                <p> UNIT SIZE  
                {!this.props.isInConfirmationScreen ?
                <Link to={`/self-storage/${pathParams.metaParam}/${pathParams.locationCode}`}>
                    <span className=" pull-right gv-text-color"> Change Unit </span>
                </Link>
                :
                <span className=" pull-right gv-text-color"> Change Unit </span>
                }
                </p>
            </div>
            {!! unitInfo&& 
            <div className="data-info">
                <p> { Object.keys(unitInfo).length > 0 && unitInfo.unitWidth} X {Object.keys(unitInfo).length && unitInfo.unitLength} </p>
            </div>
            }
            </div>
            
            <div className="facility-data">
            <div className="data-heading">
                <p> Monthly Rent  </p>
            </div>
            <div className="data-info">
                <div className="rate-varision">
                        {!!unitInfo && Object.keys(unitInfo).length && !!unitInfo.onsiteRate &&
                        <p className="d-inline-block rate-info w-45 text-muted"> WALKIN RATE <br />
                          <strong ><del> { (`$${unitInfo.onsiteRate}`)}</del></strong> </p>
                          }
                          {!!unitInfo && 
                        <p className="d-inline-block rate-info w-45"> ONLINE  RATE <br />
                          <strong className="gv-text-color"> {Object.keys(unitInfo).length && (`$${unitInfo.webRate}`)} </strong> </p>
                          }
                      </div>
                      
                      { 
                          !!insurancePlans &&
                                      <p className="small"> Covers up to ${insurancePlans[1].coverage} USD (${insurancePlans[1].premium} USD / monthly) </p>
                      }
            </div>
            </div>
            
            <div className="facility-data border-0">
            <div className="data-heading">
                <p> MOVE-IN CHARGES </p>
            </div>
            <div className="data-info">
            {divMoveIncharges}
                {/* <p className="small"> 1st month rent: $39.97 USD <br />
                Admin fee: $22.00 USD  <br />
                1st month protection: $7.42 USD </p> */}

                {divMoveInTaxes}
                {divMoveInTaxes2}
            </div>
            <br/>
            <h2 className="gv-text-color">
            {!!totalAmount &&
            <NumberFormat value={totalAmount.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'}  />
            } USD
             {/* {!!totalAmount && (`$${totalAmount.toFixed(2)} USD`)}  */}
             </h2>

            </div>
            
            </div>
            
        </div>
    )
}
}

export default CommonFacilityInfo;