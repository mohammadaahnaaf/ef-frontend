export function setupController(element) {

    const searchBox = document.getElementById('searchBox');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', () => {
        if (searchBox.style.display === 'none') {
            searchBox.style.display = 'block';
        } else {
            searchBox.style.display = 'none';
        }
    });
}