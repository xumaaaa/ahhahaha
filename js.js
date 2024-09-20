const catalog = [
    {
        img: 'https://assets.asaxiy.uz/product/items/desktop/ca4b33532855080dfa79cf8a925d146d2022070212255616781FD0Ihf0S5g.png.webp',
        name: 'Atomic Habit',
        years: '2015',
        description: 'Not bad ',
        Price: '50 000'
    },
    {
        img: 'https://assets.asaxiy.uz/product/items/desktop/c81be6b20f1f55474f7faf88616cd3142020041910160731633MaCWeimKcX.jpg.webp',
        name: 'Тонкое искусство пофигизма',
        years: '2018',
        description: 'My favourite book  ',
        Price: '59 000'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_xRTH06hChAlfUpxhro-vTWteCKTMpQSbSw&s',
        name: 'Ilon Mask',
        years: '2021',
        description: 'Perfect Book',
        Price: '129 000'
    }
]

const wrapper = document.querySelector('.wrapper')


catalog.forEach(card => {
        wrapper.innerHTML += `
        <div class="card">
                     <img src="${card.img}" alt="">
                    <h1>${card.name}</h1>
                    <h3>${card.years}</h3>
                    <p>${card.description}</p>
                    <h4>${card.Price}</h4>
                </div>
        `
})