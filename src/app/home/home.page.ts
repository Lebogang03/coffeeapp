import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
minus=0;
minus1=0;
minus2=0;
minus3=0;
minus4=0;
minus5=0;
cream1=15;
chocolate1=10;
honeyy=5;
label=0;
label1=0;
label2=0;

label3=0;
label4=0;
label5=0;

label6=0;
label7=0;
label8=0;

label9=0;
label10=0;
label11=0;

label12=0;
label13=0;
label14=0;

label15=0;
label16=0;
label17=0;

toppings=0;

totalprice:number =0;
  top1;

  Expresso: number = 0;
  Ristretto: number = 0;
  top2;
  Americano: number=0;
  flatwhite:number=0;
  top3;
  top4;
  cappotiono:number=0;
  latte:number=0;
  top5;
  top6;
  Ecream:number=0;
  Echocolate:number=0;
  Ehoney:number=0;
  etop1;
  etop2;
  etop3;

Rcream:number=0;
Rchocolate:number=0;
Rhoney:number=0;
  rtop4;
  rtop5;
  rtop6;


  acream:number=0;
achocolate:number=0;
ahoney:number=0;
  atop7;
  atop8;
  atop9;

  Fcream:number=0;
Fchocolate:number=0;
Fhoney:number=0;
ftop10;
ftop11;
ftop12;

Ccream:number=0;
Cchocolate:number=0;
Choney:number=0;
Ctop13;
Ctop14;
Ctop15;

Lcream:number=0;
Lchocolate:number=0;
Lhoney:number=0;
Ltop13;
Ltop14;
Ltop15;

  constructor(private router:Router) {}

  price()
  {
    console.log(this.Expresso+=30)



    console.log(this.minus+=1)

  
   this.totalprice=this.Expresso +this.Ristretto +this.Americano +this. flatwhite + this.cappotiono + this.latte +  this.toppings;

    }

  price2(){
    console.log(this.Expresso-=30)
 if(this.Expresso<=0){
    this.Expresso=0;}
    console.log(this.minus-=1)
    if(this.minus<=0){
    this.minus=0;}
    
   
  }

  cream()
  {
console.log(this.Ecream+=15)
if(this.Ecream<=0)
this.Ecream=0;
console.log(this.label+=1)
if(this.label<=0)
this.label=0;
this.totalprice=this.Expresso + this.toppings;
this.totalprice=this.Expresso +this.Ristretto +this.Americano +this. flatwhite + this.cappotiono + this.latte +  this.Ecream;

  }

  chocolate()
  {
    console.log(this.Echocolate+=10)
    if(this.Echocolate<=0)
    this.Echocolate=0;
    console.log(this.label+=1)
    if(this.label<=0)
    this.label=0;
    this.totalprice=this.Expresso + this.toppings;
    this.totalprice=this.Expresso +this.Ristretto +this.Americano +this. flatwhite + this.cappotiono + this.latte +  this.Echocolate;
    
      }

  honey()
  {
    console.log(this.Ehoney+=15)
    if(this.Ehoney<=0)
    this.Ehoney=0;
    console.log(this.label+=1)
    if(this.label<=0)
    this.label=0;
    this.totalprice=this.Expresso +this.Ristretto +this.Americano +this. flatwhite + this.cappotiono + this.latte +  this.Ehoney;
    
      }

  ///////////////////////////////////////////////////////////////////////////////

  price3()
  {
    console.log(this.Ristretto+=25)

    console.log(this.minus1+=1)
   
    this.totalprice=this.Expresso +this.Ristretto +this.Americano +this. flatwhite + this.cappotiono + this.latte +  this.toppings;
    }

  price4(){
    console.log(this.Ristretto-=25)
    if(this.Ristretto<=0){
       this.Ristretto=0;}

       console.log(this.minus1-=1)
       if(this.minus1<=0){
       this.minus1=0;}
       this.totalprice=this.Expresso +this.Ristretto +this.Americano +this. flatwhite + this.cappotiono + this.latte +  this.toppings;
  }

  cream2()
  {
console.log(this.Rcream+=15)
if(this.Rcream<=0)
this.Rcream=0;
console.log(this.label3+=1)

this.totalprice=this.Expresso +this.Ristretto +this.Americano +this. flatwhite + this.cappotiono + this.latte +  this.Rcream;
  }

  chocolate2()
  {
    console.log(this.Rchocolate+=10)
    console.log(this.label4+=1)
    
    this.totalprice=this.Expresso +this.Ristretto +this.Americano +this. flatwhite + this.cappotiono + this.latte +  this.Rchocolate;
  }

  honey2()
  {
    console.log(this.Rhoney+=10)
    console.log(this.label5+=1)
    
    this.totalprice=this.Expresso +this.Ristretto +this.Americano +this. flatwhite + this.cappotiono + this.latte +  this.Rhoney;
  }
  /////////////////////////////////////////////////////////////////////////////

   price5()
  {
    console.log(this.Americano+=35)

    console.log(this.minus2+=1)
    this.totalprice=this.Expresso +this.Ristretto +this.Americano +this. flatwhite + this.cappotiono + this.latte;
     }

  price6(){
    console.log(this.Americano-=35)
    if(this.Americano<=0){
        this.Americano=0;}

        console.log(this.minus2-=1)
        if(this.minus2<=0){
       this.minus2=0;}
     
  }

   cream3()
   {
 console.log(this.acream+=15)
 if(this.acream<=0)
this.acream=0;
 console.log(this.label6+=1)
 
 this.totalprice=this.Expresso +this.Ristretto +this.Americano +this. flatwhite + this.cappotiono + this.latte +  this.acream;
   }

   chocolate3()
   {
     console.log(this.achocolate+=10)
    console.log(this.label7+=1)
     if(this.label7<=0){
    this.label7=0;}
    this.totalprice=this.Expresso +this.Ristretto +this.Americano +this. flatwhite + this.cappotiono + this.latte +  this.achocolate;
   
   }

   honey3()
  {
    console.log(this.ahoney+=10)
    console.log(this.label8+=1)
    if(this.label8<=0){
    this.label8=0;}
    this.totalprice=this.Expresso +this.Ristretto +this.Americano +this. flatwhite + this.cappotiono + this.latte +  this.ahoney;
  }

// /////////////////////////////////////////////////////////////////////////

  price7()
   {
     console.log(this.flatwhite+=20)

    console.log(this.minus3+=1)
    this.totalprice=this.Expresso +this.Ristretto +this.Americano +this. flatwhite + this.cappotiono + this.latte +  this.toppings;
    }

   price8(){
   console.log(this.flatwhite-=20)
    if(this.flatwhite<=0){
      this.flatwhite=0;}

       console.log(this.minus3-=1)
       if(this.minus3<=0){
        this.minus3=0;}
     
   }

   cream4()
   {
 console.log(this.Fcream+=15)
 if(this.Fcream<=0)
 this.Fcream=0;
 console.log(this.label9+=1)
 if(this.label9<=0)
 this.label9=0;
 this.totalprice=this.Expresso +this.Ristretto +this.Americano +this. flatwhite + this.cappotiono + this.latte +  this.Fcream;

   }

   chocolate4()
  {
    console.log(this.Fchocolate+=10)
     console.log(this.label10+=1)
     if(this.label10<=0){
    this.label10=0;}
    console.log(this.Fchocolate+=10)
    this.totalprice=this.Expresso +this.Ristretto +this.Americano +this. flatwhite + this.cappotiono + this.latte +  this.Fchocolate;
   
  }

  honey4()
  {
    console.log(this.Fhoney+=10)
     console.log(this.label11+=1)
     if(this.label11<=0){
     this.label11=0;}
     this.totalprice=this.Expresso +this.Ristretto +this.Americano +this. flatwhite + this.cappotiono + this.latte +  this.Fhoney;
  }
//   ////////////////////////////////////////////////////////////////////////////////////

   price9()
  {
     console.log(this.cappotiono+=15)

     console.log(this.minus4+=1)
     this.totalprice=this.Expresso +this.Ristretto +this.Americano +this. flatwhite + this.cappotiono + this.latte ;

     }

   price10(){
    console.log(this.cappotiono-=15)
   if(this.cappotiono<=0){
      this.cappotiono=0;}

       console.log(this.minus4-=1)
       if(this.minus4<=0){
       this.minus4=0;}
     
   }

   cream5()
   {
 console.log(this.Ccream+=15)
 if(this.Ccream<=0)
 this.Ccream=0;
 console.log(this.label12+=1)
 if(this.label12<=0)
 this.label12=0;
 this.totalprice=this.Expresso +this.Ristretto +this.Americano +this. flatwhite + this.cappotiono + this.latte +  this.Ccream;

  }

   chocolate5()
   {
    console.log(this.Cchocolate+=10)
    console.log(this.label13+=1)
     if(this.label13<=0){
    this.label13=0;}
    console.log(this.Cchocolate+=10)
    this.totalprice=this.Expresso +this.Ristretto +this.Americano +this. flatwhite + this.cappotiono + this.latte +  this.Cchocolate;
   
  }

   honey5()
   {
    console.log(this.Choney+=10)
     console.log(this.label14+=1)
    if(this.label14<=0){
    this.label14=0;}
    this.totalprice=this.Expresso +this.Ristretto +this.Americano +this. flatwhite + this.cappotiono + this.latte +  this.Choney;
  }
// ////////////////////////////////////////////////////////////////////////////////////////////////////
  

 price11()
 {
   console.log(this.latte+=35)

  console.log(this.minus5+=1)
  this.totalprice=this.Expresso +this.Ristretto +this.Americano +this. flatwhite + this.cappotiono + this.latte;

   }

 price12(){
 console.log(this.latte-=35)
 if(this.latte<=0){
    this.latte=0;}

    console.log(this.minus5-=1)
    if(this.minus5<=0){
    this.minus5=0;}
   
 }

 cream6()
 {
 console.log(this.Lcream+=15)
 if(this.Lcream<=0)
 this.Lcream=0;
 console.log(this.label15+=1)
if(this.label15<=0)
 this.label15=0;
 this.totalprice=this.Expresso +this.Ristretto +this.Americano +this. flatwhite + this.cappotiono + this.latte +  this.Lcream;

 }

 chocolate6()
 {
  console.log(this.Lchocolate+=10)
  console.log(this.label16+=1)
   if(this.label16<=0){
   this.label16=0;}
   this.totalprice=this.Expresso +this.Ristretto +this.Americano +this. flatwhite + this.cappotiono + this.latte +  this.Lchocolate;
 
 }

 honey6()
 {
   console.log(this.toppings+=10)
   console.log(this.label17+=1)
   if(this.label17<=0){
  this.label17=0;}
  this.totalprice=this.Expresso +this.Ristretto +this.Americano +this. flatwhite + this.cappotiono + this.latte +  this.toppings;
 }




 tcream2()
   {
     console.log(this.Lcream+=15)
     console.log(this.Lcream-=15)
     if(this.Lcream<=0){
       this.Lcream=0;}


     console.log(this.label+=1)
     this.totalprice=this.Expresso +this.Ristretto +this.Americano +this. flatwhite + this.cappotiono + this.latte +  this.Lcream;


     }

  

    
 

  paymnt()
  {
    if(this.Expresso > 0){
      this.top1 =  "Espresson  ........... R" + this.Expresso +".00"
    }

    if(this.Ristretto > 0){
      this.top2 =  "Ristretto  ........... R" + this.Ristretto +".00"
    }

    if(this.Americano > 0){
      this.top3 =  "Americano  ........... R" + this.Americano +".00"
    }

    if(this.flatwhite > 0){
      this.top4 =  "Flatwhite  ........... R" + this.flatwhite +".00"
    }

    if(this.cappotiono > 0){
      this.top5 =  "Cappuccino  ........... R" + this.cappotiono +".00"
    }

    if(this.latte > 0){
      this.top6 =  "Latte  ........... R" + this.latte +".00"
    }
////////////////////////////////////////////////////////////////////////////////////////////
    if(this.Ecream > 0){
      this.etop1 =  "Cream  ........... R" + this.Ecream +".00"
    }

    if(this.Ehoney > 0){
      this.etop2 =  "honey  ........... R" + this.Ehoney +".00"
    }

    if(this.Echocolate > 0){
      this.etop3 =  "chocolate  ........... R" + this.Echocolate +".00"
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////

    if(this.Rcream > 0){
      this.rtop4 =  "Cream  ........... R" + this.Rcream +".00"
    }

    if(this.Rchocolate > 0){
      this.rtop5 =  "Chocolate  ........... R" + this.Rchocolate +".00"
    }
   
    if(this.Rhoney > 0){
      this.rtop6 =  "Honey  ........... R" + this.Rhoney +".00"
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
   
    if(this.acream > 0){
      this.atop7 =  "Cream  ........... R" + this.acream +".00"
    }

    if(this.achocolate > 0){
      this.atop8=  "Chocolate  ........... R" + this.achocolate +".00"
    }
   
    if(this.ahoney > 0){
      this.atop9 =  "Honey  ........... R" + this.ahoney +".00"
    }
//////////////////////////////////////////////////////////////////////////////////////////////////
   
if(this.Fcream > 0){
  this.ftop10 =  "Cream  ........... R" + this.Fcream +".00"
}

if(this.Fchocolate > 0){
  this.ftop11=  "Chocolate  ........... R" + this.Fchocolate +".00"
}

if(this.Fhoney > 0){
  this.ftop12 =  "Honey  ........... R" + this.Fhoney +".00"
}
//////////////////////////////////////////////////////////////////////////////////////////////////

if(this.Ccream > 0){
  this.Ctop13 =  "Cream  ........... R" + this.Ccream +".00"
}

if(this.Cchocolate > 0){
  this.Ctop14=  "Chocolate  ........... R" + this.Cchocolate +".00"
}

if(this.Choney > 0){
  this.Ctop15 =  "Honey  ........... R" + this.Choney +".00"
}
//////////////////////////////////////////////////////////////////////////////////////////////////

if(this.Lcream > 0){
  this.Ltop13 =  "Cream  ........... R" + this.Lcream +".00"
}

if(this.Lchocolate > 0){
  this.Ltop14=  "Chocolate  ........... R" + this.Lchocolate +".00"
}

if(this.Lhoney > 0){
  this.Ltop15 =  "Honey  ........... R" + this.Lhoney +".00"
}

    console.log(this.toppings,this.Expresso,this.Ristretto,this.totalprice,this.top1,this.top2,this.Americano,this.flatwhite,
      this.cappotiono,this.latte,this.Ecream,this.etop1,this.etop3,this.etop2,this.rtop4,this.rtop5,
      this.rtop6,this.atop7,this.atop8,this.atop9,this.Rchocolate,this.Rcream,this.Rhoney,this.achocolate,
      this.acream,this.ahoney,this.Fchocolate,this.Fcream,this.Fhoney,this.ftop10,this.ftop11,this.ftop12,
      this.Ccream,this.Cchocolate,this.Choney,this.Lcream,this.Lchocolate,this.Lhoney); 

this.router.navigate(['/payment'],{ queryParams: {toppings:this.toppings,Expresso:this.Expresso,Ristretto:this.Ristretto,
  cappotiono: this.cappotiono,latte:this.latte,Ecream:this.Ecream,etop1:this.etop1,
  totalprice:this.totalprice,top1:this.top1,top2:this.top2,top3:this.top3,top4:this.top4,top5:this.top5,top6:this.top6,Americano:this.Americano,
  flatwhite:this.flatwhite,Ehoney:this.Ehoney,Echocolate:this.Echocolate,etop2:this.etop2,etop3:this.etop3,
  rtop4:this.rtop4,rtop5:this.rtop5,rtop6:this.rtop6,atop7:this.atop7,atop8:this.atop8,atop9:this.atop9,
  Rchocolate:this.Rchocolate,Rcream:this.Rcream,Rhoney:this.Rhoney,achocolate:this.achocolate,acream:this.acream,ahoney:this.ahoney,
  Fchocolate:this.Fchocolate,Fcream:this.Fcream,Fhoney:this.Fhoney, Lchocolate:this.Lchocolate,Lcream:this.Lcream,Lhoney:this.Lhoney,ftop10:this.ftop10,
  Ctop13:this.Ctop13,Ctop14:this.Ctop14,Ctop15:this.Ctop15,ftop11:this.ftop11,ftop12:this.ftop12,Ltop13:this.Ltop13,Ltop14:this.Ltop14,Ltop15:this.Ltop15}});

  

  }

  }

   



