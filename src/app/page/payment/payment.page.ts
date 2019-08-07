import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  toppings;
  totalprice;
  
  top1;
  top2;
  top3;
  top4;
  top5;
  top6;
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
Expresso;
Americano;
flatwhite;
Ristretto;
cappotiono;
latte;
Ecream:number=0;
Echocolate:number=0;
Ehoney:number=0;
etop1;
etop2;
etop3;

rtop4;
rtop5;
rtop6;
Rhoney;
Rchocolate;
Rcream;

atop7;
atop8;
atop9;


Fcream:number=0;
Fchocolate:number=0;
Fhoney:number=0;
ftop10;
ftop11;
ftop12;

ahoney;
achocolate;
acream;

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

  constructor(private router:ActivatedRoute,private route:Router) { }

  ngOnInit() {

    this.router.queryParams
    .subscribe(params => {
      console.log(params); 
      this.toppings= params.toppings,
      this.totalprice= params.totalprice,
      this.Expresso= params.Expresso,
      this.top1= params.top1,
      this.top2= params.top2,
      this.top3= params.top3,
      this.top4= params.top4,
      this.top5= params.top5,
      this.top6= params.top6,
      this.etop1=params.etop1,
      this.etop2=params.etop2,
      this.etop3=params.etop3,

      this.rtop4=params.rtop4,
      this.rtop5=params.rtop5,
      this.rtop6=params.rtop6,

      this.atop7=params.atop7,
      this.atop8=params.atop8,
      this.atop9=params.atop9,

      this.ftop10=params.ftop10,
      this.ftop11=params.ftop11,
      this.ftop12=params.ftop12,

      this.Ctop13=params.Ctop13,
      this.Ctop14=params.Ctop14,
      this.Ctop15=params.Ctop15,

      this.Ltop13=params.Ltop13,
      this.Ltop14=params.Ltop14,
      this.Ltop15=params.Ltop15,

      this.Ristretto= params.Ristretto,
      this.Americano=params.Americano,
      this.cappotiono=params.cappotiono,
      this.Ecream=params.Ecream,
      this.Echocolate=params.Echocolate,
      this.Ehoney=params.Ehoney,

      this.Rcream=params.Rcream,
      this.Rchocolate=params.Rchocolate,
      this.Rhoney=params.Rhoney,

      this.acream=params.acream,
      this.achocolate=params.achocolate,
      this.ahoney=params.ahoney,

      this.Fcream=params.Fcream,
      this.Fchocolate=params.Fchocolate,
      this.Fhoney=params.Fhoney,

      this.Ccream=params.Ccream,
      this.Cchocolate=params.Cchocolate,
      this.Choney=params.Choney,

      this.Lcream=params.Lcream,
      this.Lchocolate=params.Lchocolate,
      this.Lhoney=params.Lhoney,


      this.latte=params.latte;
      this.flatwhite=params.flatwhite;

      
      console.log(this.toppings,this.totalprice,this.Expresso,this.top1,this.top2,this.top3,this.top4,this.top5,this.top6,
        this.Ristretto,this.Americano,this.flatwhite,this.cappotiono,this.latte,this.Ecream,this.etop1,
        this.Ehoney,this.etop2,this.Echocolate,this.etop3,this.Rhoney,this.Rchocolate,this.Rcream,this.rtop4,this.rtop5,this.rtop6,
        this.ftop10,this.ftop11,this.ftop12, this.Fcream, this.Fchocolate, this.Fhoney,
        this.atop7,this.atop8,this.atop9, this.Ctop15,this.Ctop14,this.Ctop13,this.acream, this.achocolate,this.ahoney,this.Ccream,
        this.Ltop15,this.Ltop14,this.Ltop13, this.Cchocolate,this.Choney,this.Lcream, this.Lchocolate,this.Lhoney);
    });
    
  }
  paymnt() {
    window.print();
  }

  Back()
  {
    this.route.navigateByUrl("home")
  }

}
