const errors = {
  notFound(message = "요청에 대한 리소스를 찾을 수 없습니다.") {
    return { code: 404, message };
  },
};

module.exports = errors;
