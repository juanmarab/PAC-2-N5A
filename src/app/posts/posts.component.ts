import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  title = 'pac-2';
  posts: any[] = [];
  comments: { [postId: number]: any[] } = {};
  showComments: { [postId: number]: boolean } = {};

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts() {
    this.dataService.getPosts().subscribe(
      (data: any) => {
        this.posts = data;
      },
      (error) => {
        console.error('Failed to fetch posts', error);
      }
    );
  }

  toggleComments(postId: number) {
    if (this.showComments[postId]) {
      this.showComments[postId] = false;
    } else {
      this.fetchComments(postId);
      this.showComments[postId] = true;
    }
  }

  fetchComments(postId: number) {
    this.dataService.getComments(postId).subscribe(
      (data: any) => {
        this.comments[postId] = data;
      },
      (error) => {
        console.error(`Failed to fetch comments for post ${postId}`, error);
      }
    );
  }
}
