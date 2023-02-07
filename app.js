//express 서버의 가장 루트(최상단)폴더, 중심이 됨. 이 파일없으면 에러남

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log('Example app listening on pert ${port}');
});