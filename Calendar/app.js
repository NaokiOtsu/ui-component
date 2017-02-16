(function () {
  'use strict';

  var WEEK_DAYS = ['日', '月', '火', '水', '木', '金', '土'];
  var ROWS = 6;
  
  function Calendar() {
    this.nowDate = new Date(); // 今日の日付を取得
    this.year = this.nowDate.getFullYear();
    this.month = this.nowDate.getMonth();
    this.weekDay = this.nowDate.getDay();
    this.day = this.nowDate.getDate();
    
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
    this.updateCurrentDate(-1);
    this.render();
  };
  
  Calendar.prototype.onNext = function () {
    this.updateCurrentDate(1);
    this.render();
  };
  
  // 前の月、次の月を押した時に年月、曜日を更新する
  Calendar.prototype.updateCurrentDate = function (num) {
    this.month += num;
    
    if (this.month === -1) {
      this.year -= 1;
      this.month = 11;
    }
    
    if (this.month === 12) {
      this.year += 1;
      this.month = 0;
    }
    
    var currentDate = new Date(this.year, this.month, this.day);
    this.weekDay = currentDate.getDay();
  };
  
  Calendar.prototype.render = function () {
    this.renderDate(); // その月の年月を表示する
    this.renderCalendar(); // その月のカレンダーを表示する
  };
  
  Calendar.prototype.renderDate = function () {
    var text = this.year +'年'+ (this.month + 1) +'月';
    var textNode = document.createTextNode(text);
    
    this.now.textContent = null; // テキストの中身を空に
    this.now.appendChild(textNode);
  };
  
  Calendar.prototype.renderCalendar = function () {
    var _this = this;
    
    var firstWeekDay = new Date(this.year, this.month, 1).getDay(); // その月の最初の日の曜日
    var dayOfMonth = new Date(this.year, this.month + 1, 0).getDate(); // その月の日数(翌月の0日が何日かを見て取得)
    var fragment = document.createDocumentFragment();
    var day_i = 1;
    
    for (var row_i = 0; row_i < ROWS; row_i++) {
      var tr = document.createElement('div');
      tr.classList.add('calendar-row');
      
      WEEK_DAYS.forEach(function (day, week_i) {
        var td = document.createElement('div');
        td.classList.add('calendar-cell');
        
        // 土曜日
        if (week_i === 6) td.classList.add('blue');
        
        // 日曜日
        if (week_i === 0) td.classList.add('red');
        
        // 今日
        if (_this.year === _this.nowDate.getFullYear() && _this.month === _this.nowDate.getMonth() && day_i === _this.nowDate.getDate()) td.classList.add('now');
        
        // 前月のセル(最初の行 かつ その月の最初の曜日より前の曜日だったら)
        if (row_i === 0 && week_i < firstWeekDay) {
          tr.appendChild(td);
          return;
        }
        
        // 今月のセル(1日からその月の日数までの間だったら)
        if (day_i <= dayOfMonth) {
          td.textContent = day_i++;
          tr.appendChild(td);
          return;
        }
        
        // 来月のセル(上記以外だったら)
        tr.appendChild(td);
      });
      
      fragment.appendChild(tr);
    }
    
    this.table.textContent = null; // テーブルの中身を空に
    this.table.appendChild(fragment);
  };
  
  window.addEventListener('DOMContentLoaded', function () {
    new Calendar();
  });
  
})();
