<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>AutoComplete</title>
</head>
<style>
* {
  margin: 0;
  padding: 0;
}
input {
  display: block;
  border: 1px solid #ccc;
  line-height: 20px;
  box-sizing: border-box;
}
body {
  margin: 50px;
}
.suggest-container {
  position: relative;
  margin-bottom: 50px;
}
.suggest-contents {
  position: absolute;
  top: 21px;
  left: 0;
  max-width: 180px;
  border: 1px solid #ccc;
  background-color: white;
}
ul { list-style: none; }
li { padding: 2px 5px; }
li.over {
  background-color: #eee;
}
</style>
<body>

<div class="suggest-container">
  <input type="text" class="auto-complete">
  <div class="suggest-contents"></div>
</div>

<?php include( $_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>

<script src="../node_modules/jquery/dist/jquery.js"></script>
<script src="./AutoComplete/app.js"></script>
</body>
</html>