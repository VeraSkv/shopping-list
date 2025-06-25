/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
const input = document.querySelector('#input');
const items = document.querySelector('#items');

input.addEventListener('keydown', function(event) {

    if (event.key == "Enter") {
        const messageText = input.value;

        const newMessage = document.createElement('li');
        newMessage.textContent = messageText;

        newMessage.addEventListener('click', function() {
            newMessage.classList.toggle('done');

        });

        if (messageText != '') {
            items.append(newMessage);
        }

        input.value = '';
    }

});