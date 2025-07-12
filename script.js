//your JS code here. If required.
//get element from the page
const input = document.getElementById("ip");
const button = document.getElementById("btn");
const output = document.getElementById("output");

//button clicked
button.addEventListener("click",()=>{
	  const number = parseFloat(input.value);

    if (isNaN(number)) {
        output.innerText = "Please enter a valid number.";
        return;
    }

    output.innerText = ""; // Clear old result
// Step 1: Initial promise after 2 seconds
	new Promise((resolve)=>{
		setTimeout(()=>{
			output.innerText = `Result: ${number}`;
			resolve(number);//pass the value next .then
		},2000);
	})
		.then((value)=>{
			return new Promise((resolve)={
				setTimeout(()=>{
					const result = value*2;
					output.innerText = `Result: ${result}`;
					resolve(result);// Pass to next step
				},2000);
			});
		}).then((value)=>{
	       return new Promise((resolve)=>{
			   setTimeout(()=>{
				   const result = value-3;
				   output.innerText = `Result: ${result}`;
				   resolve(result);
			   },1000);
		   });
		}).then((value)=>{
	       return new Promise((resolve) => {
            setTimeout(() => {
                const result = value / 2;
                output.innerText = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
		}).then((value)=>{
	       return new Promise((resolve) => {
            setTimeout(() => {
                const result = value + 10;
                output.innerText = `Final Result: ${result}`;
                resolve(result);
            }, 1000);
        });
		});	

});
});