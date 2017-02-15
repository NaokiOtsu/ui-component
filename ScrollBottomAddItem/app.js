(function() {
  'use strict';
  
  function ScrollBottomAddItem() {
    this.window = window;
    this.body = document.body;
    
    this.bindEvents();
  }
  
  ScrollBottomAddItem.prototype.bindEvents = function() {
    window.addEventListener('scroll', _.throttle(this.onScroll.bind(this), 500), false);
  };
  
  ScrollBottomAddItem.prototype.onScroll = function() {
    if (this.window.scrollY + this.window.innerHeight >= this.body.offsetHeight) {
      var num = Math.floor(Math.random() * 10) + 1;
      this.addItem(num);
    }
  };
  
  ScrollBottomAddItem.prototype.addItem = function(num) {
    var fragment = document.createDocumentFragment();
    
    for (var i = 0, l = num; i < l; i++) {
      var div = document.createElement('div');
      var img = document.createElement('img');
      img.src = 'https://placehold.jp/150x150.png';
      div.appendChild(img);
      fragment.appendChild(div);
    }
    
    document.body.appendChild(fragment);
  };
  
  
  window.addEventListener('DOMContentLoaded', function() {
    new ScrollBottomAddItem();
  });
  
})();