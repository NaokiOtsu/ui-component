(function() {
  'use strict';
  
  function Carousel() {
    this.list = document.querySelector('#carousel-list');
    this.prev = document.querySelector('#carousel-prev');
    this.next = document.querySelector('#carousel-next');
    
    this.currentNum = 0;
    this.length = this.list.children.length;
    
    this.bindEvents();
  }
  
  Carousel.prototype.bindEvents = function() {
    this.prev.addEventListener('click', this.onPrev.bind(this), false);
    this.next.addEventListener('click', this.onNext.bind(this), false);
    window.addEventListener('resize', this.onResize.bind(this), false);
  };
  
  Carousel.prototype.onPrev = function() {
    var width = this.list.getBoundingClientRect().width;
    
    this.setCurrentNum(-1);
    this.list.style.webkitTransform = 'translateX(-'+ width * this.currentNum +'px)';
  };
  
  Carousel.prototype.onNext = function() {
    var width = this.list.getBoundingClientRect().width;
    
    this.setCurrentNum(1);
    this.list.style.webkitTransform = 'translateX(-'+ width * this.currentNum +'px)';
  };
  
  Carousel.prototype.onResize = function() {
    var width = this.list.getBoundingClientRect().width;
    
    this.list.style.webkitTransform = 'translateX(-'+ width * this.currentNum +'px)';
  };
  
  Carousel.prototype.setCurrentNum = function(num) {
    this.currentNum += num;
    
    if (this.currentNum < 0) this.currentNum = this.length - 1;
    if (this.currentNum === this.length) this.currentNum = 0;
  };
  
  window.addEventListener('DOMContentLoaded', function() {
    new Carousel();
  });
  
})();