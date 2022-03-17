const quotes = [
  {
    quote : "인생은 과감한 모험, 아니면 아무것도 아니다.",
    author : "헬렌 켈러",
  },
  {
    quote : "때로는 살아있는 것 조차도 용기가 될 때가 있다.",
    author : "세네카",
  },
  {
    quote : "젊음은 한때이지만, 철없음은 영원할 수 있다.",
    author : "데이브 배리",
  },
  {
    quote : "두려움은 희망 없이 있을 수 없고, 희망은 두려움없이 있을 수 없다.",
    author : "바뤼흐 스피노자",
  },
  {
    quote : "인간사에는 안정된 것이 하나도 없음을 기억해라. 그러므로 성공에 들뜨거나 역경에 지나치게 의기소침하지 마라. ",
    author : "소크라테스",
  },
  {
    quote : "우리가 무슨 생각을 하느냐가 우리가 어떤 사람이 되는지를 결정한다.",
    author : "오프라 윈프리",
  },
  {
    quote : "세상은 고통으로 가득하지만 한편 그것을 이겨내는 일로도 가득 차 있다.",
    author : "헬렌켈러 ",
  },
  {
    quote : "어릴 적 나에겐 정말 많은 꿈이 있었고, 그 꿈의 대부분은 많은 책을 읽을 기회가 많았기에 가능했다고 생각한다. ",
    author : "빌 게이츠",
  },
  {
    quote : "'때문에' 라고 말하는 사람보다 '덕분에' 라고 말하는 사람이 성공한다.",
    author : "양광모, <비상>",
  },
  {
    quote : "거짓말이 달아준 날개로 당신은 얼마든지 멀리 갈 수 있습니다. 그렇지만 다시 돌아오는 길은 어디에도 없어요.",
    author : "파울로 코엘료 '마법의 순간' 中",
  },
]

const quoteEl = document.querySelector('#quote span:first-child') 
const authorEl = document.querySelector('#quote span:last-child')
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]

quoteEl.innerText = todaysQuote.quote;
authorEl.innerText = todaysQuote.author;
// console.log(todaysQuote.quote)
// console.log(todaysQuote.author)
// console.log(quotes)
