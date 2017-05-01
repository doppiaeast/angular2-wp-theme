import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { Wpng2RoutingModule } from './app-routing.module';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { DividerComponent } from './shortcodes/divider/divider.component';
import { PostContentResolverService } from './posts/post-content-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostSingleComponent,
    DividerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Wpng2RoutingModule
  ],
  providers: [PostContentResolverService],
  bootstrap: [AppComponent],
  exports: [
    DividerComponent
  ]
})
export class AppModule { }
