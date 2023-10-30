document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const messagesContainer = document.getElementById('messages');
    let currentIndex;
    let isEditing = false;

    const storeMessage = (message) => {
        const messages = getStoredMessages() || [];
        messages.push(message);
        localStorage.setItem('messages', JSON.stringify(messages));
    };

    const getStoredMessages = () => {
        return JSON.parse(localStorage.getItem('messages'));
    };

    const loadMessages = () => {
        const messages = getStoredMessages();
        if (messages) {
            messages.forEach((message, index) => {
                displayMessage(message, index);
            });
        }
    };

    const displayMessage = (message, index) => {
        const messageElement = document.createElement('div');
        messageElement.innerHTML = `
            <div class="alert alert-info">
                <strong>${message.name} (${message.email}):</strong>
                <p>${message.message}</p>
                <button class="btn btn-warning edit-btn" data-index="${index}">Edit</button>
                <button class="btn btn-danger delete-btn" data-index="${index}">Delete</button>
            </div>
        `;

        messagesContainer.appendChild(messageElement);

        const editButton = messageElement.querySelector('.edit-btn');
        editButton.addEventListener('click', () => {
            currentIndex = index;
            editMessage(index);
        });

        const deleteButton = messageElement.querySelector('.delete-btn');
        deleteButton.addEventListener('click', () => {
            deleteMessage(index);
        });
    };

    const editMessage = (index) => {
        if (isEditing) {
            cancelEdit(currentIndex);
        }
        const messages = getStoredMessages();
        const messageToEdit = messages[index];

        if (messageToEdit) {
            const messageElement = document.createElement('div');
            messageElement.innerHTML = `
                <div class="alert alert-info">
                    <input type="text" class="form-control" id="edited-name" value="${messageToEdit.name}">
                    <input type="email" class="form-control" id="edited-email" value="${messageToEdit.email}">
                    <textarea class="form-control" id="edited-message" rows="4">${messageToEdit.message}</textarea>
                    <button class="btn btn-success save-btn">Save</button>
                    <button class="btn btn-danger cancel-btn">Cancel</button>
                </div>
            `;

            messagesContainer.replaceChild(messageElement, messagesContainer.children[index]);

            const saveButton = messageElement.querySelector('.save-btn');
            saveButton.addEventListener('click', () => {
                saveEditedMessage(index);
            });

            const cancelButton = messageElement.querySelector('.cancel-btn');
            cancelButton.addEventListener('click', () => {
                cancelEdit(index);
            });
            isEditing = true;

        }
    };
    const saveEditedMessage = (index) => {
        const editedName = document.getElementById('edited-name').value;
        const editedEmail = document.getElementById('edited-email').value;
        const editedMessageText = document.getElementById('edited-message').value;

        const messages = getStoredMessages();
        const editedMessage = { name: editedName, email: editedEmail, message: editedMessageText };
        messages[index] = editedMessage;

        localStorage.setItem('messages', JSON.stringify(messages));
        refreshMessages();
    };

    const cancelEdit = (index) => {
        isEditing = false;
        refreshMessages();
    };

    const deleteMessage = (index) => {
        const messages = getStoredMessages();
        messages.splice(index, 1);
        localStorage.setItem('messages', JSON.stringify(messages));
        refreshMessages();
    };

    const refreshMessages = () => {
        messagesContainer.innerHTML = '';
        loadMessages();
    };

    loadMessages();

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const newMessage = { name, email, message };
        storeMessage(newMessage);

        currentIndex = getStoredMessages().length - 1;
        displayMessage(newMessage, currentIndex);

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    });

});