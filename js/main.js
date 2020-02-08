let count = 0;

document.addEventListener("DOMContentLoaded", function(){
	document.querySelector(".increment").addEventListener("click", function(){
		let domAmount = document.getElementsByTagName("input")[0].value;
		let amount = parseInt(domAmount);
		let test = count + amount;
		if(test) {
			count += parseInt(domAmount);
			let domCount = document.querySelector(".count");
			if(count < 0){
				domCount.classList.add("negative");
			} else {
				domCount.classList.remove("negative");
			}
			domCount.innerText = count;

		}

	})
	document.querySelector(".decrement").addEventListener("click", function(){
		let domAmount = document.getElementsByTagName("input")[0].value;
		let amount = parseInt(domAmount);
		let test = count + amount;
		if(test){
		
			count -= parseInt(domAmount);
			let domCount = document.querySelector(".count");
			if(count < 0){
				domCount.classList.add("negative");
			} else {
				domCount.classList.remove("negative");
			}
			domCount.innerText = count;
		}
	})
})