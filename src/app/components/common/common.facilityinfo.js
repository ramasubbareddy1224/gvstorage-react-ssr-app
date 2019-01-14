import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';
import {Redirect} from 'react-router-dom';

class CommonFacilityInfo extends Component{

  constructor()
  {
    super();
  }
 


render(){

    const {insurancePlans} = this.props.allUnits;
    const {siteLocation} = this.props.allUnits;
    const {units} =  this.props.allUnits;
    const pathParams = this.props.pathParams;

    const {unit} = this.props.selectedUnitInfo;
    debugger;

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
             { !!moveInCharge.discount && ('Discount: ' + moveInCharge.discount  ) }

             </p>
        )
    })


    const divMoveInTaxes = !!moveInCharges && moveInCharges.map((moveInCharge, index) => {
        return(
            <p className="small" key={index}>
             { !!moveInCharge.taxRate1 && (`TAX ${moveInCharge.taxRate1}% : ${moveInCharge.taxAmount1}`) }
             <br/>
             { !!moveInCharge.taxRate2 && (`TAX ${moveInCharge.taxRate2}% : ${moveInCharge.taxAmount2}`) }

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
                <p> LOCATION  <span className=" pull-right gv-text-color"> Change Location </span></p>
            </div>
            <div className="data-info">
                <p> {!!siteLocation && siteLocation.name} </p>
            </div>
            </div>
            
            <div className="facility-data">
            <div className="data-heading">
                <p> UNIT SIZE  <span className=" pull-right gv-text-color"> Change unit </span></p>
            </div>
            <div className="data-info">
                <p> {Object.keys(unitInfo).length > 0 && unitInfo.unitWidth} X {Object.keys(unitInfo).length && unitInfo.unitLength} - MEDIUM </p>
            </div>
            </div>
            
            <div className="facility-data">
            <div className="data-heading">
                <p> Monthly Rent  </p>
            </div>
            <div className="data-info">
                <div className="rate-varision">
                        <p className="d-inline-block rate-info w-45 text-muted"> ONSITE <br />
                          <strong ><del> {Object.keys(unitInfo).length && (`$${unitInfo.onsiteRate}`)}</del></strong> </p>
                        <p className="d-inline-block rate-info w-45"> WEB  <br />
                          <strong className="gv-text-color"> {Object.keys(unitInfo).length && (`$${unitInfo.webRate}`)} </strong> </p>
                      </div>
                <p className="small"> Covers up to $2,000 USD ($10.95 USD / monthly) </p>
            </div>
            </div>
            
            <div className="facility-data">
            <div className="data-heading">
                <p> MOVE-IN CHARGES </p>
            </div>
            <div className="data-info">
            {divMoveIncharges}
                {/* <p className="small"> 1st month rent: $39.97 USD <br />
                Admin fee: $22.00 USD  <br />
                1st month protection: $7.42 USD </p> */}

                {divMoveInTaxes}
            </div>
            
            <h2 className="gv-text-color"> {!!totalAmount && (`$${totalAmount}`)} </h2>

            </div>
            
            </div>
            
        </div>
    )
}
}

export default CommonFacilityInfo;