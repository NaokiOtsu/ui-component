(function() {
  'use strict';
  
  var KEY_CODE = {
    'up': 38,
    'down': 40,
    'enter': 13,
    'escape': 27
  };
  
  function AutoComplete() {
    var _this = this;
    
    this.html = document.documentElement;
    this.input = document.querySelector('.auto-complete');
    this.suggest = document.querySelector('.suggest-contents');
    
    this.data = null; // autoCompleteするデータ
    this.current = 0;
    this.currentScroll = 0;
    this.suggestHeight = 200;
    this.liHeight = 28;
    
    this.getAutoCompleteData()
      .then(function(json) {
        _this.data = json;
        _this.bindEvents();
      }, function() {
        console.log('error');
      });
  }
  
  AutoComplete.prototype.getAutoCompleteData = function() {
    var defer = new $.Deferred;
    var xhr = new XMLHttpRequest();
    
    xhr.addEventListener('load', function(event) {
      defer.resolve(event.target.response);
    });
    
    xhr.addEventListener('error', function(event) {
      defer.reject('error');
    });
    
    xhr.open('GET', './AutoComplete/DATA.json');
    xhr.responseType = 'json';
    xhr.send();
    
    return defer.promise();
  };
  
  AutoComplete.prototype.bindEvents = function() {
    this.input.addEventListener('keydown', this.onKeyDown.bind(this), false);
    this.html.addEventListener('click', this.onBlur.bind(this), false);
    this.suggest.addEventListener('click', this.onClickSuggest.bind(this), false);
  };
  
  AutoComplete.prototype.onKeyDown = function(event) {
    if (!this.data) return;
    
    requestAnimationFrame(this.autoComplete.bind(this, event));
  };
  
  AutoComplete.prototype.onBlur = function() {
    this.hideSuggest();
  };
  
  AutoComplete.prototype.onEnter = function() {
    var target = this.suggest.querySelectorAll('li')[this.current - 1];
    this.hideSuggest();
    
    if (!target) return;
    
    var text = target.textContent;
    this.input.value = text;
  };
  
  AutoComplete.prototype.onClickSuggest = function(event) {
    var text = event.target.textContent;
    this.input.value = text;
    this.hideSuggest();
  };
  
  AutoComplete.prototype.hideSuggest = function(event) {
    this.suggest.textContent = null;
    this.current = 0;
  };
  
  AutoComplete.prototype.autoComplete = function(event) {
    var text = event.target.value.trim();
    
    if (!text) {
      this.hideSuggest();
      return;
    } 
    
    var suggestList = this.getSuggestList(text);
    this.renderSuggest(suggestList);
    
    if (!suggestList.length) return;
    
    // console.log(event.keyCode);
    switch (event.keyCode) {
      case KEY_CODE.up:
        this.selectSuggest(-1);
        break;
      case KEY_CODE.down:
        this.selectSuggest(1);
        break;
      case KEY_CODE.enter:
        this.onEnter();
        break;
      case KEY_CODE.escape:
        this.hideSuggest();
        break;
      default:
        break;
    }
  };
  
  AutoComplete.prototype.selectSuggest = function(num) {
    var li_list = this.suggest.querySelectorAll('li');
    var length = li_list.length;
    
    this.current += num;
    
    if (this.current <= 0) {
      this.current = 1;
    } else if (this.current > length) {
      this.current = length;
    }
    
    li_list.forEach(function(element) {
      element.classList.remove('over');
    });
    li_list[this.current - 1].classList.add('over');
    
    this.renderScroll();
    // this.suggest.scrollTop = 100;
    
  };
  
  AutoComplete.prototype.renderScroll = function() {
    var suggest_height = this.suggest.getBoundingClientRect().height;
    
    console.log()
  };
  
  AutoComplete.prototype.getSuggestList = function(text) {
    var results = [];
    
    results = this.data['data'].filter(function(value, index, array) {
      var regexp = new RegExp(text);
      return regexp.test(value);
    });
    
    return results;
  };
  
  AutoComplete.prototype.renderSuggest = function(list) {
    var ul = document.createElement('ul');
    
    list.forEach(function(value) {
      var li = document.createElement('li');
      li.textContent = value;
      ul.appendChild(li);
    });
    
    this.suggest.textContent = null;
    this.suggest.appendChild(ul);
  };
  
  window.addEventListener('DOMContentLoaded', function() {
    new AutoComplete();
  });
})();