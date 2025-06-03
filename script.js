/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
const input = document.querySelector('#input');
const items = document.querySelector('#items');

input.addEventListener('enter', function() {
    const messageText = input.value;

    const newMessage = document.createElement('div');
    newMessage.classList.add('#input');
    newMessage.textContent = messageText;

    if (messageText != '') {
        items.append(newMessage);
    }

    input.value = '';
});

newMessage.addEventListener('enter', function() {
    //newMessage.classList.add('done');
    newMessage.classList.toggle('done');

});