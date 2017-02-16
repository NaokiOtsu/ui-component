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
.calendar-week-list {
  display: table;
  margin: 15px 0 0;
  padding: 0;
}
.calendar-week-list li {
  display: table-cell;
  width: 50px;
  text-align: center;
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
.calendar-week-list li.blue,
.calendar-cell.blue { color: blue; }
.calendar-week-list li.red,
.calendar-cell.red { color: red; }
.calendar-cell.now { background-color: lightyellow; }
</style>
<body>

<div id="calendar-now"></div>
<button id="prev">前の月</button>
<button id="next">次の月</button>

<ul class="calendar-week-list">
  <li class="red">日</li>
  <li>月</li>
  <li>火</li>
  <li>水</li>
  <li>木</li>
  <li>金</li>
  <li class="blue">土</li>
</ul>
<div class="calendar-table"></div>

<?php include( $_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>

<script src="./Calendar/app.js"></script>
</body>
</html>