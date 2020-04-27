'use strict';

// TODO:
// Add clearance check

const button = document.querySelector('button');
button.addEventListener("click", auth);

function auth()
{
  var level1List = document.getElementById('level1');

  // Clean up the list
  while(level1List.hasChildNodes())
  {
    level1List.removeChild(level1List.firstChild);
  }


  getLevel1Data("https://raw.githubusercontent.com/toutoukkanen/crystal/master/documents/level1_incident_report7.html");
  getLevel1Data('https://raw.githubusercontent.com/toutoukkanen/crystal/master/documents/level1_regarding_your_job.html');
}

async function getLevel1Data(url) 
{  
  try
  {
    const vastaus = await fetch(url);              // Käynnistetään haku.
    if (!vastaus.ok) throw new Error('jokin meni pieleen'); // Jos tapahtuu virhe, heitetään ilmoitus
    const rawHTML = await vastaus.text();                   // Catch raw HTML text got from url
     
     
    var clonePage = document.createElement('html');
    clonePage.innerHTML = rawHTML; // Convert the raw HTML text to a legit page

    var level1List = document.getElementById('level1');

    // Add new elements
    var li = document.createElement('li'); 
    var a = document.createElement('a');
    li.appendChild(a);

    let parsedURL = url.split('/'); // Divide the path in parts
    a.href = 'documents/' + parsedURL[parsedURL.length - 1]; // Assign the local link as the href
    a.innerHTML = clonePage.querySelector('title').innerHTML; // Find the title to name the link

    level1List.appendChild(li); 

  } catch (error) {                                          // Otetaan heitetty virheilmoitus kiinni
    console.log(error)
  }                  
}