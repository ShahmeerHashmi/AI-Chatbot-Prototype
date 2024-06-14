function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    if (message) {
        addMessageToChatBox('user', message, 'user.png');
        userInput.value = '';

        // Simulate bot response
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            addMessageToChatBox('bot', botResponse, 'ai.png');
        }, 1000);
    }
}

function addMessageToChatBox(sender, message, imageUrl) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);

    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;

    const textElement = document.createElement('div');
    textElement.textContent = message;

    messageElement.appendChild(imageElement);
    messageElement.appendChild(textElement);
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    const responses = {
        'hello': 'Hi there!',
        'how are you': 'I am good, thank you!',
        'what is your name': 'I am an AI Chatbot.',
        'default': 'I didn\'t understand that. Can you please rephrase?',
        
        // Geography-related responses
        'what is the capital of france': 'The capital of France is Paris.',
        'largest desert in the world': 'The largest desert in the world is the Antarctic Desert.',
        'highest mountain in the world': 'The highest mountain in the world is Mount Everest.',
        
        // History-related responses
        'who was the first president of the united states': 'The first president of the United States was George Washington.',
        'when was world war 2': 'World War II was from 1939 to 1945.',
        'who discovered america': 'Christopher Columbus is often credited with discovering America in 1492.',
        //random
        'are you sure?':'yes',
        'general asim muneer':'meri jind meri jaan'
    };
    message = message.toLowerCase();
    return responses[message] || responses['default'];
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}
