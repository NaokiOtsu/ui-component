<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HeaderFixed</title>
</head>
<style>
* {
  margin: 0;
  padding: 0;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #ccc;
  border-bottom: 1px solid #999;
  box-sizing: border-box;
  transition: transform .25s ease-in-out;
}
.header.is-hidden {
  transform: translateY(-50px);
}
.header ul {
  display: flex;
  list-style: none;
}
.header ul li {
  flex: 1;
}
.header ul li a {
  display: block;
  height: 50px;
  line-height: 50px;
  text-align: center;
  box-sizing: border-box;
}
.header ul li + li a { border-left: 1px solid #999; }
.container {
  margin-bottom: 2000px;
  padding-top: 50px;
}
</style>
<body>

<header class="header">
  <ul>
    <li><a href="">nav1</a></li>
    <li><a href="">nav2</a></li>
    <li><a href="">nav3</a></li>
    <li><a href="">nav4</a></li>
    <li><a href="">nav5</a></li>
  </ul>
</header>

<div class="container">
  hoge
</div>


<?php include( $_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>

<script src="../node_modules/underscore/underscore-min.js"></script>
<script src="./HeaderFixed/app.js"></script>
</body>
</html>