(function() {
  'use strict';
  
  var DAYS = ['日', '月', '火', '水', '木', '金', '土'];
  var ROWS = 6;
  
  function Calendar() {
    var nowDate = new Date();
    this.year = nowDate.getFullYear();
    this.month = nowDate.getMonth() + 1;
    this.day = nowDate.getDay();
    this.date = nowDate.getDate();
    
    this.now = document.getElementById('calendar-now');
    this.table = document.querySelector('.calendar-table');
    this.prev = document.getElementById('prev');
    this.next = document.getElementById('next');
    
    this.render();
    this.bindEvents();
  }
  
  Calendar.prototype.bindEvents = function () {
    this.prev.addEventListener('click', this.onPrev.bind(this), false);
    this.next.addEventListener('click', this.onNext.bind(this), false);
  };
  
  Calendar.prototype.onPrev = function () {
    this.month -= 1;
    this.render();
  };
  
  Calendar.prototype.onNext = function () {
    this.month += 1;
    this.render();
  };
  
  Calendar.prototype.render = function() {
    this.renderNow();
    this.renderCalendar();
  };
  
  Calendar.prototype.renderNow = function() {
    var text = document.createTextNode(this.year +'年'+ this.month +'月'+ this.date +'日 ('+ DAYS[this.day] +')');
    this.now.textContent = null;
    this.now.appendChild(text);
  };
  
  Calendar.prototype.renderCalendar = function() {
    var _this = this;
    var dateOfMonth = new Date(this.year, this.month, 0).getDate();
    var fragment = document.createDocumentFragment();
    var date_i = 1;
    
    for (var row_i = 0; row_i < ROWS; row_i++) {
      var tr = document.createElement('div');
      tr.classList.add('calendar-row');
      
      DAYS.forEach(function(day, day_i) {
        var td = document.createElement('div');
        td.classList.add('calendar-cell');
        
        // 前月のセル
        if (row_i === 0 && day_i < _this.day) {
          tr.appendChild(td);
          return;
        }
        
        // 今月のセル
        if (date_i <= dateOfMonth) {
          td.textContent = date_i++;
          tr.appendChild(td);
          return;
        }
        
        // 来月のセル
        // td.textContent = 'fuga';
        tr.appendChild(td);
      });
      
      fragment.appendChild(tr);
    }
    
    this.table.textContent = null;
    this.table.appendChild(fragment);
  };
  
  window.addEventListener('DOMContentLoaded', function() {
    new Calendar();
  });
})();
