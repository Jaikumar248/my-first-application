import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { TestPipe } from './test.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    TestPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
