document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        "Life is 10% what happens to us and 90% how we react to it.",
        "The best time to plant a tree was 20 years ago. The second best time is now.",
        "It does not matter how slowly you go as long as you do not stop.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        "Believe you can and you're halfway there.",
        "When you have a dream, you've got to grab it and never let go.",
        "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
        "No matter what you're going through, there's a light at the end of the tunnel.",
        "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        "The only limit to our realization of tomorrow will be our doubts of today.",
        "Do not watch the clock; do what it does. Keep going.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "You are never too old to set another goal or to dream a new dream.",
        "Try to be a rainbow in someone's cloud.",
        "You do not find the happy life. You make it.",
        "The most wasted of days is one without laughter.",
        "You must do the thing you think you cannot do.",
        "Life changes very quickly, in a very positive way, if you let it.",
        "Keep your face always toward the sunshine—and shadows will fall behind you."
    ];

    let currentIndex = Math.floor(Math.random() * quotes.length);

    function getDailyQuote() {
        document.getElementById('quote').textContent = quotes[currentIndex];
    }

    function getNextQuote() {
        currentIndex = (currentIndex + 1) % quotes.length;
        getDailyQuote();
    }

    function setWelcomeMessage() {
        const today = new Date();
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayName = dayNames[today.getDay()];
        const formattedDate = `${dayName}, ${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`;
        document.getElementById('welcome-message').textContent = `Hello dear visitor, today is ${formattedDate}`;
    }

    setWelcomeMessage();
    getDailyQuote();

    document.getElementById('next-quote').addEventListener('click', getNextQuote);
});
