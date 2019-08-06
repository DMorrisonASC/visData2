fetch("https://randomuser.me/api/?results=1")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    useData(myJson);
  });

function useData(data) {
  // puts profile picture
  const picture = document.getElementById("picture");
  picture.src = data.results[0].picture.medium;
  //
  const firstName = document.getElementById("firstName");
  firstName.innerText = `${data.results[0].name.first} ${
    data.results[0].name.last
  }`;

  const userName = document.getElementById("userName");
  userName.innerText = `${data.results[0].login.username}`;

  const number = document.getElementById("number");
  number.innerText = `${data.results[0].cell}`;

  const gender = document.getElementById("gender");
  gender.innerText = `${data.results[0].gender}`;
}
// Search Users Section
const submit_female = document.getElementById("submit-female");
submit_female.addEventListener("click", getData);

const submit_male = document.getElementById("submit-male");
submit_male.addEventListener("click", getData);

function getData(e) {
  const buttonValue = e.target.value;
  // console.log();

  fetch(`https://randomuser.me/api/?gender=${buttonValue}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      useData(myJson);
    });
}
