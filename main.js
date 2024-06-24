document.addEventListener("click", function() {
    const list = document.querySelector('.container')
    new Sortable(list, { animation: 600 })
})