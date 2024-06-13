<!DOCTYPE html>
<html>
<head>
  <title>Chatbot Test</title>
</head>
<body>
  <!-- Simple Chatbot HTML -->
  <div id="chatbot" style="position: fixed; bottom: 20px; right: 20px;">
    <button onclick="toggleChat()" style="padding: 10px 20px; background-color: #007BFF; color: #FFF; border: none; border-radius: 5px;">Chat with Space</button>
    <div id="chatbox" style="display:none; border: 1px solid #ddd; border-radius: 5px; padding: 10px; background-color: #f9f9f9; width: 300px;">
      <p>Hey! I’m Space. How can I help you today?</p>
      <input type="text" id="userInput" placeholder="Type your question here" style="width: 100%; padding: 5px;">
      <button onclick="respond()" style="padding: 5px 10px; background-color: #007BFF; color: #FFF; border: none; border-radius: 5px; margin-top: 5px;">Send</button>
      <p id="response"></p>
    </div>
  </div>

  <script>
    function toggleChat() {
      var chatbox = document.getElementById('chatbox');
      if (chatbox.style.display === 'none') {
        chatbox.style.display = 'block';
      } else {
        chatbox.style.display = 'none';
      }
    }

    function respond() {
      var input = document.getElementById('userInput').value.toLowerCase();
      var response = '';

      if (input.includes('about')) {
        response = 'Here is the About page link: <a href="/about">About</a>';
      } else if (input.includes('housing')) {
        response = 'Here is the Housing page link: <a href="/housing">Housing</a>';
      } else if (input.includes('centers')) {
        response = 'Here is the Centers page link: <a href="/centers">Centers</a>';
      } else if (input.includes('connect')) {
        response = 'Here is the Connect page link: <a href="/connect">Connect</a>';
      } else {
        response = 'I’m not sure. Can you ask in a different way or fill out this <a href="https://forms.gle/your_google_form_link">feedback form</a>?';
      }

      document.getElementById('response').innerHTML = response;
    }
  </script>
</body>
</html>
