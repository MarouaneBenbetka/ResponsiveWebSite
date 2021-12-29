console.warn("Don't forget to run this cmd on your terminal in order to save the input data to you json file");
console.log("cmd = json-server --watch data.json");
let comments = [];
let floatElements = document.querySelectorAll("img , .offer ion-icon");
let continu = true ; 

//floating imgs
const floatFunction = function () {
  floatElements.forEach(function (e) {
    e.classList.add("floating");
  });
};

//end floating

const addComment =  (ev) => {
  ev.preventDefault();

  let comment = {
    id: Date.now(),
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    comment: document.getElementById("comment").value,
  };
continu = true ; 
  for ( var property in comment ){
      if(property !== "id"){
 x = document.getElementById(property).classList ; 
      if ( comment[property] === ''  ) {
          continu = false ; 
          x.add("error");
      }
      else {
        x.remove("error");
      }
      }
      
     
  }
if( continu){
  alert(`Nom: ${comment.name} \nEmail:${comment.email}  \nComment:${comment.comment} \nThank for using our web site`)

  const res =   fetch('http://localhost:3000/comments' , {
    method : 'POST' , 
    body : JSON.stringify(comment) ,
    headers: {
      "Content-type": "application/json; charset=UTF-8"
  }
})

  

  comments.push(comment);

  //reset values for next input
  document.getElementById("name").value = null;
  document.getElementById("email").value = null;
  document.getElementById("comment").value = null;

  //for display  only
  console.warn("added", { comments });

  floatFunction();
}
else {

}
};
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submit").addEventListener("click", addComment);
});