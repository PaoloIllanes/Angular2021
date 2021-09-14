import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StoryComponent } from './components/story/story.component';

const routes: Routes=[
  {path: '' , component: HomeComponent}

  ]

@NgModule({
  imports: [
    CommonModule,
    
  ],
  declarations: [
    HomeComponent,
    SidebarComponent,
    StoryComponent,

  ]
})
export class HomeModule { }



