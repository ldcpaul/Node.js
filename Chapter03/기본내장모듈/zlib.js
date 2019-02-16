const fs = require('fs');
const zlib = require('zlib'); // 파일 압축 모듈

const zlibStream = zlib.createGzip();
const readStream = fs.createReadStream('pipe_front.txt');
const writeStream = fs.createWriteStream('pipe_back.txt');

readStream.pipe(zlibStream).pipe(writeStream); // 읽기스트림 을 압축 스트림에 연결 후 , 쓰기스트림에 연결  ->
/*
* 읽기스트림에 들어갈 내용
* �      # ��읽기스트림에 들어갈 내용*��B#   
*/