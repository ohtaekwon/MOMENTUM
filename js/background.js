// 1. image를 담을 리스트 생성
const images = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
];
// 2. 이미지들을 랜덤하게 변수에 할당
const chosenImage = images[Math.floor(Math.random()*images.length)];

// 3. image 엘리멘터 생성
const bgImage=document.createElement("img");
// 배경이미지들을 bgImage.src에 할당
// local 주소에서 찾기
// bgImage.src=`img/${chosenImage}`;
bgImage.src=`https://github.com/ohtaekwon/MOMENTUM/blob/master/img/${chosenImage}?raw=true`

// body에 엘리멘트로 만들기 
document.body.appendChild(bgImage);

console.log(chosenImage)