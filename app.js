console.log('link confirmation')


const catArr = [
    {
        name: 'Vanilla',
        price: 8,
        amount: 0
    },
    {
        name: 'Strawberry',
        price: 7,
        amount: 0
    },
    {
        name: 'Mint',
        price: 8,
        amount: 0
    },
    {
        name: 'Chocolate',
        price: 6,
        amount: 0
    }
]

function buyCat(catName) {
    console.log('Buy Cat', catName)
    let foundCat = catArr.find(cat => cat.name ==catName)
    console.log(foundCat)
    foundCat.amount++
    updateCart()
}

function updateCart() {
    console.log('updating cart')
    let template = ''
    catArr.forEach(cat => {
        if (cat.amount > 0) {
            template += `<div class="d-flex justify-content-around align-items-baseline">
            <span>${cat.name}</span>
            <span>x${cat.amount}</span>
            <span>$ ${cat.price}</span>
            <button onclick="goodbyeCat('${cat.name}')" class="btn"><i class="mdi mdi-delete"></i></button>
        </div>`
        }
    })
    console.log(template)
    document.getElementById('cart').innerHTML = template
    updateTotal()
}

function updateTotal() {
    console.log('Total is getting updated')
    let total = 0
    catArr.forEach(cat => {
        if (cat.amount > 0) {
            total += cat.amount * cat.price
        }
    })
    console.log(total, 'total')
    document.getElementById('total').innerText = total.toString() 
}

function goodbyeCat(catName) {
    console.log('removing', catName)
}