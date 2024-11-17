document.getElementById('reminder-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const reminderText = document.getElementById('reminder-text').value;
    const reminderTime = document.getElementById('reminder-time').value;
    document.getElementById('reminder').innerText = `Reminder set: "${reminderText}" at ${reminderTime}`;
  });
  
  document.getElementById('travel-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const status = document.getElementById('travel-status').value;
    alert(`Status updated: ${status}`);
  });
  