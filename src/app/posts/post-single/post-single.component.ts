import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { ActivatedRoute, Params } from '@angular/router';
import { WpApiPosts } from 'wp-api-angular';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css'],
  })
export class PostSingleComponent implements OnInit {

  post: Post;

  constructor( private wpApiPosts: WpApiPosts, private route: ActivatedRoute ) { }

  getPost(slug){
    this.wpApiPosts.getList({slug: slug}).toPromise()
      .then(response => response.json())
      .then(body => this.post = body[0])
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
       let slug = params['slug'];
       this.getPost(slug)
    });
  }
}
