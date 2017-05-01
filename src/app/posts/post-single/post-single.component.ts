import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { PostContentResolverService } from '../post-content-resolver.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css'],
  providers: [PostsService]
})
export class PostSingleComponent implements OnInit {

  post: any;
  error: any;

  // @ViewChild('content') content;
  @ViewChild('content', { read: ViewContainerRef }) content;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    // private domSanitizer: DomSanitizer,
    private componentFactoryResolver: ComponentFactoryResolver,
    // private viewContainerRef: ViewContainerRef,
    private postContentResolverService: PostContentResolverService
  ) { }

  // ngAfterViewInit() {
  //   this.viewContainerRef.createEmbeddedView(this.content);
  // }

  getPost(slug) {
    this.postsService
      .getPost(slug)
      .subscribe((res) => {
        // success
        this.post = res[0];
        let component = this.postContentResolverService.createDynamicComponent(this.post.content.rendered);
        let componentFactory = this.postContentResolverService.createAdHocComponentFactory(component);

        let componentRef = this.content.createComponent(componentFactory);
        componentRef.changeDetectorRef.detectChanges();

        // this.content = this.domSanitizer.bypassSecurityTrustHtml(this.post.content.rendered) ;
      }, (err) => {
        // error
        this.error = err;
      });
  }

  ngOnInit() {

    this.route.params.forEach((params: Params) => {
      let slug = params['slug'];
      this.getPost(slug);
    });

  }

}
