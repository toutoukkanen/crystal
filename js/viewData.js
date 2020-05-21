'use strict';

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
  
  // Load hashing script and send password to it
  loadScript("./js/sha224.js",hashData.bind(null, window.localStorage.getItem("password")));
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
    // Acceptable in this context
    window.localStorage.setItem("password", passWord.value);
    console.log("Password set");
  }

  // Load hashing script and send password to it
  loadScript("./js/sha224.js",hashData.bind(null, window.localStorage.getItem("password")));
}

function auth(hashString)
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

  // Check password with hash and then get encrypted documents from github
  if(window.localStorage.getItem("username") == "brown.kenneth" && hashString == "b3d6d82d529affabc06fbbd9dc2f203e64c635cb9ea4e5b397a10dd5")
  {
    document.getElementById("loginText").innerHTML = "You are logged in as Kenneth Brown";

    getData("https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level1_welcome_aboard.html");
    getData("https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level1_incident_report7.html");
    getData("https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level1_regarding_your_job.html");

    getData("https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level1_personal_notes1.html");
    getData("https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level1_userbase1.html");
    getData("https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level1_fix_your_shit.html");

  }
  else if(window.localStorage.getItem("username") == "amelin.yuri" && hashString == "7dcdab2dc73ac0ff13d587ec56df4157c3b6a5c9af5d44f7666939e5")
  {
    document.getElementById("loginText").innerHTML = "You are logged in as Yuri Amelin";

    getData("https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level2_regarding_your_job.html");
    getData("https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level2_derium.html");
    getData("https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level2_dc102.html");
    
    getData("https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level2_dp22.html");
    getData("https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level2_message.html");
    getData("https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level2_message1.html");

    getData("https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level2_message2.html");
    getData("https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level2_message3.html");
    getData("https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level2_record.html");

    getData("https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level2_derium_applications1.html");
    getData("https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level2_personal_notes1.html");

  }
  else if(window.localStorage.getItem("username") == "thomson.jaxon" && hashString == "eab2bcd3618d0d5b9bff76eade91769bcdee948657675f075fd9f5fd")
  {
    document.getElementById("loginText").innerHTML = "You are logged in as Jaxon Thomson";

    getData("https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level3_regarding_your_job.html");
    getData("https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level3_lower_level_boys.html");
    getData("https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level3_hello_thomson.html");

    getData("https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level3_personal_notes1.html");
    getData("https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level3_problems.html");
    getData("https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level3_problems2.html");

    getData("https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level3_yuasa.html");
    getData("https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level3_anand.html");

  }
  else if(window.localStorage.getItem("username") == "jones.michael" && hashString == "cf85a7cb3a7190b8cee18aa5b159053dfe9127597907711f8ca19f8d")
  {
    document.getElementById("loginText").innerHTML = "You are logged in as Michael Jones";

    getData("https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level4_corruption.html");
    getData("https://raw.githubusercontent.com/toutoukkanen/crystal/pseudocrypt/documents/level4_my_legacy.html");

  }
  else 
  {
    document.getElementById("loginText").innerHTML = "Error: invalid username or password";
  }

}

async function getData(url) 
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

  // Add new elements
  var li = document.createElement('li');
  var a = document.createElement('a');
  li.appendChild(a);

  a.href = ""; // Assign link
  a.innerHTML = clonePage.querySelector('title').innerHTML; // Find the title to name the link

  // Add a clickable function to open document
  a.addEventListener("mousedown", function()
  {
    // Mouse 3 opens document in new tab
    var pressedButton = event.buttons;
    if (pressedButton == 4)
    {
      // Create new tab
      var documentWindow = window.open("");

      documentWindow.document.write(clonePage.innerHTML);
    }
    // Mouse 1 opens document in current tab
    else if (pressedButton == 1)
    {
      document.write(clonePage.innerHTML);
    }


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

function loadScript(path, callback, data)
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


function hashData(data)
{
  try
  {
    var hash = CryptoJS.SHA224(data);
    var hashString = hash.toString();

    // Now try to authenticate
    auth(hashString);
  }
  catch(err)
  {
    console.log("Hashing failed: " + err);
  }
};

// Used to decrypt documents
function decryptData(encryptedData) 
{
  try 
  {
    var decrypted = CryptoJS.AES.decrypt(encryptedData, window.localStorage.getItem("password"));

    var decryptedData = decrypted.toString(CryptoJS.enc.Utf8);

    placeItemOnList(decryptedData);
  }
  catch(err) 
  {
    console.log("Decryption failed: " + err);
  }

};
