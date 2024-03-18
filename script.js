const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	return fruit.filter(el => el.toLowerCase().includes(str.toLowerCase()));
}

// Event listener for input changes
function searchHandler(e) {
	// TODO
	const inputValue = this.value.trim();
	const filteredResults = search(inputValue)
    if (inputValue) {
        showSuggestions(filteredResults, inputValue);
        suggestions.style.display = 'block';
    } else {
        suggestions.innerHTML = '';
        suggestions.style.display = 'none';
    }
	
}

function showSuggestions(results, inputVal) {
	// TODO
    suggestions.innerHTML = '';
    results.forEach(inputVal => {
        const li = document.createElement('li');
        li.textContent = inputVal;
        suggestions.appendChild(li);
    });

}

// Event listener for suggestion item click
function useSuggestion(e) {
	// TODO
	if (e.target.tagName === 'LI') {
        input.value = e.target.textContent;
        suggestions.innerHTML = '';
        suggestions.style.display = 'none';
    }
}

// Close suggestions when clicking outside the search box
document.addEventListener('click', function(e) {
    if (!input.contains(e.target)) {
        suggestions.innerHTML = '';
        suggestions.style.display = 'none';
    }
});

// Event listener for input changes
input.addEventListener('keyup', searchHandler);
// Event listener for suggestion item click
suggestions.addEventListener('click', useSuggestion);