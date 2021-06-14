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

  function addHero(){
    
      let name =document.querySelector('#name')
      let alias = document.querySelector('#alias')
      let superpower = document.querySelector('#superpower')
      let team = document.querySelector('#team')
      let image = document.querySelector('#imageUrl')

      if(!name.value||!alias.value || !superpower.value || !team.value|| !image.value){
        alert('Missing required fields ')
        name.focus()
      }else{
        let verify = verifyHero(name.value)
        if(verify){
          alert('This Hero already exists in our database.')
        }else{
          heroes.push(new Hero(name.value.toUpperCase(), alias.value.toUpperCase(),superpower.value.toUpperCase() , team.value.toUpperCase(), image.value))
      localStorage.setItem('heroes',JSON.stringify(heroes))
        }
      }
      updateDatabase();
      
  }
  function verifyHero(name){
    let verify = heroes.find(function(hero){
return hero.name.toLowerCase() === name.toLowerCase()
    })
    if (verify){
        return true;
    }else{
        return false;
    }
}
function updateDatabase(){
  document.querySelector("#name").value ="";
  document.querySelector("#name").focus();
  document.querySelector("#alias").value ="";
  document.querySelector("#superpower").value ="";
  document.querySelector("#team").value ="";
  document.querySelector("#imageUrl").value ="";
  heroes= JSON.parse(localStorage.getItem('heroes'));
  
}

heroes.push(new Hero('TONY STARK', 'IRON MAN','SUPERSONIC FLIGHT' , 'AVENGERS', 'https://i.pinimg.com/originals/87/d8/ec/87d8ec9aa24ca9a61584010cdfe21a14.png'))
      localStorage.setItem('heroes',JSON.stringify(heroes))
      heroes.push(new Hero('STEVE ROGERS', 'CAPTAIN AMERICA','ENHANCED STRENGHT' , 'AVENGERS', 'https://static.wikia.nocookie.net/disney/images/f/fa/Captain-America-AOU-Render.png'))
      localStorage.setItem('heroes',JSON.stringify(heroes))