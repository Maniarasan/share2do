function useHandleBars(items, addNew){
  Handlebars.registerHelper('list', function(items, options) {
    var a = addList(items, addNew);
    return a;
  });
  // Grab the template script
  var theTemplateScript = $("#expressions-template").html();
  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);
  // Pass our data to the template
  var theCompiledHtml = theTemplate(items);
  // Add the compiled html to the page
  $('.content-placeholder').html(theCompiledHtml);
}

function addNewItem(status){
  var newItem = '';
  if(status){
    newItem = '<li class="list-group-item">'+'<input type="text" class="form-control" ><div class="hide-element"> </div></li>';
  }
  return newItem;
}

function addList(items, addNew){
  var ulListItem = '<ul class="list-group">' + addListItems(items, addNew) + '</ul>';
  return ulListItem;
}

function addListItems(items, addNew){
  var itemString='';
  itemString = itemString + addNewItem(addNew);
  for(var i=0, l=items.length; i<l; i++) {
    itemString = itemString + '<li class="list-group-item">'+'<input type="text" class="form-control hide-element" ><div>'+items[i].firstName+' '+items[i].lastName+'</div></li>';
  }
  return itemString;
}

$(document).ready(function () {
  console.log('hi and hello')
    // Define our data object
  var items = {
    people: [
      {firstName: "Yehuda", lastName: "Katz"},
      {firstName: "Carl", lastName: "Lerche"},
      {firstName: "Alan", lastName: "Johnson"}
    ]
  };
  useHandleBars(items, false);

  $('.list-group li').on('click', function (e) {
    var a = $(e.toElement);
    var c = $(a).find('div');
    c.addClass('hide-element');
    var b = $(a).find('input');
    b.removeClass('hide-element');
    b.val(c.text());
  });

  // $('.btn-circle').on('click', function (e){
  //   useHandleBars(items, true);
  // });

  $('.form-control').focusout(function(e) {
    var $parentElement = $(e.currentTarget).parent();
    var $div = $parentElement.find('div');
    $div.removeClass('hide-element');
    var $input = $parentElement.find('input');
    $input.addClass('hide-element');
    $div.text($input.val());
    //trigger save for edit or create
  });

  $('.form-control').keypress(function (e) {
   var key = e.which;
   if(key == 13)  // the enter key code
    {
      var $parentElement = $(e.currentTarget).parent();
      var $div = $parentElement.find('div');
      $div.removeClass('hide-element');
      var $input = $parentElement.find('input');
      $input.addClass('hide-element');
      $div.text($input.val());
      //trigger save for edit or create
    }
  });   
 

});
