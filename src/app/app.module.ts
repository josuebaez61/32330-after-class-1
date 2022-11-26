import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { PageWrapperComponent } from './shared/layout/page-wrapper/page-wrapper.component';
import { TopBarComponent } from './shared/layout/top-bar/top-bar.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PageWrapperComponent,
    TopBarComponent,
    StudentsPageComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
