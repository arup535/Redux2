import React from "react";

function Home(props){
    console.warn('Home props->', props);


    return(
        <div>
            <div className="add-to-cart">
                <img src="https://pngimg.com/d/shopping_cart_PNG20.png" ></img>
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                <img className="iphone" src="https://pngimg.com/d/iphone_11_PNG26.png"></img>
                {/* <img className="iphone" src="https://pngimg.com/d/iphone_11_PNG26.png" style={{width:100, height:150}}></img> */}
                {/* shopping_cart_PNG28.png */}
                </div>
                <div className="txt-wrapper item">
                    <span style={{display:"flow"}}>i-Phone</span>
                    <span>Price: $100</span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={
                        ()=>props.addToCartHandler({price:100, name:"I-phone"})
                        
                        }>Add To Cart
                     </button>
                </div>
            </div>
        </div>
    )
}
export default Home;