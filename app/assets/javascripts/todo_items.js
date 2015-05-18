// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function() {
  var template = function(text) {
    var star = '<i class="glyphicon glyphicon-star"></i>';
    var trash = '<i class="glyphicon glyphicon-remove"></i>';
    var checkbox = '<input type="checkbox">';
    return '<p>' + checkbox + star + '<span>' + text + '</span>' + trash + '</p>';
  };

  $('form').submit(function(event) {
    event.preventDefault();
    var todo = $('#todo');
    if(todo.val()) {
      var html = template(todo.val());
      $(html).appendTo('.list');
      $(todo).val("");
    }
  });

  $("div.list").on("click", ".glyphicon-remove", function() {
    $(this).parent().remove();
  });

  $("div.list").on("click", ".glyphicon-star", function() {
    $(this).toggleClass('active');
  });
});