function addRandomSpaces(str, min, max) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      const randomCount = Math.floor(Math.random() * (max - min + 1)) + min; // min~max 사이의 랜덤 숫자
      for (let j = 0; j < randomCount; j++) {
        result += ' ';
      }
      result += str[i];
    }
    return result;
  }
  
  // 사용 예시
  const str = 'HelloWorld!';
  const min = 1;
  const max = 3;
  const spacedStr = addRandomSpaces(str, min, max);
  console.log(spacedStr);