(function() {
  'use strict';
  
  function Accordion() {
    this.triggers = document.querySelectorAll('[data-trigger]');
    this.contents = document.querySelectorAll('[data-contents]');
    
    this.heightAllContents = this.getHeightAllContents();
    
    this.hideAllContents();
    this.bindEvents();
  }
  
  // 全てのcontentsの高さを格納したオブジェクトを返す
  Accordion.prototype.getHeightAllContents = function() {
    var _this = this;
    var obj = {};
    
    this.contents.forEach(function(element) {
      var name = element.getAttribute('data-contents');
      obj[name] = window.getComputedStyle(element).height;
    });
    
    return obj
  };
  
  // 全てのcontentsを非表示に
  Accordion.prototype.hideAllContents = function() {
    this.contents.forEach(function(element) {
      element.style.height = 0;
    });
  };
  
  Accordion.prototype.bindEvents = function() {
    var _this = this;
    
    this.triggers.forEach(function(element) {
      element.addEventListener('click', _this.onToggle.bind(_this), false);
    });
  };
  
  Accordion.prototype.onToggle = function(event) {
    var name = event.currentTarget.getAttribute('data-trigger');
    var target = document.querySelector('[data-contents="'+ name +'"]')
    var isOpen = !!(parseInt(target.style.height, 10));
    
    if (isOpen) {
      target.style.height = 0;
    } else {
      target.style.height = this.heightAllContents[name];
    }
  };
  
  window.addEventListener('DOMContentLoaded', function() {
    new Accordion();
  });
})();