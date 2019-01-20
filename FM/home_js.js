var result,pinCodeResult,typeResult;


var searchHotelAddress = "";




function getValue()
{
    result = document.getElementById("searchValue").value;
    pinCodeResult = document.getElementById("dynamic-select").value;
    typeResult = document.getElementById("dynamic-select1").value;
    if(result.length != 0 || (pinCodeResult.length !=0 && pinCodeResult != "Please Pincode") || (typeResult.length !=0 && typeResult != "Please Type"))
    {
         searchHotelAddress = "";
         searchResult();
    }
    else
    {
       alert("search any name"); 
    }
}


function searchResult()
{

  var cityBool = false , pincodeBool = false, typeBool = false;

  for(i = 0; i < jValue.length; i++) 
  {
    var cityname = jValue[i].City;
    var pincodename = jValue[i].pincode;
    var typename = jValue[i].Type;
    var name = cityname.toLowerCase();
    name = name.trim();
    
    var pincode = pincodename.toLowerCase().trim();
    var type = typename.toLowerCase().trim();
    
    result = result.toLowerCase().trim();
    pinCodeResult = pinCodeResult.toLowerCase().trim()
    typeResult = typeResult.toLowerCase().trim()
    
    
    if(result.length != 0)
        cityBool = true;
    if(pinCodeResult.length != 0 && pinCodeResult != "please pincode")
        pincodeBool = true;
    if(typeResult.length != 0 && typeResult != "please type")
        typeBool = true;
        
       
    if(cityBool == true && pincodeBool == true && typeBool == true)
    {
    
		if(name == result && pincode == pinCodeResult && type == typeResult)
		{
		   searchHotelAddress += "Name : <b>" + jValue[i].Name + "</b>";
		   searchHotelAddress +="<br><br>";
	   
	   
		   var  hotelAddress = jValue[i].Address;
	   
		   searchHotelAddress += "Address : " +  hotelAddress.line1;
		   searchHotelAddress +="<br>";
		   searchHotelAddress += hotelAddress.line2;
	   
		   searchHotelAddress +="<br>";
		   searchHotelAddress +="<br>";
		   searchHotelAddress +="<br>";
	   
	  
		}
    
    }
    else if(cityBool == true && (pincodeBool == true || typeBool == true))
    {
       if(name == result && (pincode == pinCodeResult || type == typeResult))
		{
		   searchHotelAddress += "Name : <b>" + jValue[i].Name + "</b>";
		   searchHotelAddress +="<br><br>";
	   
	   
		   var  hotelAddress = jValue[i].Address;
	   
		   searchHotelAddress += "Address : " +  hotelAddress.line1;
		   searchHotelAddress +="<br>";
		   searchHotelAddress += hotelAddress.line2;
	   
		   searchHotelAddress +="<br>";
		   searchHotelAddress +="<br>";
		   searchHotelAddress +="<br>";
	   
	  
		}
        
    
    }
    else if((cityBool == true ||  typeBool == true) && pincodeBool == true)
    {   
        if((name == result || type == typeResult) && pincode == pinCodeResult)
		{
		   searchHotelAddress += "Name : <b>" + jValue[i].Name + "</b>";
		   searchHotelAddress +="<br><br>";
	   
		   var  hotelAddress = jValue[i].Address;
	   
		   searchHotelAddress += "Address : " +  hotelAddress.line1;
		   searchHotelAddress +="<br>";
		   searchHotelAddress += hotelAddress.line2;
	   
		   searchHotelAddress +="<br>";
		   searchHotelAddress +="<br>";
		   searchHotelAddress +="<br>";
	   
	  
		}
    
    }
    else if((cityBool == true || pincodeBool == true) && typeBool == true)
    {
        if((name == result || pincode == pinCodeResult) && type == typeResult)
		{
		   searchHotelAddress += "Name : <b>" + jValue[i].Name + "</b>";
		   searchHotelAddress +="<br><br>";
	   
	   
		   var  hotelAddress = jValue[i].Address;
	   
		   searchHotelAddress += "Address : " +  hotelAddress.line1;
		   searchHotelAddress +="<br>";
		   searchHotelAddress += hotelAddress.line2;
	   
		   searchHotelAddress +="<br>";
		   searchHotelAddress +="<br>";
		   searchHotelAddress +="<br>";
	   
	  
		}
    
    }
    else
    {
    
		if(name == result || pincode == pinCodeResult || type == typeResult)
		{
		   searchHotelAddress += "Name : <b>" + jValue[i].Name + "</b>";
		   searchHotelAddress +="<br><br>";
	   
	   
		   var  hotelAddress = jValue[i].Address;
	   
		   searchHotelAddress += "Address : " +  hotelAddress.line1;
		   searchHotelAddress +="<br>";
		   searchHotelAddress += hotelAddress.line2;
	   
		   searchHotelAddress +="<br>";
		   searchHotelAddress +="<br>";
		   searchHotelAddress +="<br>";
	   
	  
		}
    
    }

    
    
  }
  
  if(searchHotelAddress.length == 0)
  {
       searchHotelAddress += "<b> No Results Found...</b>";
  }
  
  setValue(); 


}


function setValue()
{
//alert(result);
   document.getElementById("resultValue").innerHTML = searchHotelAddress;
}


function clearValue()
{
   document.getElementById("searchValue").innerHTML = "";
   document.getElementById("resultValue").innerHTML = "";
   searchHotelAddress = "";
}









var jValue =  
[

	{
		"Id": "0001",
		"Name": "Ampa Crystal Inn",
		"Address": {
			"line1": " Old No. 349, New No. 623",
			"line2": "Poonamallee High Road, Aminjikarai"
		},
		"City": " Chennai",
		"State": "Tamil Nadu",
		"pincode": " 600029",
		"phone": " 044-23741999",
		"Type": "Budget",
		"Rooms": " 49",
		"MaxPrice": " INR 1200",
		"MinPrice": " INR 500"
	},

	{
		"Id": "0002",
		"Name": "Hotel Devi Prema Palace",
		"Address": {
			"line1": " 47, Ponamalle High Road",
			"line2": " Everest Hotel Building"
		},
		"City": " Chennai",
		"State": "Tamil Nadu",
		"pincode": " 600003",
		"phone": " 044-42042715",
		"Type": "Budget",
		"Rooms": " 48",
		"MaxPrice": " INR 1200",
		"MinPrice": " INR 500"
	},

	{
		"Id": "0003",
		"Name": "Hotel Mgm Grand",
		"Address": {
			"line1": " 31, Santhome High Road",
			"line2": " Mylapore"
		},
		"City": " Chennai",
		"State": "Tamil Nadu",
		"pincode": " 600004",
		"phone": " 044-24980320, 24980399",
		"Type": "Budget",
		"Rooms": " 26",
		"MaxPrice": " INR 1200",
		"MinPrice": " INR 500"
	},
	{
		"Id": "0004",
		"Name": "Hotel Sree Krishna",
		"Address": {
			"line1": " No. 274/159",
			"line2": "Peters Road"
		},
		"City": " Bangalore",
		"State": "Karnataka",
		"pincode": " 900086",
		"phone": " 088-28522897, 28525147",
		"Fax": "088-28525037",
		"Type": "Budget",
		"Rooms": " 13",
		"MaxPrice": " INR 1200",
		"MinPrice": " INR 500"
	},
	{
		"Id": "0005",
		"Name": "Krishna Residency",
		"Address": {
			"line1": " No. 37, Opposite To Kabaleeshwarar Koil",
			"line2": " South Mada Street, Mylapore"
		},
		"City": " Cochin",
		"State": "Kerala",
		"pincode": " 900004",
		"phone": " 048-24643617, 24641223",
		"Type": "Budget",
		"Rooms": " 24",
		"MaxPrice": " INR 1200",
		"MinPrice": " INR 500"
	},
	{
		"Id": "0006",
		"Name": "L R Swami Hotels Pvt Ltd",
		"Address": {
			"line1": " 105, Usman Road",
			"line2": " Thyagaraya Nagar"
		},

		"City": " Chennai",
		"State": "Tamil Nadu",
		"pincode": " 600017",
		"phone": " 044-24339769",
		"Type": "Budget",
		"Rooms": " 19",
		"MaxPrice": " INR 1200",
		"MinPrice": " INR 500"
	},
	{
		"Id": "0007",
		"Name": "Picnic Hotel Pvt Ltd",
		"Address": {
			"line1": " 1132/2, P H Road",
			"line2": " Park Town"
		},
		"City": " Coimbatore",
		"State": "Tamil Nadu",
		"pincode": " 600003",
		"phone": " 044-66785888, 66785889",
		"Type": "Budget",
		"Rooms": " 57",
		"MaxPrice": " INR 1200",
		"MinPrice": " INR 500"
	},
	{
		"Id": "0008",
		"Name": "Sudha Inn Pvt Ltd",
		"Address": {
			"line1": " New No. 111, (Old No.97)",
			"line2": " High Road"
		},

		"City": " Tirchy",
		"State": "Tamil Nadu",
		"pincode": " 600084",
		"phone": " 044-28252255",
		"Email": " hotelsudhainn@yahoo.co.in",
		"Website": " www.hotelsudha.in",
		"Type": "Budget",
		"Rooms": " 60",
		"MaxPrice": " INR 1200",
		"MinPrice": " INR 500"
	},
	{
		"Id": "0009",
		"Name": "Tourist Home",
		"Address": {
			"line1": " 45, Gandhi Irwin Road",
			"line2": " Egmore"
		},
		"City": " Chennai",
		"State": "Tamil Nadu",
		"pincode": " 600008",
		"phone": " 044-28194679 , 42146471",
		"Type": "Budget",
		"Rooms": " 64",
		"MaxPrice": " INR 1200",
		"MinPrice": " INR 500"
	},
	{
		"Id": "0010",
		"Name": "Hotel Mars Classic",
		"Address": {
			"line1": " 8, GST Road",
			"line2": " Pallavaram"
		},

		"City": " Chennai",
		"State": "Tamil Nadu",
		"pincode": " 600043",
		"phone": " 044-42076706, 42076707, 42076708, 42076709",
		"Email": " reservation@hotelmars.net",
		"Website": " www.marshotels.in",
		"Type": " 1 Star",
		"Rooms": " 36",
		"MaxPrice": " INR 2000",
		"MinPrice": " INR 1300"
	},
	{
		"Id": "0011",
		"Name": "Hotel New Park",
		"Address": {
			"line1": " 136 & 137, Bells Road",
			"line2": "  Near MAC, Chepauk"
		},
		"City": " Chennai",
		"State": "Tamil Nadu",
		"pincode": " 600005",
		"phone": " 044-28588889",
		"Email": " newparkp@yahoo.co.in",
		"Website": " www.hotelnewpark.co.in",
		"Type": " 1 Star",
		"Rooms": " 20",
		"MaxPrice": " INR 2000",
		"MinPrice": " INR 1000"
	},
	{
		"Id": "0012",
		"Name": "Hotel Nirmala Dakshin",
		"Address": {
			"line1": " 811, Vummidiars Shopping Centre",
			"line2": " Anna Salai, Mount Road"
		},
		"City": " Chennai",
		"State": "Tamil Nadu",
		"pincode": " 600002",
		"phone": " 044-28520578, 28520577",
		"Email": " nirmaladakshin@hotelschennai.com",
		"Type": " 1 Star",
		"Rooms": " 49",
		"MaxPrice": " INR 1800",
		"MinPrice": " INR 1200"
	}
];


myFunction();

function myFunction() {

  var str = createPincodeResult();
  var select = document.getElementById("dynamic-select");
  for(i = 0; i < str.length; i++) 
  {
    var pin =  str[i];
    var opt = document.createElement('option');
    opt.value = pin;
    opt.innerHTML = pin;
    select.appendChild(opt);
  } 
  
  
  var str = createTypeResult();
  var select = document.getElementById("dynamic-select1");
  for(i = 0; i < str.length; i++) 
  {
    var pin =  str[i];
    var opt = document.createElement('option');
    opt.value = pin;
    opt.innerHTML = pin;
    select.appendChild(opt);
  } 
  
}



function createPincodeResult()
{

  var dropDownResult = [];
  for(i = 0; i < jValue.length; i++) 
  {
    
    var pin =  jValue[i].pincode;
    if(dropDownResult.length == 0)
    {
        dropDownResult.push(pin);
    }
    else
    {
       var arraycontainsturtles = (dropDownResult.indexOf(pin) > -1);
       
       if(arraycontainsturtles == false)
       {
           dropDownResult.push(pin);
       }
    
    }
    
  } 
  
  return dropDownResult;
  
}


function createTypeResult()
{

  var dropDownResult = [];
  for(i = 0; i < jValue.length; i++) 
  {
    
    var pin =  jValue[i].Type;
    if(dropDownResult.length == 0)
    {
        dropDownResult.push(pin);
    }
    else
    {
       var arraycontainsturtles = (dropDownResult.indexOf(pin) > -1);
       
       if(arraycontainsturtles == false)
       {
           dropDownResult.push(pin);
       }
    
    }
    
  } 
  
  return dropDownResult;
  
}








