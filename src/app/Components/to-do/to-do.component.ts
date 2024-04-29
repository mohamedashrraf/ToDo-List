import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {

  Title:string = "To Do List Application";
  imageLink:string= "https://cdn-icons-png.flaticon.com/512/4697/4697260.png";
  tasks: string[] = [];
  newTask: string="";
  editedTask:string="";
  isAvaliable: boolean = false;
  editMode:boolean = false;
  editIndex: number = -1;


  addTask(){
    if(this.newTask.trim() !==""){
      this.tasks.push(this.newTask);
      this.newTask = "";
      this.isAvaliable = true;
      console.log(this.newTask);
    }
  }

  removeTask(index:number){
    this.tasks.splice(index,1);
     this.isAvaliable = this.tasks.length > 0;
    // if(this.tasks.length == 0){ طريقة اخري
    //   this.isAvaliable = false;
    // }
  }

  editTask(index:number){
    this.editIndex = index;
    this.editedTask = this.tasks[index];
    this.editMode = true;

    // if(this.editedTask.trim() !== ""){
    //   this.tasks[index] = this.editedTask;
    // }
    // else{
    //   this.editedTask = this.tasks[index];
    //   // this.newTask = this.editedTask;
    // }
    // this.newTask ="";
    // this.editMode=true;
  }

  saveTask(index:number){
    if (this.editedTask.trim() !== '') {
    this.tasks[index] = this.editedTask;
  }
  this.editMode = false;
  this.editIndex = -1;
  // this.tasks[index] = this.editedTask;
    // this.editMode=false;
  }


}
