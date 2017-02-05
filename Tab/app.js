(function() {
  'use strict';
  
  var DATA_ATTR_NAME = {
    "trigger": "data-tab-trigger",
    "contents": "data-tab-contents"
  };
  
  var CLASS_NAME = {
    "active": "active"
  };
  
  function Tab() {
    this.triggers = document.querySelectorAll('['+ DATA_ATTR_NAME.trigger +']');
    this.contents = document.querySelectorAll('['+ DATA_ATTR_NAME.contents +']');
    
    this.bindEvents();
  }
  
  Tab.prototype.bindEvents = function() {
    var _this = this;
    
    this.triggers.forEach(function(element) {
      element.addEventListener('click', _this.onClick.bind(_this), false);
    });
  };
  
  Tab.prototype.onClick = function(event) {
     var target = event.currentTarget;
     var name = target.getAttribute(DATA_ATTR_NAME.trigger);
     var contents = document.querySelector('['+ DATA_ATTR_NAME.contents +'="'+ name +'"]');
     
     this.contents.forEach(function(element) {
       element.classList.remove(CLASS_NAME.active);
     });
     contents.classList.add(CLASS_NAME.active);
  };
  
  window.addEventListener('DOMContentLoaded', function() {
    new Tab();
  });
  
})();