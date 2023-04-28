import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { interceptorProvider } from './service/interceptor-service';

import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { BannerComponent } from './components/banner/banner.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FooterComponent } from './components/footer/footer.component';
import { HardysoftskillsComponent } from './components/hardysoftskills/hardysoftskills.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { NewAcercadeComponent } from './components/acerca-de/new-acercade.component';
import { EditAcercadeComponent } from './components/acerca-de/edit-acercade.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { EditProyectoComponent } from './components/proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyecto/new-proyecto.component';
import { EditHardysoftskillsComponent } from './components/hardysoftskills/edit-hardysoftskills.component';
import { NewHardysoftskillsComponent } from './components/hardysoftskills/new-hardysoftskills.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    BannerComponent,
    EducacionComponent,
    ExperienciaComponent,
    FooterComponent,
    HardysoftskillsComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    LogoApComponent,
    ProyectoComponent,
    NewAcercadeComponent,
    EditAcercadeComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EditProyectoComponent,
    NewProyectoComponent,
    EditHardysoftskillsComponent,
    NewHardysoftskillsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [
    interceptorProvider
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
