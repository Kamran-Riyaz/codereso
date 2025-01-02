function updateTimeDate() {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
  const formattedDate = currentDate.toLocaleString('en-US', options);
  document.getElementById('time-date').textContent = formattedDate;
}

updateTimeDate(); // Initialize with current date/time
setInterval(updateTimeDate, 1000); // Update every second


const quotes = [
  "First, solve the problem. Then, write the code. – John Johnson",
  "In order to be irreplaceable, one must always be different. – Coco Chanel",
  "Programs must be written for people to read, and only incidentally for machines to execute. – Harold Abelson",
  "The most disastrous thing that you can ever learn is your first programming language. – Alan Kay",
  "Good code is its own best documentation. – Steve McConnell",
  "The best way to predict the future is to invent it. – Alan Kay",
  "Programming isn't about what you know; it's about what you can figure out. – Chris Pine",
  "Talk is cheap. Show me the code. – Linus Torvalds",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler",
  "Software is like gardening, a system is like a garden that grows, the better you maintain it, the better it will perform. – Unknown",
  "Computer science is no more about computers than astronomy is about telescopes. – Edsger Dijkstra",
  "It’s not that we use technology, we live technology. – Godfrey Reggio",
  "The computer was born to solve problems that did not exist before. – Bill Gates",
  "The most important property of a program is whether it accomplishes the intention of its user. – C.A.R. Hoare",
  "Computers are incredibly fast, accurate, and stupid. Humans are incredibly slow, inaccurate, and brilliant; together they are powerful beyond imagination. – Albert Einstein",
  "Computer science is a tool for helping us understand the world. – Jeff Dean",
  "The question is not whether machines think but whether men do. – B.F. Skinner",
  "The goal of computer science is to understand the nature of computation and the development of efficient algorithms to solve problems. – Unknown",
  "It's not a bug, it's an undocumented feature. – Anonymous"
];

function displayQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Display the random quote
  document.getElementById('quote').textContent = randomQuote;
}

// Display the quote immediately when the page loads
displayQuote();
