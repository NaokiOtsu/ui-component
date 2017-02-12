<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Accordion</title>
</head>
<style>
dd {
  overflow: hidden;
  margin: 0;
  color: white;
  background-color: #000;
  transition: height .35s ease-in-out;
}
</style>
<body>

<dl>
  <dt data-trigger="accordion1">title1</dt>
  <dd data-contents="accordion1">contents1</dd>
  
  <dt data-trigger="accordion2">
    title2<br>
    title2
  </dt>
  <dd data-contents="accordion2">
    contents2<br>
    <img src="./Accordion/dog.jpg" width="268" height="188"><br>
    contents2<br>
  </dd>
</dl>

<?php include( $_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>

<script src="./Accordion/app.js"></script>
</body>
</html>