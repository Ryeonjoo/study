//schemas #데이터 베이스에 데이터를 넣기전, 밑그림을 그리기 위한 스키마
//데이터베이스의 기본이 되는 파일(의례적으로 index.js이름을 기본으로 사용)

const mongoose = require("mongoose");

const connect = () => {
    mongoose
    .connect("")
    .catch(err => console.log(err));
};

mongoose.connection.on("error", err => {
    console.error("몽고디비 연결 에러", err);
});

module.exports = connect;