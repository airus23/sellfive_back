# sellfive backend nodejs
backend 서버를 nodejs 와 express 로 구성

도커라이징 참고 url ->
[https://nodejs.org/ko/docs/guides/nodejs-docker-webapp/](https://nodejs.org/ko/docs/guides/nodejs-docker-webapp/)

`git clone https://github.com/H-Five/sellfive_back_nodejs.git`

해당 디렉토리로 이동

`cd sellfive_back_nodejs`

`docker build -t <your username>/sellfive_back_nodejs .`

이미지 실행

`docker run -p 5555:5555 -d <your username>/sellfive_back_nodejs`

컨테이너 안에 들어가야 하는 경우 exec 명령어 사용

`docker exec -it <container id> /bin/bash`

MAC의 경우

`docker exec -it <container id> /bin/sh`