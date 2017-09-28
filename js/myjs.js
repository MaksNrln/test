var cont = document.getElementById('info');
var contacts_height = cont.offsetHeight;
console.log(contacts_height);
var sidebar = document.getElementById('side');
sidebar.style.height = contacts_height+"px";

var buttonsvar = document.getElementById('facebook');
var buttons_height = buttonsvar.offsetHeight;
var sendbut = document.getElementById('send');
sendbut.style.height = buttons_height+"px";

function validate()
{
	var nameperem;
	var numperem;
var ourname =document.forms["myForm"]["fname"].value;
if (ourname==null || ourname=="")
  {
  nameperem = 0;
  }
  else
  {
  nameperem = 1;
  }


var ournumber =document.forms["myForm"]["fnumber"].value;
if (ournumber==null || ournumber=="")
  {
  numperem = 0;
  }
  else
  {
  	numperem = 1;
  }

console.log(nameperem);
console.log(numperem);

 var result = nameperem && numperem;

  if(result==false)
  {
  	alert("Вы не ввели данные");
  }
  else
  {
  	alert("Заявка успешно отправлена");
  }
}

$(document).ready(function() {

    $('#phoneInput').keypress(function(key) {

        if(key.charCode < 48 || key.charCode > 57) return false;
    });

        $('#nameInput').keypress(function(key)  {
    	if((key.charCode < 1040 || key.charCode > 1103) && (key.charCode!=1105)) return false;
    });
    });



