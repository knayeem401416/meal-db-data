function connect() {

    var searchText = document.getElementById('search').value ; 
   
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
   
    fetch(url)
    .then(res => res.json() )
    .then(data => showData(data));
   
    document.getElementById('search').value = ""; 

}
   
function showData(data){
   
        console.log("data from showData Function", data);
   
        var oldContent = document.getElementById('container');
        oldContent.textContent= "";
   
        for (var i=0; i<data.meals.length; i++){
        console.log(data.meals[i]);
   
        var newDiv = document.createElement('div');
        newDiv.innerHTML = `<div class="card" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title"> <b> Meal Title: </b> <span class="title-style">${data.meals[i].strMeal}  </span> </h5>
                                    <img class='img-style' src="${data.meals[i].strMealThumb}" >
                                    <div class="button">
                                        <a href="#" class="btn btn-primary">Order Now</a>
                                    </div>
                                </div>
                                </div>`;
                            newDiv.classList.add("meal-style");
   
                            oldContent.appendChild(newDiv);
        
   
        }
      
   
}