function subtrai(){
   var num1 =  document.getElementById("op1").value;
   var num2 = document.getElementById("op2").value;
   
   alert (num1+num2);

   num1 = parseInt(num1);
   num2 = parseInt(num2);

   if (num1<num2) {
     alert (" Numero será negativo, não pode!")

   } else{
    alert (num1-num2);
   }

}