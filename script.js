// // document.write("<h1> hello world !</h1> ") ;
// // console.log("hello world !") ;
// // alert("welcome to sandy");
// var a,b,c,mul,div;
// a=1;
// b=10;
// c=13;
// mul=a*b*c;
// div=a/b/c;
// var sum=a+b+c;
 
// document.write("sum is : " ,sum ,"<br>" );
// // alert("sum is : \n ",sum ,"<br>");
// document.write("mul is : " ,mul ,"<br>" ); 
// document.write("div is :  " ,div  ,"<br>") ;
// const pi=3.1416  ;
// document.write("pi is",pi ,"<br>");
// let r=4;
// let area=pi*r*r;
// document.write("the area is " ,area, "<br>");
// let fname="mount anapurna ";
// let lname="campus";
// document.write(" "," first name is ", fname,"<br>");
// document.write("last name is " ,lname,"<br>");
// document.write(" full name is " , fname+" " ,lname ,"<br>");


// //conditionaal stataement
// let myage  =18;
// if(myage>18){
//     document.write("you can vote !!");
// }
// else if(myage==18)
// {
//     document.write("make your voter id !!");
// }
// else
// {
//     document.write("you can not vote");
// }
// .......................



// // function showDate()

// // {
// //  document.getElementById('btn').innerHTML = Date();
// // }

// function showDate()

    
// {
//     var currentTime= new Date();
//     var currentHour = currentTime.getHours() ;
//     var currentMinutes=currentTime.getMinutes();
//     var greeting;
//     }
//     if (currentHour>= 0  && currentHour<=12 )
//     {
//         greeting="Good Morning ";
//     }
//     else if (currentHour > 12  && currentHour <=18)
//     {
//         greeting="Good Afternoon ";
//     }
//     else if(currentHour> 18   && currentHour<=20)
//     {
//         greeting="Good Evening ";
//     }
    
//     else{
//         greeting="Good Night"
//     }
//     var timeString = currentHour +":" +currentMinutes ;
//     var finalMessage=greeting + " " + "The current TIme is " + timeString;
//     document.getElementById('btn').innerHTML =finalMessage ;
// }
function showDate() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();
    var greeting;
  
    if (currentHour >= 0 && currentHour <= 12) {
      greeting = "Good Morning";
    } else if (currentHour > 12 && currentHour <= 18) {
      greeting = "Good Afternoon";
    } else if (currentHour > 18 && currentHour <= 20) {
      greeting = "Good Evening";
    } else {
      greeting = "Good Night";
    }
    var seconds = currentSeconds;
    var hour=currentHour ;
    if(currentHour <10 ){
        hour='0' + currentHour ;
    }
   if(currentSeconds<10) 
   {
    seconds = '0'+ currentSeconds;
   }
    var timeString = hour + ":" + currentMinutes +':'+ seconds;
    var finalMessage = greeting + " " + "The current Time is <br>  " + timeString;
    document.getElementById('btn').innerHTML = finalMessage;
    setInterval(showDate, 1);

    // let Btn = document.getElementById('btn').innerHTML;
    // Btn = finalMessage;
  }
  
  
  
  
  