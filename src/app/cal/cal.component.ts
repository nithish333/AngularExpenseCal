import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';
@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent {
  title = 'angexpensecal';
  expenses:any=[]
  @ViewChild('f') epxenseForm!:NgForm;
  selectedIndex:number =-1;
  selectedItem={name:'',amount:0}
  isFetching = false;

  constructor(private http:HttpClient){}
  ngOnInit(){
    this.fetchExpensesList()
  }
  onAdd(formData:NgForm){
    // console.log(formData);
    this.expenses.push(formData.value)
    let postData = {name:formData.value.name,amount:formData.value.amount}
this.http.post('https://angularex-17c02-default-rtdb.firebaseio.com/posts.json',postData).subscribe(response=>console.log(response)
)
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
  removeExpense(i:number,id:string){
    
    this.expenses.splice(i,1);
    this.http.delete(`https://angularex-17c02-default-rtdb.firebaseio.com/posts/${id}.json`)
    .subscribe(
    );
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

  //fetch expenses list

  fetchExpensesList(){
    this.isFetching=true;
    this.http.get('https://angularex-17c02-default-rtdb.firebaseio.com/posts.json')
    .pipe(map((response:{[key:string]:any})=>{
      let expensesArray = [];
      
      for(const key in response){
        if(response.hasOwnProperty(key)){
        expensesArray.push({...response[key],id:key})
        }
      }
      return expensesArray
    }
    ))
    .subscribe(expenses=>{
      this.isFetching=false
      this.expenses.push(...expenses)
    }
    )
  }
}
