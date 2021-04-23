const url = "https://bruxellesdata.opendatasoft.com/api/records/1.0/search/?dataset=geldautomaten-kopie&q=";
let records;
const main = document.querySelector('main');

// use fetch api to get data from an url
// after a while (by using the 'then' notation) we call upon a function that 
// jsonifies the response
// after this has been done, it can take a while, we call upon yet another function
// this last function uses the json data and gives the commands that effectively make the content
// appear on screen.
fetch(url).then(function(response) {
    response.json().then(function(json) {
      records = json.records;
      addAllATM(records);

    });
  });
 
  function addAllATM(records){
    //loop over all records
    records.forEach(record => 
        addATM(record.fields)
    );

  }

  function addATM(ATM){


    const section = document.createElement('section');
    const heading = document.createElement('h3');
 
    const adresNL = document.createElement('p');
    const adresFR = document.createElement('p');
    const Coordinat = document.createElement('p');
    
    heading.textContent = ATM.agence;

    adresNL.textContent = 'Adres(NL): ' + ATM.adresse_nl;

    adresFR.textContent = 'Adresse(FR): ' + ATM.adresse_fr;

    Coordinat.textContent = 'Coordinates: ' + ATM.coord;



    main.appendChild(section);
    section.appendChild(heading);
    section.appendChild(adresNL);
    section.appendChild(adresFR);
    section.appendChild(Coordinat);

  }

