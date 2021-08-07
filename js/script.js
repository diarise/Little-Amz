var  item1 = document.querySelector(".item1");
var  item2 = document.querySelector(".item2");
var  item3 = document.querySelector(".item3");

var search = document.querySelector(".fa-search");

function showItems(){
	item1.style.display = "flex";
	item2.style.display = "flex";
	item3.style.display = "flex";
}
function click(show){
	search.addEventListener("click", show);
}

click(showItems);