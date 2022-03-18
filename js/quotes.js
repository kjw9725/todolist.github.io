quotes = [
    {
        quote: '나이가 60이다 70이다 하는 것으로 그 사람이 늙었다 젊었다 할 수 없다. 늙고 젊은 것은 그 사람의 신념이 늙었느냐 젊었느냐 하는데 있다. ',
        author: '맥아더'
    },
    {
        quote: '1퍼센트의 가능성, 그것이 나의 길이다.',
        author: '나폴레옹'
    },
    {
        quote: '행복한 삶을 살기위해 필요한 것은 거의 없다.',
        author: '마르쿠스 아우렐리우스 안토니우스'
    },
    {
        quote: '겨울이 오면 봄이 멀지 않으리',
        author: '셸리'
    },
    {
        quote: '최고에 도달하려면 최저에서 시작하라.',
        author: 'P.시루스'
    },
    {
        quote: '문제는 목적지에 얼마나 빨리 가느내가 아니라 그 목적지가 어디냐는 것이다.',
        author: '메이벨 뉴컴버'
    },
    {
        quote: '절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다',
        author: 'L.론허바드'
    },
    {
        quote: '언제나 현재에 집중할수 있다면 행복할것이다.',
        author: '파울로 코엘료'
    },
    {
        quote: '꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다. ',
        author: '괴테'
    },
    {
        quote: '진짜 문제는 사람들의 마음이다. 그것은 절대로 물리학이나 윤리학의 문제가 아니다.',
        author: '아인슈타인'
    }
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");
const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;