import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzMenuModule } from 'ng-zorro-antd/menu'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlbumListComponent } from './album-list/album-list.component';
import { DataService } from 'src/app/services/data.service';
import { PostsComponent } from './posts/posts.component';
import { PhotosComponent } from './photos/photos.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    PostsComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NzListModule,
    NzMenuModule,
    NzButtonModule,
    NzCollapseModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [NzMessageService, NzNotificationService, { provide: NZ_I18N, useValue: en_US }, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
