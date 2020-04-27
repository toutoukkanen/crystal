'use strict';

console.log('skripti alkaa');
const xhr = new XMLHttpRequest();
xhr.open('get', 'https://raw.githubusercontent.com/toutoukkanen/crystal/master/documents/level1_incident_report7.html', true);                // Kerrotaan XMLHttpRequest-oliolle metodi ja osoite, johon pyyntö lähetetään sekä vaihdetaan toiminta synkroniseksi (true)
xhr.onreadystatechange = printLink;                         // Kuunnellaan muutoksia latauksen tilassa, ja aina kun muutoksia tapahtuu ajetaan naytaKuva-funktio
xhr.send(null);                                             // Lähetetään pyyntö     

function printLink() 
{                    
  if (xhr.readyState === 4 && xhr.status === 200) 
  {         
    // Create a clone file of the raw HTML
    var clonePage = document.createElement('html');
    clonePage.innerHTML = xhr.responseText;

    //var p = document.querySelector('p');
    //p.innerHTML = clonePage.querySelector('p').innerHTML;



    console.log('asynkroninen lataus valmis');
  }
}

console.log('skripti päättyy');
