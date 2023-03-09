# Attention- BE

<br />

## 기술 스택

- Node.js, Express
- PostgreSQL, Docker
- AWS Lightsail, RDS

  <br />

## 폴더 구조

```
config
 ┣ 📜db.js
 ┣ 📜express.js
 ┗ 📜routes.js
src
 ┣ 📂auth
 ┃ ┣ 📜auth.controller.js
 ┃ ┣ 📜auth.dao.js
 ┃ ┣ 📜auth.route.js
 ┃ ┗ 📜auth.service.js
 ┣ 📂comments
 ┃ ┣ 📜comment.controller.js
 ┃ ┣ 📜comment.dao.js
 ┃ ┣ 📜comment.route.js
 ┃ ┗ 📜comment.service.js
 ┣ 📂todos
 ┃ ┣ 📜todo.controller.js
 ┃ ┣ 📜todo.dao.js
 ┃ ┣ 📜todo.route.js
 ┃ ┗ 📜todo.service.js
 ┗ 📜app.js
```

<br />
<br />

# 개발 일지

## 1차 마일스톤 (~3.31)
- CRUD
  - [x] posts CRUD
  - [x] posts pagination 추가
  - [x] users CR
  - [ ] comments CRUD
- 인증/인가
  - passport 없이
    - [x] sessionId 이용 구현 - session 방식에서 유저 정보가 쿠키에 드러나는게 맞나 싶어 구현 중단 (session ID 를 DB에서 찾는것도 생각했는데 말이 안되는 비효율이라..)
    - [x] bcrypt 적용
    - [x] jwt 토큰 방식
    - [ ] session 대신 Redis memory db 사용
    - [ ] front firebase google login 연동
  - passport 적용
    - [ ] Local Strategy Auth 구현
    - [ ] 카카오 Auth 구현
- 리팩토링
  - [x] Error Handler Wrapper 추가
  - [ ] TypeScript 적용
  - [ ] Error 핸들링 추가
- 테스트 코드
  - [ ] 테스트 코드 적용

<br/>

---

## 2차 마일스톤 (TBD)

- [] Nest.js 마이그레이션
- [] 전체 게시글 기능 추가
- [] 게시글 사진 업로드 추가
- [] 팔로우 기능 추가
