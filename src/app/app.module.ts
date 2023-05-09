import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ForgetComponent } from './components/forget/forget.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { DisplayNoteComponent } from './components/display-note/display-note.component';
import { IconsComponent } from './components/icons/icons.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { NotesComponent } from './components/notes/notes.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgetComponent,
    ResetPassComponent,
    DashboardComponent,
    AddNoteComponent,
    DisplayNoteComponent,
    IconsComponent,
    NotesComponent,
    ArchiveComponent,
    TrashComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,FormsModule,
    ReactiveFormsModule,MatToolbarModule,
    AppRoutingModule,MatSidenavModule,
    BrowserAnimationsModule,
    MatFormFieldModule,MatIconModule,
    MatInputModule,MatListModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
