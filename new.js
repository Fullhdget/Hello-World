function set_text(id, text) {
    document.getElementById(id).innerHTML = text
}
function first() {
    set_text('first', 'Новый заголовок')
}
function second() {
    set_text('second', 'Параграф 1')
}
function third() {
    set_text('third', 'Параграф 2')
}
function quad() {
    set_text('quad', 'Параграф 3')
}
function clear_page() {
    set_text('first', 'Очищено')
    set_text('second', '')
    set_text('third', '')
    set_text('quad', '')
}