let heroes=JSON.parse(localStorage.getItem('heroes'))|| [];
class Hero {
  constructor(name, alias,superpower , team, image) {
    this.name = name;
    this.alias = alias;
    this.superpower = superpower;
    this.team = team;
    this.image = image;

  }
}
let tBody = document.querySelector('#tableBody')
if(tBody){
updateTable();

}






function updateTable(){
    clearTable()
    let heroes=JSON.parse(localStorage.getItem('heroes'))|| [];
    if (heroes==[]) {
      heroes.push(new Hero("Steven 'Steve' Grant Rogers","Captain America","Enhanced strength, speed, stamina, durability, agility, reflexes, senses, and mental processing via the super soldier serum","Avengers","http://pngimg.com/uploads/captain_america/captain_america_PNG22.png"))
    }
    heroes.forEach(function(element,index){
        let row = document.createElement('tr')
        row.classList = 'text-center'
        let data = `
        <td>${element.name}</td>
        <td>${element.alias}</td>
        <td>${element.superpower}</td>
        <td>${element.team}</td>
        <td>
        <div class="align-content-center">
        <button class="btn btn-warning btSize" onclick='heroInfo(${index})'>
                <i class="fa fa-eye" aria-hidden="true"></i>
                </button>
                <button class="btn btn-info btSize" onclick='heroModif(${index})'>
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>
                <button class="btn btn-danger btSize" onclick='heroDel(${index})'>
                <i class="fa fa-trash-o" aria-hidden="true"></i>
                </button>
                </div>
                </td>

        `
        row.innerHTML = data;
        
        tBody.appendChild(row)
        
    });
  }

  function heroInfo(id) {
    // console.log(id);
    hero = heroes[id];
  
    document.querySelector("#title-modal").innerText = hero.alias;
    document.querySelector(".hero-title").innerText = hero.name;
    document.querySelector("#hero-img").src = hero.image;
    document.querySelector("#text-superpower").innerText = hero.superpower;
    document.querySelector("#text-team").innerText = hero.team;
    $("#heroModal").modal("show");
  }
  


  function clearTable(){
    document.querySelector('#tableBody').innerHTML=""
}
function heroDel(id) {
  hero = heroes[id];

  let check = confirm(`Are you sure you want to delete ${hero.alias} ?`);

  if (check) {
    heroes.splice(id, 1);
    localStorage.setItem("heroes", JSON.stringify(heroes));

    alert(` ${hero.alias} deleted`);
    updateTable();
  }
}

function heroModif(indice) {
  hero = heroes[indice];
  // console.log(heroe);
  document.querySelector("#modif_title").innerText = hero.alias;
  document.querySelector("#nameModif").value = hero.name;
  document.querySelector("#superpowerModif").value = hero.superpower;
  document.querySelector("#teamModif").value = hero.team;
  document.querySelector("#imageModif").value = hero.image;

  $("#modifModal").modal("show");
}

function handleChange(e) {
  

  heroe = {
    ...heroe,
    [e.target.name]: e.target.value,
  };

  
}


function updateHero(e) {
  e.preventDefault(); 

  
  let index = heroes.findIndex(function (item) {
    return item.alias === hero.alias;
  });

 
  heroes.splice(index, 1, heroe);

  localStorage.setItem("heroes", JSON.stringify(heroes));
  cargarTabla();

 
  $("#modifModal").modal("hide");
}




