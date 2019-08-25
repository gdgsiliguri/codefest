  var xhReq = new XMLHttpRequest();
xhReq.open("GET", 'https://c3e31bae.ngrok.io/api/', false);
xhReq.send(null);
var dataObject = JSON.parse(xhReq.responseText);
var listItemString = $('#listItem').html();

dataObject.forEach(buildNewList);

function buildNewList(item, index) {
  var listItem = $('<li>' + listItemString + '</li>');
  var listItemTitle = $('.title', listItem);
  listItemTitle.html(item.action);
  var listItemAmount = $('.amount', listItem);
  listItemAmount.html(item.sender_name);
  var listItemTitle = $('.title2', listItem);
  listItemTitle.html(item.repo_url);
  var listItemAmount = $('.amount2', listItem);
  listItemAmount.html(item.sender_url);
  var listItemDesc = $('.description', listItem);
  listItemDesc.html(item.repo_name);
  $('#dataList').append(listItem);
}