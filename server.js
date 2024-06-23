/** ==================================
프로덕션 빌드 확인용, npm run serve
================================== **/

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
