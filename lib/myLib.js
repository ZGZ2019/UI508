function anubhav(){
    //alert('welcome to JS');
    setTimeout(function(){
        //mom- the call back
        alert("the execution is complete");
    }, 5000);
    
}

function blinkMe(){
    $("#msg").fadeOut(1000, function(){
         $("#msg").fadeIn(1000, function(){
            blinkMe();
         });
    });
}

function attachJQEvent(){
    $("#spidy").mouseenter(function(){
        $(this).animate({
            width: '+=20px',
            height: '+=20px'
        })
    });
}

function callCovidAPI(){

   $.ajax("https://api.covidtracking.com/v2/us/daily.json",{
        success: function(result){
            console.log(result.data.length);
            for(var i=0;i<result.data.length;i++){
                var lv_date = result.data[i].date;
                var lv_concat = " Cases --> ";
                var lv_cases = lv_concat + result.data[i].cases.total.value;
                onAddNew(lv_date, lv_cases)
            }
        }
   });

}

function onLogin(){
	
	//Step 1: Get the object of our input fields
	var oUser = document.getElementById("usr");
	//Step 2: Get the value from the input field object
	var sUser = oUser.value;
	var sPassword = document.getElementById("pwd").value; //chaining is JS
	//Step 3: validate and take action accordingly
	if(sUser === "Anubhav" && sPassword === "Anubhav"){
		//debugger; //console must be open here
		//this should be done after validating the input
		document.write("<h2>Login was success</h2>");	
	}else{
		//alert("dude try again!!");
		var oMsg = document.getElementById("msg");
        oMsg.innerText = "Please correct the user/password";
        blinkMe();
	}
}

function onMagic(){
	//Get all elements with same class name
	var aItems = document.getElementsByClassName("box-title");
	console.log(aItems);
	//loop over an array just like internal tables in ABAP
	for(var i=0;i<aItems.length;i++){
		//console.log(aItems[i].innerText);
		aItems[i].style.background = "black";
		aItems[i].style.color = "aqua";
		aItems[i].style.fontFamily = "cursive";
	}
}

function onMagicAdvance(){
    $(".box-title").css("background","aqua").css("color", "brown").css("font-family", "cursive");
}

function hide(){
    //$(".box").hide();
    $(".box").fadeOut(5000, function(){
        alert("the boxes now disappear");
    });
    
}
function show(){
    //$(".box").show();
    $(".box").fadeIn(5000);
}

function onAddNew(date, cases){
	
	//step 1: create a brand new html element 
	var oElement = document.createElement("h3");
	//step 2: set the text to that element using text node
    var oTextNode1 = document.createTextNode(date);
    var oTextNode2 = document.createTextNode(cases);
	//step 3: add text node inside the element we created
    oElement.appendChild(oTextNode1);
    oElement.appendChild(oTextNode2);
	//step 4: get the object where to place this element on page
	var oContent = document.getElementById("content");
	//step 5: addend it to the DOM
	oContent.appendChild(oElement);
	
}