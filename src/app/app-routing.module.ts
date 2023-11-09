import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';
import { PostsComponent } from './posts/posts.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'albums', component: AlbumListComponent },
  { path: 'albums/photos', component: PhotosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
