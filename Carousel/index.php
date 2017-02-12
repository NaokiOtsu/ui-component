<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Carousel</title>
</head>
<style>
* {
  margin: 0;
  padding: 0;
}
body {
  margin: 50px;
}
ul {
  list-style: none;
}
.carousel-container {
  overflow: hidden;
}
.carousel-list {
  display: flex;
  transition: transform .5s ease-in-out;
}
.carousel-list li {
  flex: 1 0 100%;
}
.carousel-list li:nth-child(1) { background-color: #eee; }
.carousel-list li:nth-child(2) { background-color: #ddd; }
.carousel-list li:nth-child(3) { background-color: #ccc; }
.carousel-list li:nth-child(4) { background-color: #bbb; }
.carousel-list li:nth-child(5) { background-color: #aaa; }
</style>
<body>

<div id="carousel-container" class="carousel-container">
  <ul id="carousel-list" class="carousel-list">
    <li>item1</li>
    <li>item2</li>
    <li>item3</li>
    <li>item4</li>
    <li>item5</li>
  </ul>
  <button id="carousel-prev">prev</button><br>
  <button id="carousel-next">next</button>
</div>

<?php include( $_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>

<script src="./Carousel/app.js"></script>
</body>
</html>