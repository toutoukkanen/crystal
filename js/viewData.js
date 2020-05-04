'use strict';

//requirejs(["aes"], function(aes) {
//});

// JavaScript implementation of Java's HashCode
Object.defineProperty(String.prototype, 'hashCode', {
  value: function() {
    var hash = 0, i, chr;
    for (i = 0; i < this.length; i++) {
      chr   = this.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }
});

let salasana = "1234";
//console.log("Salis: " + salasana.hashCode());

let urli = "https://raw.githubusercontent.com/toutoukkanen/crystal/master/documents/level1_welcome_aboard.html";
//console.log("Urli: " + urli.hashCode());

//var encryptedData;
//var decryptedData = "invalid";

const button = document.querySelector("button");
button.addEventListener("click", checkLoginDetails);

var level1List = document.getElementById('level1');
var level2List = document.getElementById('level2');
var level3List = document.getElementById('level3');
var level4List = document.getElementById('level4');

const userName = document.getElementsByClassName('username')[0];
const passWord = document.getElementsByClassName('password')[0];


// If found username and password, authenticate
if(window.localStorage.getItem("username") && window.localStorage.getItem("password"))
{
  console.log("Skipped to auth");
  auth();
}

function checkLoginDetails()
{
  // If not empty and not same username
  if (userName.value != null && userName.value != window.localStorage.getItem("username"))
  {
    window.localStorage.setItem("username", userName.value);
     console.log("Username set");
  }

  // If not empty and not same password
  if (passWord.value != null && passWord.value != window.localStorage.getItem("password"))
  {
    window.localStorage.setItem("password", passWord.value);
    console.log("Password set");
  }

  auth();
}

function auth()
{

  // Clean up the lists whether the credentials are right or not
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

  if(window.localStorage.getItem("username") == "brown.kenneth" && window.localStorage.getItem("password") == "s4l4ry")
  {
    document.getElementById("loginText").innerHTML = "You are logged in as Kenneth Brown";

    getData(level1List, "https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level1_welcome_aboard.html");
    getData(level1List, "https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level1_incident_report7.html");
    getData(level1List, "https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level1_regarding_your_job.html");

    getData(level1List, "https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level1_personal_notes1.html");
    getData(level1List, "https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level1_userbase1.html");
    getData(level1List, "https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level1_fix_your_shit.html");

  }
  else if(window.localStorage.getItem("username") == "amelin.yuri" && window.localStorage.getItem("password") == "102xxT")
  {
    document.getElementById("loginText").innerHTML = "You are logged in as Yuri Amelin";

    //getData(level1List, "https://raw.githubusercontent.com/toutoukkanen/crystal/master/documents/level1_welcome_aboard.html");

    getData(level2List, "https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level2_regarding_your_job.html");
    getData(level2List, "https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level2_dc102.html");
    getData(level2List, "https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level2_derium.html");

    getData(level2List, "https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level2_dp22.html");
    getData(level2List, "https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level2_derium_applications1.html");
    getData(level2List, "https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level2_personal_notes1.html");
    
    getData(level2List, "https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level2_userbase1.html");
    getData(level2List, "https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level2_message.html");

  }
  else if(window.localStorage.getItem("username") == "thomson.jaxon" && window.localStorage.getItem("password") == "theyknowus")
  {
    document.getElementById("loginText").innerHTML = "You are logged in as Jaxon Thomson";

    getData(level1List, "https://raw.githubusercontent.com/toutoukkanen/crystal/master/documents/level1_welcome_aboard.html");

    getData(level3List, "https://raw.githubusercontent.com/toutoukkanen/crystal/master/documents/level3_regarding_your_job.html");
    getData(level3List, "https://raw.githubusercontent.com/toutoukkanen/crystal/master/documents/level3_hello_thomson.html");
    getData(level3List, "https://raw.githubusercontent.com/toutoukkanen/crystal/master/documents/level3_yuasa.html");

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
    const vastaus = await fetch(url);              // Start search
    if (!vastaus.ok) throw new Error('Resource not found from url ' + url); // If error happens, throw error
    const encryptedData = await vastaus.text();                   // Catch raw HTML text got from url

    // Try to decrypt data
    loadScript("./js/aes.js",decryptData.bind(null, encryptedData));

  } catch (error) 
  { // Catch error
    console.log(error)
  }                  
}

// Place items on list
function placeItemOnList(data)
{
  var clonePage = document.createElement('html');
  clonePage.innerHTML = data; // Convert the raw HTML text to a legit page

  //document.querySelector("html").innerHTML = clonePage.innerHTML;

  // Add new elements
  var li = document.createElement('li');
  //li.innerHTML = clonePage.querySelector('title').innerHTML;
  //level1List.appendChild(li);

  var a = document.createElement('a');
  li.appendChild(a);

  //let parsedURL = url.split('/'); // Divide the path in parts

  a.href = "#top"; // Assign link
  a.innerHTML = clonePage.querySelector('title').innerHTML; // Find the title to name the link

  // Add a clickable function to open document
  a.addEventListener("click", function()
  {
    document.querySelector("html").innerHTML = clonePage.innerHTML;

    // Replace css because working directory has apparently changed
    //var oldlink = document.getElementsByTagName("link").item(0);
    //var newlink = document.createElement("link");
    //newlink.setAttribute("rel", "stylesheet");
    //newlink.setAttribute("type", "text/css");
    //newlink.setAttribute("href", "./css/styles.css");
    //document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
  }); 

  // Determine, which list should the item be placed on
  var clearanceLevel;
  clearanceLevel = clonePage.querySelector('h3').innerHTML; // There should be only 1 h3 in each document
  
  if(clearanceLevel == "Clearance Level 1")
  {
    level1List.appendChild(li); 
  }
  else if(clearanceLevel == "Clearance Level 2")
  {
    level2List.appendChild(li); 
  }
  else if(clearanceLevel == "Clearance Level 3")
  {
    level3List.appendChild(li); 
  }
  else if(clearanceLevel == "Clearance Level 4")
  {
    level4List.appendChild(li); 
  }
}

function loadScript(path, callback, encryptedData)
{
    // Adding the script tag to the head as suggested before
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = path;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

function decryptData(encryptedData) 
{
  try 
  {
    var decrypted = CryptoJS.AES.decrypt(encryptedData, window.localStorage.getItem("password"));

    var decryptedData = decrypted.toString(CryptoJS.enc.Utf8);

    //console.log(decryptedData);

    placeItemOnList(decryptedData);
  }
  catch(err) 
  {
    console.log("Decryption failed");
  }

};
