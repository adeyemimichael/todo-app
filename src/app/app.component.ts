import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-app';
  //declaration of an empty array
  list:any[] =[]
  //this helps in adding the to do item to the collection
  addTask(item:string){
console.warn(item)

this.list.push({id:this.list.length,name:item})
console.warn(this.list)
  }
  //this removes  the list items from the collection of items
  removeTask(id:number){
console.warn(id)
this.list =this.list.filter(item => item.id!== id);
  }
}
