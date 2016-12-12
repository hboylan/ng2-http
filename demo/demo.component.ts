import {Component, Input, OnInit} from '@angular/core';
import {DemoService, Post} from './demo.service';

@Component({
  selector: 'demo-app',
  template: `
    <h3>Sample Posts</h3>

    <form (ngSubmit)="onSubmit()" *ngIf="!isLoading" style="margin-bottom: 10px">
      <div class="form-group">
        <label for="userId">User ID</label>
        <input type="text" class="form-control" id="userId" name="userId" placeholder="User ID" [(ngModel)]="demoPost.userId">
      </div>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" name="title" placeholder="Title" [(ngModel)]="demoPost.title">
      </div>
      <div class="form-group">
        <label for="body">Body</label>
        <input type="text" class="form-control" id="body" name="body" placeholder="Body" [(ngModel)]="demoPost.body">
      </div>
      <button type="submit" class="btn btn-primary">Create</button>
    </form>

    <button class="btn btn-info" (click)="onGetUserPosts()">Get User {{demoPost.userId}} posts</button>

    <table class="table table-hover">
      <thead>
        <tr><th>#</th><th>User</th><th>Title</th><th>Body</th></tr>
      </thead>
      <tbody>
        <tr *ngFor="let post of posts">
          <th>{{post.id}}</th>
          <td>{{post.userId}}</td>
          <td>{{post.title}}</td>
          <td>{{post.body}}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class Demo implements OnInit {
  @Input() posts: Post[] = []
  @Input() demoPost: Post = new Post(1, 'Demo Post', 'Lorem Ipsum')
  @Input() isLoading: boolean

  constructor(private service: DemoService) {}

  ngOnInit() {
    this.service.getPosts().subscribe(posts => {
      this.posts = posts
    })
  }

  onSubmit() {
    this.isLoading = true
    this.service.createPost(this.demoPost).subscribe(post => {
      this.isLoading = false
      this.posts.push(post)
      this.demoPost = new Post(1, 'Demo Post', 'Lorem Ipsum');
    })
  }

  onGetUserPosts() {
    this.isLoading = true
    this.service.getPosts(this.demoPost.userId).subscribe(posts => {
      this.isLoading = false
      this.posts = posts
    })
  }
}
