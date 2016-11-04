import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Transaction } from '../../database';
import { Adding } from '../adding/adding';

/*
  Generated class for the Transactions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html'
})
export class Transactions {

  title: string = "Movimientos";
  transactions: any;
  addingPage = Adding;

  constructor(public navCtrl: NavController) { }

  /*ionViewDidLoad() {
    //let transaction = new Transaction(20, "Primera transaccion");
    //transaction.save();
    this.loadTransactions();
  }*/

  ionViewWillEnter(){
    this.loadTransactions();
  }


  loadTransactions(){
    Transaction.all().then((resultado) =>{
      this.transactions = resultado;
      console.log(this.transactions);
    });
  }

}
