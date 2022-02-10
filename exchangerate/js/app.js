
//UI
const currencyoneel = document.getElementById('currency-one'),
     amountoneel = document.getElementById('amount-one');

const currencytwoel = document.getElementById('currency-two'),
      amounttwoel = document.getElementById('amount-two');

     const swapel = document.getElementById('swap'),
            rateel = document.getElementById('rate');


 function calculate(){
 	// console.log('hay');

 	const crcyone = currencyoneel.value;
 	const crcytwo = currencytwoel.value;
 	// console.log(crcyone,crcytwo);

 	// https://v6.exchangerate-api.com/v6//latest/USD

 	const apikey="602e9b644ee169b79da13fb2";

 	const uri=`https://v6.exchangerate-api.com/v6/${apikey}/latest/${crcyone}`;
 	// console.log(uri);

 	fetch(uri)
 	.then(res => res.json())
 	.then(data => {
 		console.log(data);
 		// console.log(typeof data.conversion_rates);
 		const rate = data.conversion_rates[crcytwo];
 		console.log(rate);

 		rateel.innerHTML=`1  ${crcyone} = ${rate} ${crcytwo}`;
 		amounttwoel.value =(amountoneel.value * rate).toFixed(2);
 	})
 }


 currencyoneel.addEventListener('change',calculate);
 amountoneel.addEventListener('input',calculate);
 currencytwoel.addEventListener('change',calculate);
 amounttwoel.addEventListener('input',calculate);

 swapel.addEventListener('click',()=>{
 	// console.log('hay');
 	const temp = currencyoneel.value;
 	 // console.log(temp);
 	 currencyoneel.value = currencytwoel.value;
 	 currencytwoel.value = temp;
 	 calculate();
 })