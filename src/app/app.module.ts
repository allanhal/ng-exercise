import { UserContainer } from './shared/user.container';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TinyStateModule, ReduxDevtoolsPluginModule } from '@tinystate/core';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TinyStateModule.forRoot(),
    ReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [UserContainer],
  bootstrap: [AppComponent]
})
export class AppModule { }
