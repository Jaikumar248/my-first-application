import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { TestPipe } from './test.pipe';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RouterModule,Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { TestService } from './test.service';
import { UsercardComponent } from './usercard/usercard.component';
import { UsersComponent } from './users/users.component';


// const routes:Routes= [
//   {
//     path:' ', component:HomeComponent
//   },
  // {
  //   path:'about', component:AboutComponent
  // },
  // {
  //   path:'contact', component:ContactComponent
  // },
  
  // {
  //   path:'**', component:NotfoundComponent
  // }
//   {path:'users', component:UsersComponent},
//   {path: 'usercard/:id', component:UsercardComponent}
// ]
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    TestPipe,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    NotfoundComponent,
    UsercardComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule
 
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
