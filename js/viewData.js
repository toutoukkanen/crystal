'use strict';

// TODO:
// Add clearance check

const button = document.querySelector("button");
button.addEventListener("click", auth);

var level1List = document.getElementById('level1');
var level2List = document.getElementById('level2');
var level3List = document.getElementById('level3');
var level4List = document.getElementById('level4');

const userName = document.getElementsByClassName('username')[0];
const passWord = document.getElementsByClassName('password')[0];

function auth()
{

  // Clean up the list
  while(level1List.hasChildNodes())
  {
    level1List.removeChild(level1List.firstChild);
  }

  while(level2List.hasChildNodes())
  {
    level2List.removeChild(level2List.firstChild);
  }

  while(level3List.hasChildNodes())
  {
    level3List.removeChild(level3List.firstChild);
  }

  while(level4List.hasChildNodes())
  {
    level4List.removeChild(level4List.firstChild);
  }


  if(userName.value == "brown.kenneth" && passWord.value == "s4l4ry")
  {
    document.getElementById("loginText").innerHTML = "You are logged in as Kenneth Brown";

    getData(level1List, "https://raw.githubusercontent.com/toutoukkanen/crystal/master/documents/level1_incident_report7.html");
    getData(level1List, "https://raw.githubusercontent.com/toutoukkanen/crystal/master/documents/level1_regarding_your_job.html");

    getData(level1List, "https://raw.githubusercontent.com/toutoukkanen/crystal/master/documents/level1_personal_notes1");
    getData(level1List, "https://raw.githubusercontent.com/toutoukkanen/crystal/master/documents/level1_fix_your_shit");
  }
  else 
  {
    document.getElementById("loginText").innerHTML = "Error: invalid username or password";
  }

}

async function getData(levelList, url) 
{  
  try
  {
    const vastaus = await fetch(url);              // Start search.
    if (!vastaus.ok) throw new Error('Resource not found from url ' + url); // If error happens, throw error
    const rawHTML = await vastaus.text();                   // Catch raw HTML text got from url
     
     
    var clonePage = document.createElement('html');
    clonePage.innerHTML = rawHTML; // Convert the raw HTML text to a legit page

    // Add new elements
    var li = document.createElement('li'); 
    var a = document.createElement('a');
    li.appendChild(a);

    let parsedURL = url.split('/'); // Divide the path in parts
    a.href = 'documents/' + parsedURL[parsedURL.length - 1]; // Assign the local link as the href
    a.innerHTML = clonePage.querySelector('title').innerHTML; // Find the title to name the link

    levelList.appendChild(li); 

  } catch (error) {                                          // Otetaan heitetty virheilmoitus kiinni
    console.log(error)
  }                  
}