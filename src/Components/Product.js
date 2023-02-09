import { Image } from "./Image";
import React from "react";

export const Product = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our &nbsp; Products</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {/* {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."} */}


 <div class="hero-container">
  

		<div class="main-container">
			<div class="poster-container">
				<a href="#"><img src="img/WWJTOTEBAG001, Camel Suede Leather All By Hand Stitching.jpeg" class="poster" /></a>
			</div>
			<div class="ticket-container">
				<div class="ticket__content">
					<h4 class="ticket__movie-title">Jute Bag</h4>
					<p class="ticket__movie-slogan">
						
            Color: Brown<br/>
            Brand: Bluehorse<br/>
            Pattern: Plain<br/>
            Size: 16x14x4 inch<br/>
            Country of Origin: Made in India
					</p>
					<p class="ticket__current-price">$2.00</p>
					<p class="ticket__old-price">$3</p>
					<button class="ticket__buy-btn">Buy now</button>
				</div>
			</div>
		</div>

		<div class="main-container">
			<div class="poster-container">
				<a href="#"><img src="img/Denttabs toothpaste tablets with fluoride and no plastic.jpeg" class="poster" /></a>
			</div>
			<div class="ticket-container">
				<div class="ticket__content">
					<h4 class="ticket__movie-title">bamboo ToothBrush</h4>
					<p class="ticket__movie-slogan">Beco Wooden Bamboo Toothbrush with Charcoal Activated Ultra-Soft Bristles <br/>
          | Pack of 4 | <br/>
          100% Environment Friendly<br/>
           Biodegradable and Compostable</p>
					<p class="ticket__current-price">$2.75</p>
					<p class="ticket__old-price">$4.99</p>
					<button class="ticket__buy-btn">Buy now</button> 
				</div>
			</div>
		</div>



		<div class="main-container">
			<div class="poster-container">
				<a href="#"><img src="img/Other - Wood Turning_ New Tankard.jpeg" class="poster" /></a>
			</div>
			<div class="ticket-container">
				<div class="ticket__content">
					<h4 class="ticket__movie-title">Wooden Cup</h4>
					<p class="ticket__movie-slogan">
          Color: Brown<br/>
          Size: Medium<br/>
          Usage/Application: Restaurant<br/>
          Packaging Type: Carton Box<br/>
          Brand: Tamanna handicrafts
					</p>
					<p class="ticket__current-price">$6.00</p>
					<p class="ticket__old-price">$9.00</p>
					<button class="ticket__buy-btn">Buy now</button>
				</div>
			</div>
		</div>


    </div>

   
   



<div class="hero-container2">

    <div class="main-container">
			<div class="poster-container">
				<a href="#"><img src="img/download (3).jpeg" class="poster" /></a>
			</div>
			<div class="ticket-container">
				<div class="ticket__content">
					<h4 class="ticket__movie-title">Dust pan</h4>
					<p class="ticket__movie-slogan">
          Type: Dustpan<br/>
          Color: gray<br/>
          Brand: sortyvo
					</p>
					<p class="ticket__current-price">$4.00</p>
					<p class="ticket__old-price">$4.00</p>
					<button class="ticket__buy-btn">Buy now</button>
				</div>
			</div>
		</div>





    <div class="main-container">
			<div class="poster-container">
				<a href="#"><img src="img/Ancient Beauty Rituals_ Dry Brushing + Gua Sha - Glean & Glow.jpeg" class="poster" /></a>
			</div>
			<div class="ticket-container">
				<div class="ticket__content">
					<h4 class="ticket__movie-title">Wooden Washing Brush</h4>
					<p class="ticket__movie-slogan">
          Brand: Pawa<br/>
          Note: 1 Pack Contain 6 Pieces<br/>
          size:Customized
          
					</p>
					<p class="ticket__current-price">$4.00</p>
					<p class="ticket__old-price">$4.00</p>
					<button class="ticket__buy-btn">Buy now</button>
				</div>
			</div>
		</div>


    <div class="main-container">
			<div class="poster-container">
				<a href="#"><img src="img/Wabi-sabi_ The ancient Japanese philosophy that is becoming a big interiors trend _ IMAGE_ie.png" class="poster" /></a>
			</div>
			<div class="ticket-container">
				<div class="ticket__content">
					<h4 class="ticket__movie-title">Spoons for Cooking</h4>
					<p class="ticket__movie-slogan">
          ADLORYEA Kitchen Utensils Set for Nonstick Cookware<br/>
           5-Piece Wood Spatulas Spoons Kitchen Tools <br/>
           Made by Eco-friendly Natural Teak for Cooking & Serving
					</p>
					<p class="ticket__current-price">$12.00</p>
					<p class="ticket__old-price">$13.99</p>
					<button class="ticket__buy-btn">Buy now</button>
				</div>
			</div>
		</div>


  </div>
	

	

  





            </div>
          </div>
        </div>
      </div>
    


  );
};