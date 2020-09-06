import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepoComponent } from './repo/repo.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { GitService } from './services/git.service';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';

@NgModule({
	declarations: [
		AppComponent,
		RepoComponent,
		RepoListComponent,
		HeaderComponent,
		HomeComponent,
		UserComponent,
		AboutComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		ClipboardModule
	],
	providers: [
		GitService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
