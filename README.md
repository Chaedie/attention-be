# To do App - BE

<br />

## 기술 스택

- Node.js, Express
- PostgreSQL, Docker

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

- 1차 마일스톤
> - [x] Front 코드 기반으로 Todo CRUD 구현
> - [] todos pagination 추가
> - [] Local Strategy Auth 구현
> - [] 카카오 Auth 구현
> - [] TypeScript 마이그레이션

- 2차 마일스톤 
> - [] Nest.js 마이그레이션
> - [] 전체 게시글 기능 추가
> - [] 게시글 사진 업로드 추가
> - [] 팔로우 기능 추가
> - [] 

### 문제 해결 과정

- [Delete 통신 시 발생하는 "Unexpected end of JSON input" 에러](https://chaedies-dev-log.tistory.com/entry/Reactjs-delete-fetch-%EC%8B%9C-Undexpected-end-of-JSON-input)
- [gh-pages 배포 과정](https://chaedies-dev-log.tistory.com/entry/Reactjs-Github-Page%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EA%B0%9C%EC%9D%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%B0%B0%ED%8F%AC)

### 타입 스크립트 적용 과정

- [Todo App 타입스크립트 마이그레이션 (1)](https://velog.io/@im_chaedong/typesto-do-app-%EC%97%90%EB%9F%AC-%EB%85%B8%ED%8A%B8-1)
- [Todo App 타입스크립트 마이그레이션 (2)](https://velog.io/@im_chaedong/typesto-do-app-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EA%B3%BC%EC%A0%95-2)
- [Todo App 타입스크립트 마이그레이션 (3)](https://velog.io/@im_chaedong/typesto-do-app-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EA%B3%BC%EC%A0%95-3)
- [Todo App 타입스크립트 마이그레이션 (4)](https://velog.io/@im_chaedong/typesto-do-app-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EA%B3%BC%EC%A0%95-4)

### Axios 적용 과정

- [Fetch => Axios 적용](https://chaedies-dev-log.tistory.com/entry/Reactjs-to-do-app-fetch-Axios-%EB%A7%88%EC%9D%B4%EA%B7%B8%EB%A0%88%EC%9D%B4%EC%85%98-%EA%B3%BC%EC%A0%95)
