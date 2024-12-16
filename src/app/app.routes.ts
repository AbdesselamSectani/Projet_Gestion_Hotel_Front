import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { RoomComponent } from './component/room/room.component';
import { BookComponent } from './component/book/book.component';
import { LoginComponent } from './component/login/login.component';
import { AboutComponent } from './component/about/about.component';

export const routes: Routes = [ 
    {path:"login", component:LoginComponent},
    {path:"", component:HomeComponent},
    {path:"rooms", component:RoomComponent},
    {path:"booking", component:BookComponent},
    {path:"about", component:AboutComponent}
];
