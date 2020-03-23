/* global $ */

$(document).ready(function(){
	$.getJSON("/api/items")
  .then(addItems);


  $('#mainInput').keypress(function(event){
    if(event.which == 13){
      var main = U.mainInput();
      console.log(main);
      var input = U.getInput(main);
      console.log(input);
      var cItem = U.calcTotals(input);
      console.log(cItem);
      var item = U.objInput(input,cItem);
      console.log(item)
      createItem(item);
      //addItems(item);
      U.updateBegin(main);

    }
  });
  $('.list').on('click','span', function(){
    //console.log($(this).parent().data('id'));
       //e.stopPropagation()
       removeItem($(this).parent());
  })
    
});


	



	// var main = U.mainInput();
	// console.log(main);
	// var input = U.getInput(main);
	// console.log(input);
	// var cItem = U.calcTotals(input);
	// console.log(item);
	// var item = U.objInput(cItem);
 //  U.updateBegin(main);

function addItems(items){
  return items.forEach(function(item){
    addItem(item);
  });
}

function addItem(item){
    var d = new Date(item.created_date).toDateString();
    var newItem = $('<li class="task">' + d  + ': ' + '  ' + '/   KWH:   ' 
      + item.kwh +  '/  KWH Total: ' + item.kwhTotal  + '/   Day Price: '  
      + item.dailyPrice.toFixed(2) + '/   Month Price: ' + item.monthPrice.toFixed(2) +  ' <span>X</span></li>');
    newItem.data('id', item._id);
    $('.list').append(newItem);
    U.setVal('mPrice',item.price);
    U.setVal('dBegin',item.endRead);
    U.setVal('mBegin',item.monthBegin);
}

function createItem(obj){
  //var userInput = $('#mainInput').val();
  $.post('/api/items',obj)
  .then(function(newItem){
    console.log(newItem);
    $('#mainInput').val('');
    addItem(newItem);
  })
  .catch(function(err){
    console.log(err);
  })
}

function removeItem(item){
  var clickedId = item.data('id');
  var deleteUrl = '/api/items/' + clickedId;
    $.ajax({
      method: 'DELETE',
      url: deleteUrl
    })
    .then(function(data){
      item.remove();
     })
    .catch(function(err){
      console.log(err);
    })
}

U.addEvent(U.$('price'),'click',U.showInput);
U.addEvent(U.$('read'),'click',U.showInput);
