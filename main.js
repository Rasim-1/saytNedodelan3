const ProductsData = [
{
    img:'./img/card.png',
    title:'3D Soft Curves',
user:'🤬 Esther Howard',
price:'0.85 ETH'


},
{
    img:'./img/card2.png',
    title:'The mystery of the black square',
user:'😋 Jenny Wilson',
price:'0.24 ETH '


},
{
    img:'./img/card3.png',
    title:'Pink Cloud 🌥',
user:'😎 Floyd Miles',
price:'0.3 ETH'


},
{
    img:'./img/card4.png',
    title:'3D Ethereum',
user:'😶‍🌫️ Jane Cooper',
price:'0.12 ETH'


},
]
const ProductsData2 = [
  {
        img:'./img/img1.png',
        title:'3D Soft Curves',
    user:'😶‍🌫️Esther Howard',
    price:'0.85 ETH'
    
    
    },{
        img:'./img/img2.png',
        title:'3D Soft Curves',
        user:'😶‍🌫️Esther Howard',
        price:'0.85 ETH'
    
    
    },{
        img:'./img/img3.png',
        title:'3D Soft Curves',
        user:'😶‍🌫️Esther Howard',
        price:'0.85 ETH'
    
    
    },{
        img:'./img/img4.png',
        title:'3D Soft Curves',
        user:'😶‍🌫️Esther Howard',
        price:'0.85 ETH'
    
    
    },{
        img:'./img/img5.png',
        title:'3D Soft Curves',
        user:'😶‍🌫️Esther Howard',
        price:'0.85 ETH'
    
    
    },{
        img:'./img/img6.png',
        title:'3D Soft Curves',
        user:'😶‍🌫️Esther Howard',
        price:'0.85 ETH'
    
    
    },{
        img:'./img/img7.png',
        title:'3D Soft Curves',
        user:'😶‍🌫️Esther Howard',
        price:'0.85 ETH'
    
    
    },{
        img:'./img/img8.png',
        title:'3D Soft Curves',
        user:'😶‍🌫️Esther Howard',
        price:'0.85 ETH'
    
    
    },{
        img:'./img/img9.png',
        title:'3D Soft Curves',
        user:'😶‍🌫️Esther Howard',
        price:'0.85 ETH'
    
    
    },{
        img:'./img/img10.png',
        title:'3D Soft Curves',
        user:'😶‍🌫️Esther Howard',
        price:'0.85 ETH'
    
    
    },{
        img:'./img/img11.png',
        title:'3D Soft Curves',
        user:'😶‍🌫️Esther Howard',
        price:'0.85 ETH'
    
    
    },
{
    img:'./img/card.png',
    title:'3D Soft Curves',
    user:'😶‍🌫️Esther Howard',
    price:'0.85 ETH'


},
]

const wrapper = document.querySelector('.live__wrapper1')
const cards = ProductsData.map(card => {
    return `
      <div class="live__card">
            <img src="${card.img}" alt="" class="live__card-img" />
            <div class="live__card-box">
              <h3>${card.title}</h3>

              <div>
                <p>${card.user}</p>
                <p>
                  Current Bid <br />
                  <b>${card.price}</b>
                </p>
              </div>
            </div>
          </div>
    `
}).join('')
wrapper.innerHTML = cards

const wrapper2 = document.querySelector('.live__wrapper2')
const cards2 = ProductsData2.map(card => {
    return `
      <div class="live__card">
            <img src="${card.img}" alt="" class="live__card-img" />
            <div class="live__card-box">
              <h3>${card.title}</h3>

              <div>
                <p>${card.user}</p>
                <p>
                  Current Bid <br />
                  <b>${card.price}</b>
                </p>
              </div>
            </div>
          </div>
    `
}).join('')
wrapper2.innerHTML = cards2
