<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Tab</title>
</head>
<style>
[data-tab-contents] { display: none; }
[data-tab-contents].active { display: block; }
</style>
<body>

<div id="tab-container">
  <ul>
    <li data-tab-trigger="tab1">Tab1</li>
    <li data-tab-trigger="tab2">Tab2</li>
    <li data-tab-trigger="tab3">Tab3</li>
  </ul>
  <div class="active" data-tab-contents="tab1">
    Tab1 Contents
  </div>
  <div data-tab-contents="tab2">
    Tab2 Contents
  </div>
  <div data-tab-contents="tab3">
    Tab3 Contents
  </div>
</div>

<?php include( $_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>

<script src="app.js"></script>
</body>
</html>