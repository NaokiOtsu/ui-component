(function() {
  'use strict';
  
  function ToolTip() {
    this.contents = document.querySelector('.tooltip-contents');
    
    this.bindEvents();
  }
  
  ToolTip.prototype.bindEvents = function() {
    this.contents.addEventListener('mouseover', this.onMouseOver.bind(this), false);
    this.contents.addEventListener('mouseout', this.onMouseOut.bind(this), false);
  };
  
  ToolTip.prototype.onMouseOver = function() {
    var target = event.currentTarget;
    target.classList.add('active');
  };
  
  ToolTip.prototype.onMouseOut = function() {
    var target = event.currentTarget;
    target.classList.remove('active');
  };
  
  window.addEventListener('DOMContentLoaded', function() {
    new ToolTip();
  });
  
})();