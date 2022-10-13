const quotes = [
{
    quote : "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
    author : "로버트 하우머",
},
{
    quote : "언제나 현재에 집중할수 있다면 행복할것이다.",
    author : "파울로 코엘료",
},
{
    quote : "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해",
    author : "찰리 채플린",
},
{
    quote : "피할수 없으면 즐겨라.",
    author : "로버트 엘리엇",
},
{
    quote : "행복한 삶을 살기위해 필요한 것은 거의 없다.",
    author : "마르쿠스 아우렐리우스 안토니우스",
},
{
    quote : "계단을 밟아야 계단 위에 올라설수 있다.",
    author : "튀르키에",
},
{
    quote : "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다.",
    author : "단테",
},
{
    quote : "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다",
    author : "톰 모나건",
},
{
    quote : "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",
    author : "괴테",
},
{
    quote : "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
    author : "괴테",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;