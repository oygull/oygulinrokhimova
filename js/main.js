

let elVersionBtn = document.getElementById('versionBtn');

elVersionBtn.addEventListener('click', function(){
  document.body.classList.toggle('dark');
})

// Heading

var test = document.getElementById("test");

var text = "Oygul Ibrokhimova";
var result = "";
window.addEventListener("load", (event) => {
  for (let i = 0; i < text.length; i++) {
    setTimeout(function () {
      result += text[i];
      test.innerHTML = result;
    }, 160 * i);
  }
});

// Text

let sentences = document.querySelectorAll('.sentence');
let characterCount = 0;

for (let i = 0; i < sentences.length; i++) {
  let sentence = sentences[i];
  let newContent = '';

  for (let j = 0; j < sentence.textContent.length; j++) {
    let substring = sentence.textContent.substr(j, 1);

    if (substring !== " ") {
      newContent += `<span style="--animation-order: ${characterCount};">${substring}</span>`;
    } else {
      newContent += substring;
    }
    characterCount++;
  }
  sentence.innerHTML = newContent;
}





