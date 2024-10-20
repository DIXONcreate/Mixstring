const btn = document.getElementById("mix");
const input = document.getElementById("mixstring");
const stringlength = document.getElementById("stringlength");
const stringmix = document.getElementById("stringmix");
const copy = document.getElementById("copy");
const textarea = document.getElementById("mixoutput");


btn.addEventListener("click", () => {
    
    function shuffleString(str) {
        const arr = str.split('');
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr.join('');
      }
      
      
      document.getElementById("stringlength").innerHTML = input.value.length;
      document.getElementById("mixoutput").innerHTML = shuffleString(input.value);


})

copy.addEventListener("click", () => {
    
    textarea.select();
    document.execCommand("copy");
    alert("Copied!");
})