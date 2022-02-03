import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './modules/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { PostsComponent } from './pages/posts/posts.component';
import { AboutComponent } from './pages/about/about.component';
import { UserComponent } from './components/user/user.component';
import { PostDisplayComponent } from './components/post-display/post-display.component';
import { PostsService } from './services/posts.service';
import { UsersService } from './services/users.service';
import { AlbumsService } from './services/albums.service';
import { CommentsService } from './services/comments.service';
import { PhotosService } from './services/photos.service';
import { AlbumComponent } from './components/album/album.component';
import { PhotoComponent } from './components/photo/photo.component';
import { CommentComponent } from './components/comment/comment.component';
import { PostCreateComponent } from './components/post-create/post-create.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AlbumsComponent,
    PostsComponent,
    AboutComponent,
    UserComponent,
    PostDisplayComponent,
    AlbumComponent,
    PhotoComponent,
    CommentComponent,
    PostCreateComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [PostsService, UsersService, AlbumsService, CommentsService, PhotosService]
})
export class AppModule { }