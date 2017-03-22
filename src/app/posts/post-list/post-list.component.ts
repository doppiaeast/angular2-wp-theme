import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { Router } from '@angular/router';
import { WpApiPosts } from 'wp-api-angular';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {

  posts: Post[];

  constructor( private wpApiPosts: WpApiPosts, private router: Router ) { }

  getPosts(){
    this.wpApiPosts.getList().toPromise()
      .then(response => response.json())
      .then(body => this.posts = body)
  }

  ngOnInit() {
    this.getPosts();
  }

  selectPost(slug) {
  	this.router.navigate([slug]);
  }

}
