var list, addlink;

list = document.getElementById('tasks')

function changeText2() {
    var list = document.getElementById('entry').value;
    document.getElementById('entry').innerHTML = task;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(task));
    list.appendChild(entry);
}

addlink.addEventListener('click', addItem, false);