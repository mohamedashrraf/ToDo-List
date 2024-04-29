import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { TodosComponent } from './Components/todos/todos.component';
import { TodoDetailsComponent } from './Components/todo-details/todo-details.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

export const routes: Routes = [
  {path: '', redirectTo:'/todos', pathMatch:'full'},
  {path: 'home', component: HomeComponent, title: 'Home'},
  {path: 'todos', component: TodosComponent, title: 'To Do'},
  {path: 'todos/:id', component: TodoDetailsComponent, title: 'TodoDetails'},
  {path: 'about', component: AboutComponent, title: 'About'},
  {path: 'contact', component: ContactComponent, title: 'Contact'},
  {path: '**', component: NotFoundComponent, title: 'Not Found'},

];
