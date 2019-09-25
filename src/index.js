module.exports = function zeros(expression) {
  var Per1= expression; //отсчет с 0
   var P1=Per1.indexOf("!!", 0);
   var P2=Per1.indexOf("!",0);
   var m=0; //2
   var n=0; // 5
   while(Per1.length>0){

     var P1=Per1.indexOf("!!", 0);
     var P2=Per1.indexOf("!",0);
     if (P1>0 && P2>0 && P2<P1){ //!
       var NumberSTR=Per1.substr(0, P2);
       var Numb = Number(NumberSTR);
       for (var j=0;j<Numb;j++){
         if((Numb-j)%5==0||(Numb-j)%2==0){
             var Numbe=Numb-j;
             while(Numbe % 5 == 0 && Numbe != 0){
               Numbe = Numbe / 5;
               n++;
             }
             while(Numbe%2==0 && Numbe!= 0){
               Numbe = Numbe/2;
               m++;
             }
           }

       }
       Per3=Per1.substr(P2+2, Per1.length);
       Per1=Per3;
       }
     if (P1<0 && P2>0){ //!
       var NumberSTR=Per1.substr(0, P2);
       var Numb = Number(NumberSTR);
          for (var j=0;j<Numb-1;j++){
            if((Numb-j)%5==0||(Numb-j)%2==0){
             var Numbe=Numb-j;
             while(Numbe % 5 == 0 && Numbe != 0){
               Numbe = Numbe / 5;
               n++;
             }
             while(Numbe%2==0 && Numbe!= 0){
               Numbe = Numbe/2;
               m++;
             }
           }

         }
       Per3=Per1.substr(P2+2, Per1.length);
       Per1=Per3;
       }
     if(P1>0 && P2>0 && P1==P2) { // !!
         var NumberSTR=Per1.substr(0, P2);
         var Numb = Number(NumberSTR);
         for (var j=0;j<Numb;j=j+2){
           if((Numb-j)%5==0||(Numb-j)%2==0){
             var Numbe=Numb-j;
             while(Numbe % 5 == 0 && Numbe != 0){
               Numbe = Numbe / 5;
               n++;
             }
             while(Numbe%2==0 && Numbe!= 0){
               Numbe = Numbe/2;
               m++;
             }
           }
         }
         Per3=Per1.substr(P2+3, Per1.length);
         Per1=Per3;
       }
   }
   if(m>n){
     N= n;
     return N;

   }
     if(m==n){
     N=n;
  return N;
   }
     if(m<n){
     N=m;
  return N;
   }
}
