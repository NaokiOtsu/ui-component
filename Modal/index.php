<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Modal</title>
</head>
<style>
.modal-container {
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.5);
}
.modal-container.active {
  display: block;
}
.modal-contents {
  margin: 50px;
  padding: 10px;
  background-color: white;
}
</style>
<body>

<button class="modal-trigger">open</button>

<div class="modal-container">
  <div class="modal-contents">
    <button class="modal-close">close</button><br>
    hoge<br>
    hoge<br>
    hoge<br>
  </div>
</div>

<?php include( $_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>

<script src="./Modal/app.js"></script>
</body>
</html>