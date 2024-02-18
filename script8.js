function searchAndHighlight() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    const listItems = document.querySelectorAll('#list li');

    for (let i = 0; i < listItems.length; i++) {
        const item = listItems[i];
        const itemText = item.textContent.toLowerCase();
        const highlightedText = highlightText(itemText, searchTerm);
        item.innerHTML = highlightedText;
    }
}

function highlightText(text, searchTerm) {
    if (!searchTerm) {
        return text;
    }

    const regex = new RegExp(searchTerm, 'gi');
    return text.replace(regex, match => `<span class="highlight">${match}</span>`);
}
