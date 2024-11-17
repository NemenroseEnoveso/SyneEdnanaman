document.getElementById('assignment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('assignment-name').value;
    const deadline = document.getElementById('assignment-deadline').value;
    const list = document.getElementById('assignment-list');
    const listItem = document.createElement('li');
    listItem.innerText = `${name} - Due: ${deadline}`;
    list.appendChild(listItem);
  });
  