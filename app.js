//  generate API KEY and storing it in constant..
 
 const API_KEY = 'd1f2fb69a847477fb35d1d12e225cf24';

//  then fetch API from that particular website..

fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=d1f2fb69a847477fb35d1d12e225cf24&query=pasta')
.then(response => {
return response.json();/*here the data of recipes we are getting in form of json*/

}).then(recipeArray)

.catch(function (err) {
  console.log(err);
});

// introducing function and giving the objects of data in arguments
function recipeArray(obj){

  let reciepes = obj.results;

  console.log(reciepes);

  console.log(typeof reciepes);

  // here using the map() function for printing the array of recipes
  document.getElementById("wrapper").innerHTML =(reciepes.map(recipe => 
    `
    <div class="main">
      <div class="content">
        <img  src="${recipe.image}" />
        <div class="title">${recipe.title}</div>
        <button type="button" class="btn">View Recipe</button>
     </div> 
    </div>`
).join(''));
}


