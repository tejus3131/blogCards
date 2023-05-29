const cardHolder = document.querySelector('#card-holder')
const cardTitle = document.querySelector('#title');
const cardDesc = document.querySelector('#description');
const cardSource = document.querySelector('#source');
const addCardBtn = document.querySelector('#add-card');


let blogs = [];

function renderCards() {
    if (blogs.length == 0) {
        cardHolder.innerHTML = `No Blogs Added Yet`;
    }
    else {
        cardHolder.innerHTML = ``;
        blogs.forEach((card, index) => {
            const cardItem = document.createElement('li');
            cardHolder.classList.add('card-item');
            cardItem.innerHTML = `
            <div class="card">
                <img name="image" class="image" src="${card.source}" />
                <label for="image" class="head"><strong>${card.title}</strong></label>
                <label for="image" class="desc">${card.desc}</label>
                <div class="commands">
                    <button class="btn edit" data-index="${index}">Edit</button>
                    <button class="btn delete" data-index="${index}">Delete</button>
                </div>
            </div>
            `;
            cardHolder.appendChild(cardItem);
        })
    }
}

function addCard() {
    const title = cardTitle.value;
    const desc = cardDesc.value;
    const source = cardSource.value;
    const card = {
        title: title,
        desc: desc,
        source: source
    };
    blogs.push(card);
    cardTitle.value = "";
    cardDesc.value = "";
    cardSource.value = "";
    console.log(blogs)
    renderCards();
}

function deleteCard(index) {
    blogs.splice(index, 1);
    renderCards();
}

function editCard(index) {
    const title = cardTitle.value;
    const desc = cardDesc.value;
    const source = cardSource.value;
    const card = {
        title,
        desc,
        source
    }
    blogs.splice(index, 1, card);
    renderCards();
}

addCardBtn.addEventListener('click', addCard);

cardHolder.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        deleteCard(e.target.dataset.index);
    }
    if (e.target.classList.contains('edit')) {
        editCard(e.target.dataset.index);
    }
});


renderCards();