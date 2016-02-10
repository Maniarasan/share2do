function useHandleBars(){
  Handlebars.registerHelper('list', function(items, options) {
    var out = '<ul class="list-group">';
    for(var i=0, l=items.length; i<l; i++) {
      out = out + '<li class="list-group-item">' + options.fn(items[i]) + "</li>";
    }
    return out + "</ul>";
  });

  // Grab the template script
  var theTemplateScript = $("#expressions-template").html();
  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);
  // Define our data object
  var items = {
    people: [
      {firstName: "Yehuda", lastName: "Katz"},
      {firstName: "Carl", lastName: "Lerche"},
      {firstName: "Alan", lastName: "Johnson"}
    ];
  };
  // Pass our data to the template
  var theCompiledHtml = theTemplate(items);
  // Add the compiled html to the page
  $('.content-placeholder').html(theCompiledHtml);
}

$(document).ready(function () {
  console.log('hi and hello')
  useHandleBars();
});