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

  editTask(index:number, newTaskEdit:string){
    newTaskEdit=newTaskEdit.trim();
    if(newTaskEdit!==""){
      this.tasks[index] = newTaskEdit;
    }
    this.editMode=true;

  }

  saveTask(index:number){
    this.tasks[index] = this.editedTask;
    this.editMode=false;
  }


}
