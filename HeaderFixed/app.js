(function() {
  'use strict';
  
  var THRESHOLD = 50;
  
  function HeaderFixed() {
    this.header = document.querySelector('.header')
    
    var scrollY = window.scrollY;
    this.firstScrollY = scrollY;
    this.currentScrollY = scrollY;
    
    this.bindEvents();
  }
  
  HeaderFixed.prototype.bindEvents = function() {
    window.addEventListener('scroll', _.throttle(this.onScroll.bind(this), 100), false);
  };
  
  HeaderFixed.prototype.onScroll = function() {
    var scrollY = window.scrollY;
    var diffScrollY = scrollY - this.firstScrollY;
    var isUpScroll = scrollY - this.currentScrollY < 0;
    
    // 下にスクロールして閾値を超えたか
    if (diffScrollY > THRESHOLD) {
      this.hideHeader();
    }
    
    // 上にスクロールしたか
    if (isUpScroll) {
      this.showHeader();
    }
    
    this.currentScrollY = scrollY;
  };
  
  HeaderFixed.prototype.hideHeader = function() {
    this.header.classList.add('is-hidden');
  };
  
  HeaderFixed.prototype.showHeader = function() {
    this.header.classList.remove('is-hidden');
    this.firstScrollY = window.scrollY;
  };
  
  window.addEventListener('DOMContentLoaded', function() {
    new HeaderFixed();
  });
  
})();