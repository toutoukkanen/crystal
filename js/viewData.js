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

var encryptedData;
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

    getData(level1List, "https://raw.githubusercontent.com/toutoukkanen/crystal/master/documents/level1_welcome_aboard.html");

    getData(level2List, "https://raw.githubusercontent.com/toutoukkanen/crystal/master/documents/level2_regarding_your_job.html");
    getData(level2List, "https://raw.githubusercontent.com/toutoukkanen/crystal/master/documents/level2_dc102.html");
    getData(level2List, "https://raw.githubusercontent.com/toutoukkanen/crystal/master/documents/level2_derium.html");

    getData(level2List, "https://raw.githubusercontent.com/toutoukkanen/crystal/master/documents/level2_dp22.html");
    getData(level2List, "https://raw.githubusercontent.com/toutoukkanen/crystal/master/documents/level2_derium_applications1.html");
    getData(level2List, "https://raw.githubusercontent.com/toutoukkanen/crystal/master/documents/level2_personal_notes1.html");
    
    getData(level2List, "https://raw.githubusercontent.com/toutoukkanen/crystal/master/documents/level2_userbase1.html");
    getData(level2List, "https://raw.githubusercontent.com/toutoukkanen/crystal/master/documents/level2_message.html");

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
    const rawHTML = await vastaus.text();                   // Catch raw HTML text got from url
     
    encryptedData = rawHTML;

    // Try to decrypt file
    loadScript("./js/aes.js", decryptData);

    //console.log(decryptedData);

    /*
    const secondFunction = async () => {
      const result = await loadScript("./js/aes.js", decryptData) 
      // do something else here after firstFunction completes

      console.log("Finished");
      console.log(decryptedData);

    }

    secondFunction();
    */


    //let decryptedData;

    //loadScript("./js/aes.js", decryptData); 

    //console.log(decryptedData);








    //var clonePage = document.createElement('html');
    //clonePage.innerHTML = rawHTML; // Convert the raw HTML text to a legit page



    // Add new elements
    //var li = document.createElement('li'); 
    //var a = document.createElement('a');
    //li.appendChild(a);

    //let parsedURL = url.split('/'); // Divide the path in parts
    //a.href = 'documents/' + parsedURL[parsedURL.length - 1]; // Assign the local link as the href
    //a.innerHTML = clonePage.querySelector('title').innerHTML; // Find the title to name the link

    //levelList.appendChild(li); 

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

      // Replace css because working directory has apparently changed
  //var oldlink = document.getElementsByTagName("link").item(0);
  //var newlink = document.createElement("link");
  //newlink.setAttribute("rel", "stylesheet");
  //newlink.setAttribute("type", "text/css");
  //newlink.setAttribute("href", "./css/styles.css");
  //document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);



  //console.log(clonePage);

  //console.log();

  // Add new elements
  var li = document.createElement('li');
  //li.innerHTML = clonePage.querySelector('title').innerHTML;
  //level1List.appendChild(li);

  var a = document.createElement('a');
  li.appendChild(a);

  //let parsedURL = url.split('/'); // Divide the path in parts

  a.href = "#top"; // Assign link
  a.innerHTML = clonePage.querySelector('title').innerHTML; // Find the title to name the link

  a.addEventListener("click", function()
  {
    document.querySelector("html").innerHTML = clonePage.innerHTML;

    // Replace css because working directory has apparently changed
    var oldlink = document.getElementsByTagName("link").item(0);
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "./css/styles.css");
    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
  }); 

  //a.onclick = document.querySelector("html").innerHTML = clonePage.innerHTML;

  level1List.appendChild(li); 
}

function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

//var myPrettyCode = function() 
function decryptData() 
{
  // Here, do whatever you want


  //console.log(encryptedData);

  //let katastrofi = "U2FsdGVkX19OL0mGNPzQWFLa8ORA5lU2dsBy0srT7ekMLRPUXRNI/Vk/lMdRVtX3ir9vS52vkuz1RS4fzKPfmDcz8t6TAbgFxtKyDASlwWihugYr9aX2CupnFhMJjWYAc9Lw5ICaeNkV9BrB7EmQ3eboyTal3+7+JrmquWOsZBC12nB9+Tzk9NMycStbPcVM2A51HsuJ1WisVpmkjBU/8+3pgiX1/WrEZ7ilmEEjK63f3D0Vr3GmHulh/Pp1K6QhyQW1KcpKnSJ2v/TS3oqJfuJL/4BQVk7tqpH1ybL/DGNKROKzMcQSHg81Cp51TVpjMurotyR1D2FIdC7tNnKYfcRSh440sTpqiq7aJdXemQw/gRAfCkxL0xCk7mifmrJq3/njcUhiEFwDqWPoUxha+HsIBU/1SP+eA5iCHaus4UCptwvMmTdP5mGIp1H2Cdp+F2Ujl347mbF67dpAn06O1fBxNOgecpTBz/PsvUooP+Oa9ZCnS4ROp3/37KcZYFM/IItF2Qmc1F6HWs3/M7mX+Hy9ng1yRR94HaCewcmqn/z/FksOEPRLdX8t4msZ4COpfX/nxGzggWBRJuoZ/D3P/+30ztdeuNFcj6U22WRDpGq+L3wa/3g/ID5BsXz3Xq+p9tYjCi79Qpz1dW8cfR9Gqn/j9tepu+e9MrxitwSdVts+ynp4lLLupNZqEsAHm+6ytORXQ5W3TLYj59EAnRaebau0WEBdjLZwYuonLOMi+RmQPgKoLcyPteXWq1NaEILAbij5yxqOedmHo6htDS8rumTplzWWtlUk87z0d0hs0H2s0V9HsqC65ifhZbP/18MXKzbyqzei83HyE87V4SNpOyGFqE0Mx/bEUe8fisiAPBC441IQYtTehAVRMFMxPy6/0kAKoQjbqMb/AJrcnUoQCdFK/oLLf95okeo4wY4fojuOCipnrXEqwZX6s/zhvOcS4E49reGEbyFpINkkBoUqLnjZ5qkppg9og/G2tPH86W8htfvGfgfH8kq+QrGitWTrRrhs/L6fkfURkkNSrAYCJEzRPa1KSwypjFTttds9K7a3SSYnYq3FuvDDVb6r3frPfM+3uumWXOA2DP2aj+z9H1N9i2JIlUmQIwmy1eK8HZMaYiMaLij4MdK4YhxdmXVw5mrsP5Hoh/FO+XCyIOf5CDO5+W0LiE0VyKWX4wsST/OZkerD9RffGkrNFLh6dNq9yZQK0P3G8v1TwcLni5DkPtKWChXAfWq73+4r9Ir5/Sh1GKZpESRYlBWETsxL1ESSKPJRK/hWB8rDQ+Q08C39X+fiEsf1VtqWDwQ/SrgMF6J+uHD7r5M1qOhITxPAp8bmAZIRNgCeGCkXPI7ShacBb9UZrHW8Jn+eLep3EibtRPh6SNE9gBHpRpkQ2h+1SJ6U1va9BqBrpAgO6drkjc2sWFgb6hwSRIYiNeHnMSQExknT12x1OSA8f+7t3TRLoBc1aWFtNDnieGJqSEiBlcEypQxmr+Q3gw0yMwACzkmO7xvLFSj7OXh6CYNudlI93DA7R4hGfUYyNMnAelaY8LlMM3+349/8n0ymBnF453qxox2LigtbrmLHtI5nQ/3iNxYi1/mZSlORsyim4bzXP4EgyTHQFXk+OSw0TRXOnpskjrwSsk7Q1Y/MHNLDbhIVyrr0+JlJWc6nbJJCSocmR8M0Z1mGLTNEGIxdPh+2WaPDOXiCx73Rzn8qjYkb7OypP+X7VjZ+07gcOvUcJg2PgODarAixjZ88P+4w9uMATDMsyNYZT0zqFURoIVupGykhZQsDghIb7Ji62FGuHhZhnoZYgVtQcAc5hypmrStfYb8jEYIoQAqE0SuEa/PK4SQa8hKFwCUeVk1xG7SCLNHsbgrB1cyNRnetvfEA+obRV8n8dElvESnBLQ/vtpeeBrHbb9gd";

  // Debub encrypt file
  
  /*
  var debugHTML = "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>Userbase1</title><style></style><link rel=\"stylesheet\" href=\"./css/styles.css\"></head><body><nav class=\"navbar clearfix\"><h1>Crystal Inc.</h1><ul><li><a href=\"./hub.html\">HOME</a></li><li><a href=\"./map.html\">MAP</a></li><li><a href=\"./secret.html\">SECRET</a></li></ul></nav><h1 class=\"h1\">Crystal data</h1><h3>Clearance Level 1</h3><table id=\"table\"><tr><th>Username</th><th>Login </th></tr><tr><td>enfield.john</td><td>DATA:LBzSpMccCr</td></tr><tr><td>amelin.yuri</td><td>102xxT</td></tr><tr><td>geiger.heinrich</td><td>DATA:fRz1V9uWDx</td></tr><tr><td>gray.ellen</td><td>DATA:0LBAQCyvZE</td></tr><tr><td>chapman.aris</td><td>DATA:bZtQ9zRsbR</td></tr><tr><td>desert.thomas</td><td>DATA:CtXaJYe18M</td></tr><tr><td>thomson.jaxon</td><td>DATA:DNrpmOsQmi</td></tr><tr><td>richardson.sylvia</td><td>DATA:aAeAHQUTno</td></tr><tr><td>white.ada</td><td>DATA:rGWbOdk3d8</td></tr><tr><td>griffiths.megan</td><td>DATA:O9RvuZulyR</td></tr><tr><td>perry.dave</td><td>DATA:Txok5PGMD9</td></tr><tr><td>anderson.lars</td><td>DATA:ZCQJ9kR6B7</td></tr></table><footer><p id=\"footertext\">HIDDEN CRYSTAL INC. FORUM</p></footer></body></html>";
  var debugEncrypted = CryptoJS.AES.encrypt(debugHTML, "s4l4ry");
  console.log(debugEncrypted.toString());
  */

  try 
  {
    var decrypted = CryptoJS.AES.decrypt(encryptedData, "s4l4ry");

    var decryptedData = decrypted.toString(CryptoJS.enc.Utf8);

    //console.log(decryptedData);

    placeItemOnList(decryptedData);
  }
  catch(err) 
  {
    console.log("Decryption failed");
  }

  
};
