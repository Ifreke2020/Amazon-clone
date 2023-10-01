
let productsDisplay = ''; 

//looping through all the product in the 'data.js'
products.forEach( (AllProduct) => {
  productsDisplay += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image" src="${AllProduct.image}">
      </div>

    <div class="product-name limit-text-to-2-lines">
      ${AllProduct.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars" src="${AllProduct.rating.stars}">

      <div class="product-rating-count link-primary">
      ${AllProduct.rating.count}
      </div>
    </div>

    <div class="product-price">
      $${(AllProduct.priceCents / 100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
      <select class="option-js">
        <option selected  value="1">1</option>
        <option  value="2">2</option>
        <option  value="3">3</option>
        <option  value="4">4</option>
        <option  value="5">5</option>
        <option  value="6">6</option>
        <option  value="7">7</option>
        <option  value="8">8</option>
        <option  value="9">9</option>
        <option  value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>

   ${/*Here we use dataset to get all the product printedout */''}
  <button class="add-to-cart-button button-primary js-add-cart" data-product-id ='${AllProduct.id}'>
      Add to Cart
    </button>
  </div>`
})


let gridEl = document.querySelector('.products-grid');
  gridEl.innerHTML = productsDisplay;




  //FUNCTION TO BE EXECUTED WHEN WE CLICK ANY BUTTON ON THE WEB PAGE

const productButtons = document.querySelectorAll('.add-to-cart-button');
  const selectQuantityProduct = document.querySelectorAll('.option-js');
    const selectButton = document.querySelectorAll('.option-js');
      let matchingId ;
        let cartProduct = []

productButtons.forEach ( (button) => {
  button.addEventListener('click', () =>{

    const productId = button.dataset.productId;
  

    cartProduct.forEach( (items) =>{
      if(productId === items.cartProductId )
       matchingId = items
       return true
    })


    // for (i = 0; i < selectButton.length; i++ ){
    //   let optionBtn = selectButton[i]
    //     optionBtn.onchange = (e) => {
    //    let selectResult = Number(e.target.value);
       
    //    if(matchingId){
    //     matchingId.quantity
    //     }else{
    //       cartProduct.push({
    //         cartProductId:productId,
    //         quantity:selectResult
    //       })
    //   }
  
    //    }
    // }
 
    
    
    

   let resultCart = 0
    cartProduct.forEach( (itemsResult) =>{
      resultCart += itemsResult.quantity
    })
    
      
      
      
 

    console.log(cartProduct)
    let cartQuantity = document.querySelector('.js-cart-quantity');
      cartQuantity.textContent = resultCart

  })
})


