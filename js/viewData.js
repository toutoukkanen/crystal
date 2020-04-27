'use strict';

// TODO:
// Add clearance check

function getLevel1Data(url)
{
    const xhr = new XMLHttpRequest();
    xhr.open('get', url, true);                // Kerrotaan XMLHttpRequest-oliolle metodi ja osoite, johon pyyntö lähetetään sekä vaihdetaan toiminta synkroniseksi (true)
    xhr.onreadystatechange = printLink;                         // Kuunnellaan muutoksia latauksen tilassa, ja aina kun muutoksia tapahtuu ajetaan naytaKuva-funktio
    xhr.send(null);                                             // Lähetetään pyyntö     
    
    function printLink() 
    {                    
      if (xhr.readyState === 4 && xhr.status === 200) 
      {         
        // Create a clone file of the raw HTML
        var clonePage = document.createElement('html');
        clonePage.innerHTML = xhr.responseText;
    
        var level1List = document.getElementById('level1');
    
        var li = document.createElement('li');
    
        var a = document.createElement('a');
        li.appendChild(a);

        let parsedURL = url.split('/'); // Divide the path in parts
        a.href = 'documents/' + parsedURL[parsedURL.length - 1]; // Assign the local link as the href
        a.innerHTML = clonePage.querySelector('title').innerHTML; // Find the title to name the link

        level1List.appendChild(li); 
    
      }
    }
}

getLevel1Data('https://raw.githubusercontent.com/toutoukkanen/crystal/master/documents/level1_incident_report7.html');
getLevel1Data('https://raw.githubusercontent.com/toutoukkanen/crystal/master/documents/level1_regarding_your_job.html');




