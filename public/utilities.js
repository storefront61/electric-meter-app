
var data = [];

var Reading = function(kwh,kwhTotal,dailyPrice,monthPrice){
  	this.kwh = kwh;
  	this.kwhTotal = kwhTotal;
  	this.dailyPrice = dailyPrice;
  	this.monthPrice = monthPrice;
  };


var U = {
   calcTotals: function(obj){//from getInput
    var kwh = obj.endRead - obj.beginRead;
    var kwhTotal = obj.endRead - obj.monthBegin;
    var dailyPrice = obj.price * kwh;
    var monthPrice = obj.price * kwhTotal;
    var newItem = new Reading(kwh,kwhTotal,dailyPrice,monthPrice);
      data.unshift(newItem);
      return newItem;
  },
   mainInput: function(){
      return {
      	endRead: U.$('mainInput').value
      }
  },
   showInput: function(){
      return U.$('changeInput').style.visibility = 'visible';
  },
  getClass: function(className){
      'use strict';
      return document.getElementsByClassName(className);
    },
  getInput: function(obj){
	return {
		monthBegin: U.$('mBegin').value,
		beginRead: U.$('dBegin').value,
		price: U.$('mPrice').value,
		endRead: obj.endRead
       }
  },
  updateBegin: function(obj){//mainInput later
  	  var newBegin = obj.endRead;
  	  var day = 2000;//v * 60 * 60 * 24;
       setTimeout(function(){
       	U.$('dBegin').value =  newBegin;
       	setTimeout(function(){
       	U.$('changeInput').style.visibility = "hidden";	
       },4000);
       	
       }, day);
  },
  objInput: function(obj1,obj2){
    return Object.assign(obj1, obj2);
 },
 objToArray: function(obj){
        return Object.keys(obj);
},
  setVal(id, textVar){
      U.$(id).value = textVar;
  },
  createElement: function(element,textVar,id,appendToElem){
      var elem = document.createElement(element);
      elem.textContent = textVar;
      elem.id = id;
      document.getElementById(appendToElem).append(elem);
    },
  compat: function(){
           'use strict';
           var txt = document.compatMode;
           return txt;
        },
  newButton: function(id,append){
                    'use strict';
                  var btn = document.createElement('button');
                  btn.textContent = 'Click';
                  btn.id = id;
                  $(append).append(btn);
        },
  openWindow: function(url){
          'use strict';
          window.open(url);
        },
  clearFields: function(){
    var fields, fieldsArr;
    fields = document.querySelectorAll('.itemOut');
        fieldsArr = Array.prototype.slice.call(fields);
        fieldsArr.forEach(function(current,index,array){
               current.value = "";
        });
        fieldsArr[0].focus();
    },
  setTime: function(id){
      var d = new Date();
      var elem = document.getElementById(id)
      elem.innerHTML = d.toLocaleTimeString();
    },
  setClock: function(id){
         setInterval(function(){
          U.setTime(id);
         });
   },
  $: function(id){
	'use strict';
	if(typeof id == 'string'){
		return document.getElementById(id);
	}
},
setText: function(id,message){
	'use strict';
	if((typeof id == 'string') && (typeof message == 'string')){
		var output = this.$(id);
		if(output.textContent !== undefined){
			output.textContent = message;
		}else{
			output.innerText = message;
		}
	}//end if
},//end setText()
addEvent: function(obj, type, fn){
	'use strict';
	if(obj && obj.addEventListener){
		obj.addEventListener(type, fn, false);
	}else if(obj && obj.attachEvent){
		obj.attachEvent('on' + type, fn);
	}
},
removeEvent: function(obj, type, fn){
	if(obj && obj.removeEventListener){
		obj.removeEventListener(type, fn, false);
	}else if(obj && obj.detachEvent){
		obj.detachEvent('on' + type, fn);
	}
},//end removeEvent()
enableTooltips: function(id){
	'use strict';
	//get reference to element
	var elem = this.$(id);

	//add four event handlers to the element
	this.addEvent(elem, 'focus', this.showTooltip);
	this.addEvent(elem, 'mouseover', this.showTooltip);
	this.addEvent(elem, 'blur', this.hideTooltip);
	this.addEvent(elem, 'mouseout', this.hideTooltip);
},
showTooltip: function(e){
	'use strict';
	//get event object
	if(typeof e == 'undefined')var e = window.event;
	//get event target
	var target = e.target || e.srcElement;
	target.previousSibling.lastChild.style.visibility = 'visible';
},//end of showTooltip()

hideTooltip: function (e){
	'use strict'
	// get event object
	if(typeof e == 'undefined')var e = window.event;
	//get event target
	var target = e.target || e.srcElement;
	target.previousSibling.lastChild.style.visibility = 'hidden';
},
faseIn: function(element){
       'use strict';
       if(typeof element == 'string'){
        var elem = $(element);
        var opacity = .1;
        var fader = setInterval(function(){
          opacity += .1;
            if(opacity >= 0){
              if(typeof elem.style.opacity == 'string'){
                elem.style.opacity = opacity;
              }else{//IE
                    elem.style.filters = 'alpha(opacity' + (opacity * 100) + ')';
              }
            }else{
              clearInterval(fader);
            }
        }, 1000)//end setInterval
       }//end valid
    },//end faseOut();
  faseOut: function(element){
       'use strict';
       if(typeof element == 'string'){
        var elem = $(element);
        var opacity = 1;
        var fader = setInterval(function(){
          opacity -= .1;
            if(opacity >= 0){
              if(typeof elem.style.opacity == 'string'){
                elem.style.opacity = opacity;
              }else{//IE
                    elem.style.filters = 'alpha(opacity' + (opacity * 100) + ')';
              }
            }else{
              clearInterval(fader);
            }
        }, 1000)//end setInterval
       }//end valid
    }//end faseOut();

};

// var appCtrlAddItem = function(){
//   //get input
// var input = UIControl.getInput();
//   console.log(input);
//   var item = budgetControl.calcTotals(input);
//     console.log(item);
//     var dist = UIControl.display(item);
//     console.log(dist);
//      UIControl.clearFields();
//     UIControl.setClock('read3');
//  }













