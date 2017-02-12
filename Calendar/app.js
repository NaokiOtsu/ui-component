(function() {
  'use strict';
  
  var DAYS = ['日', '月', '火', '水', '木', '金', '土'];
  
  function Calendar() {
    var nowDate = new Date();
    
    this.now = document.getElementById('calendar-now');
    
    this.renderNow(nowDate);
    this.renderCalendar(nowDate);
  }
  
  Calendar.prototype.renderNow = function(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDay();
    var date = date.getDate();
    var text = document.createTextNode(year +'年'+ month +'月'+ date +'日 ('+ DAYS[day] +')');
    
    this.now.appendChild(text)
  };
  
  Calendar.prototype.renderCalendar = function(date) {
    var fragment = document.createDocumentFragment();
  };
  
  window.addEventListener('DOMContentLoaded', function() {
    new Calendar();
  });
})();