let quoteContent = document.getElementById("quote-content")
let quotes = [
    { "quoteWords": "The only way to do great work is to love what you do.", "quoteAuthor": "Steve Jobs" },
    { "quoteWords": "In three words I can sum up everything I've learned about life: it goes on.", "quoteAuthor": "Robert Frost" },
    { "quoteWords": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "quoteAuthor": "Ralph Waldo Emerson" },
    { "quoteWords": "Be yourself; everyone else is already taken.", "quoteAuthor": "Oscar Wilde" },
    { "quoteWords": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "quoteAuthor": "Albert Einstein" },
    { "quoteWords": "The purpose of our lives is to be happy.", "quoteAuthor": "Dalai Lama" },
    { "quoteWords": "Life is what happens when you're busy making other plans.", "quoteAuthor": "John Lennon" },
    { "quoteWords": "Get busy living or get busy dying.", "quoteAuthor": "Stephen King" },
    { "quoteWords": "You only live once, but if you do it right, once is enough.", "quoteAuthor": "Mae West" },
    { "quoteWords": "The best way to predict the future is to invent it.", "quoteAuthor": "Alan Kay" },
    { "quoteWords": "To live is the rarest thing in the world. Most people exist, that is all.", "quoteAuthor": "Oscar Wilde" },
    { "quoteWords": "It is never too late to be what you might have been.", "quoteAuthor": "George Eliot" },
    { "quoteWords": "The truth will set you free, but first it will make you miserable.", "quoteAuthor": "James A. Garfield" },
    { "quoteWords": "Everything you can imagine is real.", "quoteAuthor": "Pablo Picasso" },
    { "quoteWords": "If you tell the truth, you don't have to remember anything.", "quoteAuthor": "Mark Twain" },
    { "quoteWords": "A room without books is like a body without a soul.", "quoteAuthor": "Marcus Tullius Cicero" },
    { "quoteWords": "The only thing necessary for the triumph of evil is for good men to do nothing.", "quoteAuthor": "Edmund Burke" },
    { "quoteWords": "Those who cannot remember the past are condemned to repeat it.", "quoteAuthor": "George Santayana" },
    { "quoteWords": "Imagination is more important than knowledge.", "quoteAuthor": "Albert Einstein" },
    { "quoteWords": "Do not go where the path may lead, go instead where there is no path and leave a trail.", "quoteAuthor": "Ralph Waldo Emerson" },
    { "quoteWords": "Not all those who wander are lost.", "quoteAuthor": "J.R.R. Tolkien" },
    { "quoteWords": "It is our choices that show what we truly are, far more than our abilities.", "quoteAuthor": "J.K. Rowling" },
    { "quoteWords": "If you want to live a happy life, tie it to a goal, not to people or things.", "quoteAuthor": "Albert Einstein" },
    { "quoteWords": "We are what we pretend to be, so we must be careful about what we pretend to be.", "quoteAuthor": "Kurt Vonnegut" },
    { "quoteWords": "A person who never made a mistake never tried anything new.", "quoteAuthor": "Albert Einstein" },
    { "quoteWords": "In the end, we will remember not the words of our enemies, but the silence of our friends.", "quoteAuthor": "Martin Luther King Jr." },
    { "quoteWords": "The only thing we have to fear is fear itself.", "quoteAuthor": "Franklin D. Roosevelt" },
    { "quoteWords": "Success is not final, failure is not fatal: It is the courage to continue that counts.", "quoteAuthor": "Winston Churchill" },
    { "quoteWords": "It does not matter how slowly you go as long as you do not stop.", "quoteAuthor": "Confucius" },
    { "quoteWords": "The greatest glory in living lies not in never falling, but in rising every time we fall.", "quoteAuthor": "Nelson Mandela" },
    { "quoteWords": "The way to get started is to quit talking and begin doing.", "quoteAuthor": "Walt Disney" },
    { "quoteWords": "Don’t watch the clock; do what it does. Keep going.", "quoteAuthor": "Sam Levenson" },
    { "quoteWords": "I have not failed. I've just found 10,000 ways that won't work.", "quoteAuthor": "Thomas Edison" },
    { "quoteWords": "The future belongs to those who believe in the beauty of their dreams.", "quoteAuthor": "Eleanor Roosevelt" },
    { "quoteWords": "What lies behind us and what lies before us are tiny matters compared to what lies within us.", "quoteAuthor": "Ralph Waldo Emerson" },
    { "quoteWords": "Life isn’t about finding yourself. Life is about creating yourself.", "quoteAuthor": "George Bernard Shaw" },
    { "quoteWords": "Do what you can, with what you have, where you are.", "quoteAuthor": "Theodore Roosevelt" },
    { "quoteWords": "It always seems impossible until it's done.", "quoteAuthor": "Nelson Mandela" },
    { "quoteWords": "We do not remember days, we remember moments.", "quoteAuthor": "Cesare Pavese" },
    { "quoteWords": "Time is money.", "quoteAuthor": "Benjamin Franklin" },
    { "quoteWords": "You miss 100% of the shots you don’t take.", "quoteAuthor": "Wayne Gretzky" },
    { "quoteWords": "The best revenge is massive success.", "quoteAuthor": "Frank Sinatra" },
    { "quoteWords": "Life is either a daring adventure or nothing at all.", "quoteAuthor": "Helen Keller" },
    { "quoteWords": "To love and be loved is to feel the sun from both sides.", "quoteAuthor": "David Viscott" },
    { "quoteWords": "The only limit to our realization of tomorrow is our doubts of today.", "quoteAuthor": "Franklin D. Roosevelt" },
    { "quoteWords": "The mind is everything. What you think you become.", "quoteAuthor": "Buddha" },
    { "quoteWords": "You must be the change you wish to see in the world.", "quoteAuthor": "Mahatma Gandhi" },
    { "quoteWords": "Happiness is not something ready-made. It comes from your own actions.", "quoteAuthor": "Dalai Lama" },
    { "quoteWords": "Life is short, and it is up to you to make it sweet.", "quoteAuthor": "Sarah Louise Delany" },
    { "quoteWords": "Everything has beauty, but not everyone sees it.", "quoteAuthor": "Confucius" },
    { "quoteWords": "In the middle of difficulty lies opportunity.", "quoteAuthor": "Albert Einstein" },
    { "quoteWords": "If you want to shine like the sun, first burn like the sun.", "quoteAuthor": "A.P.J. Abdul Kalam" },
    { "quoteWords": "What you get by achieving your goals is not as important as what you become by achieving your goals.", "quoteAuthor": "Zig Ziglar" },
    { "quoteWords": "Life is 10% what happens to us and 90% how we react to it.", "quoteAuthor": "Charles R. Swindoll" },
    { "quoteWords": "Act as if what you do makes a difference. It does.", "quoteAuthor": "William James" },
    { "quoteWords": "The only way to achieve the impossible is to believe it is possible.", "quoteAuthor": "Charles Kingsleigh" },
    { "quoteWords": "You can't use up creativity. The more you use, the more you have.", "quoteAuthor": "Maya Angelou" },
    { "quoteWords": "Success usually comes to those who are too busy to be looking for it.", "quoteAuthor": "Henry David Thoreau" },
    { "quoteWords": "The harder you work for something, the greater you'll feel when you achieve it.", "quoteAuthor": "Unknown" },
    { "quoteWords": "Dream big and dare to fail.", "quoteAuthor": "Norman Vaughan" },
    { "quoteWords": "Everything you’ve ever wanted is on the other side of fear.", "quoteAuthor": "George Addair" },
    { "quoteWords": "If you want to go fast, go alone. If you want to go far, go together.", "quoteAuthor": "African Proverb" },
    { "quoteWords": "The best way out is always through.", "quoteAuthor": "Robert Frost" },
    { "quoteWords": "You have within you right now, everything you need to deal with whatever the world can throw at you.", "quoteAuthor": "Brian Tracy" },
    { "quoteWords": "Believe you can and you're halfway there.", "quoteAuthor": "Theodore Roosevelt" },
]
console.log(quotes.length);

let lastRandomNumber = null;

function getQuote() {
    let randomInt = Math.floor(Math.random() * (quotes.length));
    //repetition solution 1
    if (lastRandomNumber === randomInt) {
        getQuote()
    } else {
        lastRandomNumber = randomInt;
    }
    //repetition solution 2  
    // do {
    //     randomInt = Math.floor(Math.random() * (quotes.length))
    // } while (lastRandomNumber === randomInt);

    console.log(randomInt);
    lastRandomNumber = randomInt;
    let randomQuote = quotes[randomInt];
    quoteContent.innerHTML = `

            <q id="quote-words">${randomQuote.quoteWords}</q>
            <p id="quote-Author" >-- ${randomQuote.quoteAuthor}</p>
     `
}

