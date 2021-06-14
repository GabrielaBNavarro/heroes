let heroes=JSON.parse(localStorage.getItem('heroes'))|| [];
updateTable(heroes);








function updateTable(array){
    clearTable()
    array.forEach(function(element,index){
        let row = document.createElement('tr')
        row.classList = 'text-center'
        let data = `
        <td>${element.name}</td>
        <td>${element.alias}</td>
        <td>${element.superpower}</td>
        <td>${element.team}</td>
        <td><img src="${element.image}" alt="${element.alias}"></td>
        `
        row.innerHTML = data;
        let tBody = document.querySelector('#tableBody')
        tBody.appendChild(row)
        
    });
  }


  function clearTable(){
    document.querySelector('#tableBody').innerHTML=""
}


