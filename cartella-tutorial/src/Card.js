import React from 'react';
const img = "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/b11551_1.jpg"
const price = "22,00€"
function Card() {
  return (
    <div className="box-card">
        <img className="image-box-card" src={img} alt="Bidoo img" />
        <h3>card punti</h3>
        {/* l'utilizzo della parentesi graffa indica che si sta passando al js: */}
        <h3>{price}</h3>
    </div>
  )
}

export default Card