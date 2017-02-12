<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Calendar</title>
</head>
<style>
body {
  margin: 50px;
}
.calendar-table {
  display: table;
  margin-top: 10px;
  border-top: 1px solid #000;
  border-left: 1px solid #000;
}
.calendar-row {
  display: table-row;
}
.calendar-cell {
  display: table-cell;
  width: 50px;
  height: 50px;
  vertical-align: middle;
  text-align: center;
  box-sizing: border-box;
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
}
</style>
<body>

<div id="calendar-now"></div>
<button id="prev">前の月</button>
<button id="next">次の月</button>

<div class="calendar-table">
  <div class="calendar-row">
    <div class="calendar-cell">1</div>
    <div class="calendar-cell">1</div>
    <div class="calendar-cell">1</div>
    <div class="calendar-cell">1</div>
    <div class="calendar-cell">1</div>
    <div class="calendar-cell">1</div>
    <div class="calendar-cell">1</div>
  </div>
  <div class="calendar-row">
    <div class="calendar-cell">1</div>
    <div class="calendar-cell">1</div>
    <div class="calendar-cell">1</div>
    <div class="calendar-cell">1</div>
    <div class="calendar-cell">1</div>
    <div class="calendar-cell">1</div>
    <div class="calendar-cell">1</div>
  </div>
</div>

<?php include( $_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>

<script src="./Calendar/app.js"></script>
</body>
</html>