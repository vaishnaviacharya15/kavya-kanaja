const poems = [

{
    title: "ಪ್ರಕೃತಿ",
    author: "Kuvempu",
    content: "ಪ್ರಕೃತಿಯ ಸೌಂದರ್ಯವನ್ನು ವರ್ಣಿಸುವ ಕವನ"
},

{
    title: "ಭರವಸೆ",
    author: "Bendre",
    content: "ಭರವಸೆಯ ಸಂದೇಶ ನೀಡುವ ಕವನ"
}

];

const container =
document.getElementById("poemContainer");

function displayPoems(data) {

    container.innerHTML = "";

    data.forEach(poem => {

        container.innerHTML += `

        <div class="poem-card">

            <h2>${poem.title}</h2>

            <h4>${poem.author}</h4>

            <p>${poem.content}</p>

        </div>

        `;
    });
}

displayPoems(poems);

document.getElementById("searchInput")
.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    const filtered = poems.filter(poem =>

        poem.title.toLowerCase().includes(value)

    );

    displayPoems(filtered);

});
