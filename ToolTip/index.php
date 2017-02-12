<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ToolTip</title>
</head>
<style>
body { margin: 100px; }
.tooltip-contents {
  display: inline-block;
  position: relative;
}
.tooltip-text {
  display: none;
  position: absolute;
  bottom: 2em;
  left: 0;
  right: 0;
  margin: 0 50px;
  padding: 2px 10px;
  color: white;
  background: rgba(0,0,0,.5);
}
.tooltip-text:before {
  content: '';
  display: block;
  position: absolute;
  bottom: -20px;
  left: 50%;
  margin-left: -10px;
  border: 10px solid transparent;
  border-top: 10px solid rgba(0,0,0,.5);
}
.tooltip-contents:hover .tooltip-text {
  display: block;
  animation: fadeIn .35s ease-in-out;
}
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
<body>

<div class="tooltip-contents">
  マウスオーバーしたらToolTipを表示する
  <p class="tooltip-text">
    ヘルプ文言<br>
    ヘルプ文言<br>
    ヘルプ文言<br>
  </p>
</div>

<?php include( $_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>

</body>
</html>