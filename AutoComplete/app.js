(function() {
  'use strict';
  
  function AutoComplete() {
    this.input = document.querySelector('.auto-complete');
    
    this.data = null; // autoCompleteするデータ
    
    this.getAutoCompleteData()
      .then(this.setAutoCompleteData.bind(this), null);
    
    this.bindEvents();
  }
  
  AutoComplete.prototype.getAutoCompleteData = function() {
    var defer = new $.Deferred;
    var xhr = new XMLHttpRequest();
    
    xhr.addEventListener('load', function(event) {
      defer.resolve(event.target.response);
    });
    
    xhr.addEventListener('error', function(event) {
      console.log('error');
      defer.reject('error');
    });
    
    xhr.open('GET', './AutoComplete/DATA.json');
    xhr.responseType = 'json';
    xhr.send();
    
    return defer.promise();
  };
  
  AutoComplete.prototype.setAutoCompleteData = function(json) {
    this.data = json;
  };
  
  AutoComplete.prototype.bindEvents = function() {
    this.input.addEventListener('keydown', this.onKeyDown.bind(this), false);
  };
  
  AutoComplete.prototype.onKeyDown = function(event) {
    if (!this.data) return;
    
    requestAnimationFrame(this.autoComplete.bind(this, event));
  };
  
  AutoComplete.prototype.autoComplete = function(event) {
    var text = event.target.value.trim();
    
    if (!text) return;
    
    console.log(text)
  };
  
  window.addEventListener('DOMContentLoaded', function() {
    new AutoComplete();
  });
})();