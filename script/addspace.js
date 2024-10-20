const addspacebtn = document.getElementById("addspacebtn");
const spaceinput = document.getElementById("addspace");
const result = document.getElementById("result");
const spaceoutput = document.getElementById("spaceoutput");
const addspacecopy = document.getElementById("addspacecopy");

// 버튼 클릭 이벤트 리스너
addspacebtn.addEventListener("click", () => {
    // 랜덤 공백 추가 함수
    function addRandomSpaces(str, minspace, maxspace) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            const randomCount = Math.floor(Math.random() * (maxspace - minspace + 1)) + minspace; // minspace~maxspace 사이의 랜덤 숫자
            result += str[i]; // 문자 추가
            result += ' '.repeat(randomCount); // 랜덤한 수의 공백 추가
        }
        return result.trim(); // 마지막에 추가된 공백 제거
    }
    
    // textarea에 변수값 추가
    const str = spaceinput.value;
    const minspace = parseInt(document.getElementById("minspace").value, 10); // 숫자로 변환
    const maxspace = parseInt(document.getElementById("maxspace").value, 10); // 숫자로 변환

    // 유효성 검사
    if (isNaN(minspace) || isNaN(maxspace)) {
        alert('최소 및 최대 공백 수는 숫자여야 합니다.');
        return;
    }

    if (minspace < 0 || maxspace < 0) {
        alert('최소 및 최대 공백 수는 0 이상이어야 합니다.');
        return;
    }

    if (minspace > maxspace) {
        alert('최대 공백 수는 최소 공백 수보다 커야 합니다.');
        return;
    }

    // 랜덤 공백이 추가된 문자열 생성
    const spacedStr = addRandomSpaces(str, minspace, maxspace);
    
    // 결과 출력
    spaceoutput.textContent = spacedStr; // 공백을 유지하면서 결과 출력
});


addspacecopy.addEventListener("click", () => {
    spaceoutput.select();
    document.execCommand("copy");
    alert("Copied!");
})