import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angexpensecal';
  expenses:any=[{name:'abc',amount:23}]
  @ViewChild('f') epxenseForm!:NgForm;
  selectedIndex:number =-1;
  selectedItem={name:'',amount:0}
  onAdd(formData:NgForm){
    // console.log(formData);
    this.expenses.push(formData.value)
    formData.reset();
    // console.log(this.expenses);
    
  }
  editExpense(i:number){
    this.selectedIndex=i;
    this.selectedItem = this.expenses[i]
    // console.log(this.selectedIndex);
    this.epxenseForm.setValue({
      'name':this.selectedItem.name,
      'amount':this.selectedItem.amount
    })
    
    
  }
  updateExpense(){
    // this.epxenseForm[this.selectedIndex].name=
    // console.log(this.selectedIndex);
    this.expenses[this.selectedIndex].name=this.epxenseForm.value.name
    this.expenses[this.selectedIndex].amount=this.epxenseForm.value.amount
    this.epxenseForm.reset();
    this.selectedIndex=-1;
    
  }
  cancelExpense(){
    this.selectedIndex=-1;
    this.epxenseForm.reset();
  }
  removeExpense(i:number){
    this.expenses.splice(i,1);
  }

  calculateTotal(){
    // totalVal:number=0;
    // console.log(this.expenses[0].amount);
    
  let totalVal:number=0;
    for(var i=0;i<this.expenses.length;++i){
      totalVal+=this.expenses[i].amount
    }
    return totalVal
  }
}
