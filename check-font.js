const fs = require('fs');

const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<style>
@font-face {
  font-family: 'Blackpool Gothic';
  src: url('BlackpoolGothic.ttf') format('truetype');
}
body {
  background: #0D0D0D;
  padding: 40px;
}
.gold {
  color: #C9A96E;
  font-family: 'Blackpool Gothic', sans-serif;
  font-size: 80px;
}
.cream {
  color: #F5F0E8;
  font-family: 'Blackpool Gothic', sans-serif;
  font-size: 80px;
}
.stone {
  color: #C8BFB0;
  font-family: 'Blackpool Gothic', sans-serif;
  font-size: 30px;
  letter-spacing: 0.4em;
}
</style>
</head>
<body>
  <div class="gold">AARAMBH</div>
  <div class="cream">AAKAR</div>
  <div class="stone">STUDIO</div>
</body>
</html>`;

fs.writeFileSync('c:/Users/anshu/OneDrive/Desktop/Temp/aarambh-aakar-studio/src/fonts/test.html', html);
console.log('Written test.html');

