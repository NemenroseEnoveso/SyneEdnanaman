async function loadNewQuote() {
    try {
      const response = await fetch('data/motivational-quotes.json'); // Ensure correct path
      if (!response.ok) {
        throw new Error('Failed to fetch quotes');
      }
  
      const quotes = await response.json();
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById('quote').innerText = randomQuote; // Display random quote
    } catch (error) {
      console.error('Error loading quote:', error);
      document.getElementById('quote').innerText = 
        'Unable to load a new quote at the moment. Please try again later.';
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    loadNewQuote(); // Load an initial quote
  
    const newQuoteButton = document.getElementById('new-quote-btn'); // Use correct button ID
    newQuoteButton.addEventListener('click', loadNewQuote); // Attach event listener
  });
  
  