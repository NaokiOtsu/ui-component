(function() {
  'use strict';
  
  var CLASS_NAME = {
    'active': 'active'
  };
  
  function Modal() {
    this.triggers  = document.querySelectorAll('.modal-trigger');
    this.container = document.querySelector('.modal-container');
    this.contents  = document.querySelector('.modal-contents');
    this.closes    = document.querySelectorAll('.modal-close');
    
    this.bindEvents();
  }
  
  Modal.prototype.bindEvents = function() {
    var _this = this;
    
    this.triggers.forEach(function(element) {
      element.addEventListener('click', _this.onToggle.bind(_this), false);
    });
    
    this.container.addEventListener('click', _this.onClose.bind(_this), false);
    
    this.contents.addEventListener('click', _this.onContents.bind(_this), false);
    
    this.closes.forEach(function(element) {
      element.addEventListener('click', _this.onClose.bind(_this), false);
    });
  };
  
  Modal.prototype.onToggle = function() {
    this.container.classList.toggle(CLASS_NAME.active);
  };
  
  Modal.prototype.onClose = function() {
    this.container.classList.remove(CLASS_NAME.active);
  };
  
  Modal.prototype.onContents = function(event) {
    event.stopPropagation();
  };
  
  window.addEventListener('DOMContentLoaded', function() {
    new Modal();
  });
})();