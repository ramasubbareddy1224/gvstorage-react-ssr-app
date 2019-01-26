import React, { Component } from 'react';
import {Redirect,Link} from 'react-router-dom';


var sum = 0;
var inputs ='';
var min_size = 0;
var max_size = 300;


var citiesList = [];

 class CommonSpaceCalculator extends Component{ 

    constructor(){
        super();
        this.state={
            cities: [],
            selectedState: '',
            selectedCity: '',
            isLocationCodeClicked: false
        }
    }

    componentDidMount(){
        let $=require('jquery');
        inputs = $('#spacecalc .active input');
        inputs.off();

        inputs.keyup((event)=> {
            event.preventDefault();		
            var total = 0;		
            this.updateSelectedItems();
            $(inputs).each(function() {
                var num = parseInt( $(this).val() );
                if (isNaN(num) || num < 0) {
                    num = 0;
                }			
                if ( $(this).is(':focus') ) {
                    if(event.keyCode == 38) {
                        num += 1;
                    }
                    else if (event.keyCode == 40) {
                        num -= 1;
                        if (num < 0) {
                            num = 0;
                        }
                    }
                    $(this).val(num);				
                }
                var value = $(this).data('value');			
                if (isNaN(value)) {
                    value = 0;
                }
                total += ( num * value );			
            });		
            sum = total;	
            this.findRightSize(total);
        });

      var that = this;

        $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
            e.preventDefault();
            $(this).siblings('a.active').removeClass("active");
            $(this).addClass("active");
            var index = $(this).index();
            $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
            $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index-1).addClass("active");

            $('#selectedSizeId').text('5x5');
		$('#selectedItemsId').text(0);
        $('#totalQuantityId').text('Total quantity: 0');
        var inputValues = $('#space-calculator-inputs input');
        for(var i=0;i<inputValues.length;i ++){
            inputValues[i].value = "";
        }
        

        inputs = $('#spacecalc .active input');
        inputs.off();

        inputs.keyup((event)=> {
            event.preventDefault();		
            var total = 0;		
            that.updateSelectedItems();
            $(inputs).each(function() {
                var num = parseInt( $(this).val() );
                if (isNaN(num) || num < 0) {
                    num = 0;
                }			
                if ( $(this).is(':focus') ) {
                    if(event.keyCode == 38) {
                        num += 1;
                    }
                    else if (event.keyCode == 40) {
                        num -= 1;
                        if (num < 0) {
                            num = 0;
                        }
                    }
                    $(this).val(num);				
                }
                var value = $(this).data('value');			
                if (isNaN(value)) {
                    value = 0;
                }
                total += ( num * value );			
            });		
            sum = total;	
            that.findRightSize(total);
        });

        }); 
    }
    
updateSelectedItems=()=>{
    let $=require('jquery');
	var selectedItems = 0;
	var totalQuantity = 0;
	$(inputs).each(function() {
		var num = parseInt( $(this).val() );
		if (num > 0) {			
			selectedItems += 1;
			totalQuantity += num;
			num = 0;
		}
	});
	console.log('totalQuantity: '+totalQuantity);
	$('#selectedItemsId').text(selectedItems);
	$('#totalQuantityId').text('Total quantity: '+totalQuantity);
}


increaseValue=(dataValue, id) => {  
    let $=require('jquery');
    var value = parseInt($('.'+id).val());      
    value = isNaN(value) ? 0 : value;
    value = value < 1 ?  0 : value;    
    value++;    
    $('.'+id).val(value);    
    var add = (dataValue * value);	
    var sub = (dataValue * value+1);
    var total = 0;
        $(inputs).each(function() {
            var num = parseInt( $(this).val() );
            if (isNaN(num) || num < 0) {
                num = 0;
            }	
            var value = $(this).data('value');			
            if (isNaN(value)) {
                value = 0;
            }         
            total += ( num * value );			
        });
      this.findRightSize(total); 
      this.updateSelectedItems(); 
}


decreaseValue=(dataValue, id)=> {
    let $=require('jquery');
    var value = parseInt($('.'+id).val(), 10);
    value = isNaN(value) ? 0 : value;
    value = value < 1 ?  1 : value;
    value--;
    $('.'+id).val(value);
    var add = (dataValue * value);	
    var sub = (dataValue * value+1);   
    var total = 0;
    $(inputs).each(function() {
        var num = parseInt( $(this).val() );
        if (isNaN(num) || num < 0) {
            num = 0;
        }	
        var value = $(this).data('value');
        if (isNaN(value)) {
            value = 0;
        }
        total += ( num * value );			
    });   
    this.findRightSize(total);
    this.updateSelectedItems();
}

findRightSize=(total)=>{
    let $=require('jquery');
	total = Math.round( total * 1.15 );				
		var size;
		var section;
	    if (total <= 250 && min_size <= 25 && max_size >= 25) {
	       size = '5x5';
	       total /= 2.5;
	       section = 0;
	    }
	    else if (total <= 500 && min_size <= 50 && max_size >= 50) {
	       size = '5x10';
	       total /= 5;
	       section = 0;
	    }
	    else if (total <= 1000 && min_size <= 75 && max_size >= 75) {
	       size = '10x10';
	       total /= 10;
	       section = 1;
	    }
	    else if (total <= 1500 && min_size <= 150 && max_size >= 150) {
	       size = '10x15';
	       total /= 15;
	       section = 1;
	    }
	    else if (total <= 2000 && min_size <= 200 && max_size >= 200) {
	       size = '10x20';
	       total /= 20;
	       section = 2;
	    }
	    else if (total <= 3000 && min_size <= 300 && max_size >= 300) {
	       size = '10x30';
	       total /= 30;
	       section = 2;
	    }
	    else if (total > 3000 || total > max_size * 10) {
	       size = "Call Us!";
	       total = 100;
	       section = 2;
	    }
	    total = Math.round(total);
	    console.log({'total': total, 'size': size});
		$('#selectedSizeId').text(size);
}

stateChange(event){
    var cities = [];
    if(!!event.target.value ){
    cities = this.props.allPinCodes_Sites[1].locations.filter(x=> x.stateName==event.target.value)[0].cities;

    this.setState({cities: cities, selectedState: event.target.value});
    }
    else{
        this.setState({cities: [], selectedState: ''});
    }
}

cityChange(event){
    if(!!event.target.value ){
    this.setState({selectedCity: event.target.value});
    }
    else{
        this.setState({selectedCity: ''});
    }
}

clkRedirectToSelfStorage = (state, city) =>{

    if(!!this.state.selectedState){
        var filterName = '';
        if(!!this.state.selectedCity){
       var filterName = this.state.selectedCity;
      }
      else{
        var filterName = this.state.selectedState;
      }
      this.setState({isLocationCodeClicked: true, searchDynamicUrl: '/search/'+filterName+''});
    }
    else{
        alert('select state to continue')
    }
  }

    render(){

        
  if (this.state.isLocationCodeClicked) {
    this.setState({isLocationCodeClicked: false, selectedLocation: {}});

    return <Redirect to={this.state.searchDynamicUrl} />
  }

        const {allPinCodes_Sites} = this.props;

       const states = allPinCodes_Sites.length > 0 && allPinCodes_Sites[1].locations.map(x=>x.stateName);
    

        return(
            <div className="container">
              <div className="">
            <div className="self-storage-content w-100" id="space-calculator-inputs">
                <div className="row">
                    <div className="col-md-9 col-sm-12 col-12 bhoechie-tab-container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-12 bhoechie-tab-menu">
    
                                <div className="list-group">
                                    <h4> Category </h4>
                                    <a href="#" className="list-group-item active">
                                        <span><img src="img/living-room.png" className="img-fluid" /> Living Room </span>
                                    </a>
                                    <a href="#" className="list-group-item ">
                                        <span> <img src="img/bed-room.png" className="img-fluid" /> Bed Room </span>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <span> <img src="img/kichin-dining.png" className="img-fluid" /> Kitchen and Dining Room </span>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <span> <img src="img/mislanious.png" className="img-fluid" /> Miscellaneous </span>
                                    </a>
    
                                </div>
    
                            </div>
                            <div className="col-md-8 col-sm-8 col-12 bhoechie-tab">
                          
                                <div className="bhoechie-tab-content searh-calc-height active">
    
                                    <div className="storage-size">
    
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h5> Items and Quantity </h5>
                                                <div className="item-qty ">
                                                    <div className="table-responsive">
                                                        <table className="table">
                                                        <tbody>
                                                            <tr className="small">
                                                                <td> Bookcase </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(20, 'Bookcase')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Bookcase" id="number" data-value="20" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(20, 'Bookcase')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Bookshelves </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(5, 'Bookshelves1')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Bookshelves1" id="number" data-value="5" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(5, 'Bookshelves1')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Cabinet </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(24, 'Cabinet')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Cabinet" id="number" data-value="24" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(24, 'Cabinet')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Chair, Arm </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(27, 'Chair-Arm')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Chair-Arm" id="number" data-value="27" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(27, 'Chair-Arm')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Chair, Straight </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(5, 'Chair-Straight')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Chair-Straight" id="number" data-value="5" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(5, 'Chair-Straight')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Chair, Occasional </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(48, 'Chair-Occasional')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Chair-Occasional" id="number" data-value="48" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(48, 'Chair-Occasional')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Chair, Overstuffed </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(55, 'Chair-Overstuffed')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Chair-Overstuffed" id="number" data-value="55" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(55, 'Chair-Overstuffed')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Chair, Rocking </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(36, 'Chair-Rocking')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Chair-Rocking" id="number" data-value="36" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(36, 'Chair-Rocking')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Desk </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(45, 'Desk')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Desk" id="number" data-value="45" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(45, 'Desk')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Fireplace Equip </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(5, 'Fireplace-Equip')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Fireplace-Equip" id="number" data-value="5" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(5, 'Fireplace-Equip')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Lamp </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(3, 'Lamp')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Lamp" id="number" data-value="3" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(3, 'Lamp')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Sofa, 6ft </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(72, 'Sofa-6ft')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Sofa-6ft" id="number" data-value="72" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(72, 'Sofa-6ft')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Sofa, Section </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(45, 'Sofa-Section')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Sofa-Section" id="number" data-value="45" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(45, 'Sofa-Section')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Sofa, Loveseat </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(36, 'Sofa-Loveseat')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Sofa-Loveseat" id="number" data-value="36" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(36, 'Sofa-Loveseat')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Stereo, Console </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(18, 'Stereo-Console')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Stereo-Console" id="number" data-value="18" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(18, 'Stereo-Console')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Table </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(16, 'Table')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Table" id="number" data-value="16" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(16, 'Table')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Table, Coffee/End </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(12, 'Table-CoffeeEnd')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Table-CoffeeEnd" id="number" data-value="12" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(12, 'Table-CoffeeEnd')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> TV, Table-Model </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(24, 'TV-Table-Model')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="TV-Table-Model" id="number" data-value="24" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(24, 'TV-Table-Model')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> TV, Console </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(18, 'TV-Console')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="TV-Console" id="number" data-value="18" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(18, 'TV-Console')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Wall Unit </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(36, 'Wall-Unit')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Wall-Unit" id="number" data-value="36" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(36, 'Wall-Unit')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
    
                                                </div>
    
                                            </div>
    
                                        </div>
    
                                    </div>
                                </div>

                                <div className="bhoechie-tab-content searh-calc-height">
                                    <div className="storage-size">
    
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h5> Items and Quantity </h5>
                                                <div className="item-qty ">
                                                    <div className="table-responsive">
                                                        <table className="table">
                                                            <tbody>
                                                            <tr className="small">
                                                                <td> Bed, Bunk </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(70, 'Bed-Bunk')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Bed-Bunk" id="number" data-value="70" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(70, 'Bed-Bunk')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Bed, Double </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(60, 'Bed-Double')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Bed-Double" id="number" data-value="60" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(60, 'Bed-Double')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Bed, Single </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(40, 'Bed-Single')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Bed-Single" id="number" data-value="40" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(40, 'Bed-Single')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Bed, King </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(72, 'Bed-King')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Bed-King" id="number" data-value="72" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(72, 'Bed-King')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Bed, Queen </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(65, 'Bed-Queen')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Bed-Queen" id="number" data-value="65" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(65, 'Bed-Queen')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Bed, Rollaway </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(20, 'Bed-Rollaway')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Bed-Rollaway" id="number" data-value="20" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(20, 'Bed-Rollaway')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Bookshelves </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(5, 'Bookshelves2')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Bookshelves2" id="number" data-value="5" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(5, 'Bookshelves2')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Chair </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(12, 'Chair_Bed')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Chair_Bed" id="number" data-value="12" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(12, 'Chair_Bed')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Bureau </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(28, 'Bureau')}} value="Decrease Value">-</div>
                                                                        <input type="number" id="number" data-value="28" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(28, 'Bureau')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Chest, Cedar </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(15, 'Chest-Cedar')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Chest-Cedar" id="number" data-value="15" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(15, 'Chest-Cedar')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Desk </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(30, 'Desk')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Desk" id="number" data-value="30" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(30, 'Desk')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Dresser, Single </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(24, 'Dresser-Single')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Dresser-Single" id="number" data-value="24" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(24, 'Dresser-Single')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Dresser, Double </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(40, 'Dresser-Double')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Dresser-Double" id="number" data-value="40" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(40, 'Dresser-Double')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Nightstand </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(8, 'Nightstand')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Nightstand" id="number" data-value="8" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(8, 'Nightstand')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Armoire </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(40, 'Armoire')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Armoire" id="number" data-value="40" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(40, 'Armoire')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
    
                                                </div>
                                            </div>
    
                                        </div>
    
                                    </div>
                                </div>
    
                            
                                <div className="bhoechie-tab-content searh-calc-height">
                                    <div className="storage-size">
    
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h5> Items and Quantity </h5>
                                                <div className="item-qty ">
                                                    <div className="table-responsive">
                                                        <table className="table">
                                                        <tbody>
                                                            <tr className="small">
                                                                <td> Air Conditioner </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(18, 'Air-Conditioner')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Air-Conditioner" id="number" data-value="18" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(18, 'Air-Conditioner')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Buffet, Base </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(30, 'Buffet-Base')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Buffet-Base" id="number" data-value="30" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(30, 'Buffet-Base')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Cabinet, Corner </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(20, 'Cabinet-Corner')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Cabinet-Corner" id="number" data-value="20" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(20, 'Cabinet-Corner')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Chair </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(12, 'Chair_Kitchen')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Chair_Kitchen" id="number" data-value="12" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(12, 'Chair_Kitchen')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Chair, Dining </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(8, 'Chair-Dining')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Chair-Dining" id="number" data-value="8" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(8, 'Chair-Dining')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Dehumidifier </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(8, 'Dehumidifier')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Dehumidifier" id="number" data-value="8" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(8, 'Dehumidifier')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Dishwasher </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(36, 'Dishwasher')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Dishwasher" id="number" data-value="36" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(36, 'Dishwasher')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Dryer </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(36, 'Dryer')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Dryer" id="number" data-value="36" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(36, 'Dryer')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Freezer </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(45, 'Freezer')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Freezer" id="number" data-value="45" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(45, 'Freezer')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Refrigerator </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(96, 'Refrigerator')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Refrigerator" id="number" data-value="96" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(96, 'Refrigerator')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Server </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(15, 'Server')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Server" id="number" data-value="15" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(15, 'Server')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Stove </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(36, 'Stove')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Stove" id="number" data-value="36" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(36, 'Stove')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Table </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(16, 'Table1')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Table1" id="number" data-value="16" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(16, 'Table1')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Table, Dinning </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(30, 'Table-Dinning')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Table-Dinning" id="number" data-value="30" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(30, 'Table-Dinning')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Vacuum Cleaner </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(5, 'Vacuum-Cleaner')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Vacuum-Cleaner" id="number" data-value="5" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(5, 'Vacuum-Cleaner')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Washing Machine </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(36, 'Washing-Machine')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Washing-Machine" id="number" data-value="36" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(36, 'Washing-Machine')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
    
                                                </div>
                                            </div>
    
                                        </div>
    
                                    </div>
                                </div>
    
                                <div className="bhoechie-tab-content searh-calc-height">
                                    <div className="storage-size">
    
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h5> Items and Quantity </h5>
                                                <div className="item-qty ">
                                                    <div className="table-responsive">
                                                        <table className="table">
                                                        <tbody>
                                                            <tr className="small">
                                                                <td> Baby Carriage </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(24, 'Baby-Carriage')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Baby-Carriage" id="number" data-value="24" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(24, 'Baby-Carriage')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Bicycle </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(25, 'Bicycle')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Bicycle" id="number" data-value="25" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(25, 'Bicycle')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Desk </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(45, 'Desk')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Desk" id="number" data-value="45" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(45, 'Desk')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Fan </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(7, 'Fan')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Fan" id="number" data-value="7" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(7, 'Fan')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> File Cabinet </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(24, 'File-Cabinet')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="File-Cabinet" id="number" data-value="24" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(24, 'File-Cabinet')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Golf Bag </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(4, 'Golf-Bag')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Golf-Bag" id="number" data-value="4" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(4, 'Golf-Bag')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Hamper, Clothes </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(9, 'Hamper-Clothes')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Hamper-Clothes" id="number" data-value="9" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(9, 'Hamper-Clothes')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Patio Table </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(48, 'Patio-Table')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Patio-Table" id="number" data-value="48" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(48, 'Patio-Table')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Patio Chair </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(27, 'Patio-Chair')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Patio-Chair" id="number" data-value="27" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(27, 'Patio-Chair')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Patio Chaise Lounge </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(35, 'Patio-Chaise-Lounge')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Patio-Chaise-Lounge" id="number" data-value="35" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(35, 'Patio-Chaise-Lounge')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Piano, Baby Grand </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(115, 'Piano-Baby-Grand')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Piano-Baby-Grand" id="number" data-value="115" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(115, 'Piano-Baby-Grand')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Piano, Upright </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(60, 'Piano-Upright')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Piano-Upright" id="number" data-value="60" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(60, 'Piano-Upright')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Rug, Large </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(18, 'Rug-Large')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Rug-Large" id="number" data-value="18" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(18, 'Rug-Large')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Rug, Small </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(5, 'Rug-Small')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Rug-Small" id="number" data-value="5" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(5, 'Rug-Small')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Sewing Machine </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(18, 'Sewing-Machine')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Sewing-Machine" id="number" data-value="18" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(18, 'Sewing-Machine')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Suitcase </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(5, 'Suitcase')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Suitcase" id="number" data-value="5" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(5, 'Suitcase')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Table, Card </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(3, 'Table-Card')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Table-Card" id="number" data-value="3" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(3, 'Table-Card')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Table, Game </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(20, 'Table-Game')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Table-Game" id="number" data-value="20" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(20, 'Table-Game')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
    
                                                            <tr className="small">
                                                                <td> Trunk </td>
                                                                <td>
                                                                    <form>
                                                                        <div className="value-button" id="decrease" onClick={()=> { this.decreaseValue(9, 'Trunk')}} value="Decrease Value">-</div>
                                                                        <input type="number" className="Trunk" id="number" data-value="9" />
                                                                        <div className="value-button" id="increase" onClick={()=> { this.increaseValue(9, 'Trunk')}} value="Increase Value">+</div>
                                                                    </form>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
    
                                                </div>
                                            </div>
    
                                        </div>
    
                                    </div>
                                </div>
    
                            </div>
                        </div>
                    </div>
    
                    <div className="col-md-3">
                        <div className="est-sizes">
                            <h5> Estimated unit size </h5>
                            <p className="small"> <span> Selected Items: </span><span id="selectedItemsId">0 </span> <span className="desktop-right" id="totalQuantityId"> Total quantity: 0 </span> </p>
                            <div className="est-unit-size">
                                <div className="selected-size gv-radius">
                                    <h1 id="selectedSizeId"> 5X5 </h1>
                                    <p className="small"> is your estimated unit size</p>
                                </div>
                                <div className="size-indicator"> </div>
                            </div>
                            <p className="small p-2 pt-3"> *Estimation is based upon an approximated size for each item </p>
                            <div className="select-location">
                                <form>
                                    <p> <strong>Select Location </strong> </p>
                                    <div className="form-group">
                                        <select className="form-control" id="exampleFormControlSelect1" value={this.state.selectedState}  onChange={(event)=> this.stateChange(event)}>
                                                
                                           <option value="">Select State</option>
                                                {
                                                    !!states && states.map((val, index) =>{
                                                return (
                                                    <option key={index} value={val}>{val}</option>
                                                )
                                                })
                                                }
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control" id="exampleFormControlSelect1" value={this.state.selectedCity} onChange={(event)=> this.cityChange(event)}>
                                        <option value="">Select City</option>
                                        {
                                                    !!this.state.cities && this.state.cities.map((val, index) =>{
                                                return (
                                                    <option key={index} value={val.city}>{val.city}</option>
                                                )
                                                })
                                                }
                                        </select>
                                    </div>
                                    <div className="btn btn-gvstore btn-success border-0 green-gradient" onClick={this.clkRedirectToSelfStorage}> Find a storage </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
            </div>
        </div>
        )
    }
}

export default CommonSpaceCalculator;