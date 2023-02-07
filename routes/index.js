//API 요청의 제일 앞단을 관리하는 라우팅 폴더(끝점, endpoint의 문지기 역할 어떤 URL로 이동할지 알려줌 )
//라우팅의 최상단, 가장 기본이 되는 파일(index.js이름의 파일을 자동으로 감지함 )

const { application } = require("express");

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.post('/', (req, res) => {
    res.send('Got a POST request')
})
app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
})
app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})