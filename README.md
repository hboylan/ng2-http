# ng2-http

<!-- [![Build Status](https://travis-ci.org/hboylan/ng2-http.svg?branch=master)](https://travis-ci.org/hboylan/ng2-http) -->
[![npm version](https://badge.fury.io/js/ng2-http.svg)](http://badge.fury.io/js/ng2-http)
[![devDependency Status](https://david-dm.org/hboylan/ng2-http/dev-status.svg)](https://david-dm.org/hboylan/ng2-http?type=dev)
[![peerDependency Status](https://david-dm.org/hboylan/ng2-http/peer-status.svg)](https://david-dm.org/hboylan/ng2-http?type=peer)
[![GitHub issues](https://img.shields.io/github/issues/hboylan/ng2-http.svg)](https://github.com/hboylan/ng2-http/issues)
[![GitHub stars](https://img.shields.io/github/stars/hboylan/ng2-http.svg)](https://github.com/hboylan/ng2-http/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/hboylan/ng2-http/master/LICENSE)
[![Join the chat at https://gitter.im/ng2-http/Lobby](https://badges.gitter.im/ng2-http/Lobby.svg)](https://gitter.im/ng2-http/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Demo
https://hboylan.github.io/ng2-http/demo

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

Angular2 HttpModule wrapper with decorators and interceptors

### Shoutout! (╯°□°）╯

Based the source code from [this](https://github.com/Paldom/angular2-rest) repo.

## Installation

Install through yarn:
```bash
yarn add ng2-http
```

Install through npm:
```bash
npm install --save ng2-http
```

Then use it in your app like so:

```typescript
// demo.module.ts
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RESTModule} from 'ng2-http';
import {Demo} from './demo.component';
import {DemoService} from './demo.service';

@NgModule({
  declarations: [Demo],
  imports: [BrowserModule, RESTModule],
  bootstrap: [Demo],
  providers: [DemoService]
})
export class DemoModule {}
```

```typescript
// demo.service.ts
import {Injectable} from '@angular/core';
import {Http, Request, Response} from '@angular/http';
import {RESTClient, BaseUrl, DefaultHeaders, GET, POST, Body, Query, Produces} from 'ng2-http';
import {Observable} from 'rxjs/Observable';

@Injectable()
@BaseUrl('https://jsonplaceholder.typicode.com')
@DefaultHeaders({
  'Accept': 'application/json',
  'Content-Type': 'application/json'
})
export class DemoService extends RESTClient {

  constructor(protected http: Http) {
    super(http);

    // Optional
    this.withCredentials = true;
  }

  protected requestInterceptor(req: Request): Observable<Request> {
    return super.requestInterceptor(req); // wraps Observable.of
  }

  protected responseInterceptor(res: Observable<Response>): Observable<Response> {
    return res;
  }

  @POST('/posts')
  @Produces<Post>()
  public createPost(@Body post: Post): Observable<Post> {
    return null;
  }

  @GET('/posts')
  @Produces<Post[]>()
  public getPosts(@Query('userId') userId?: number): Observable<Post[]> {
    return null;
  }
}

export class Post {

  constructor(
    public userId: number,
    public title: string,
    public body: string,
    public id?: number
  ) {}
}
```

```typescript
// demo.component.ts
import {Component, Input} from '@angular/core';
import {DemoService, Post} from './demo.service';

@Component(...)
export class Demo {
  @Input() public demoPost: Post = new Post(1, 'Demo Title', 'Demo Body');
  @Input() public demoList: Post[] = [];

  constructor(public demoService: DemoService) {
    this.getPosts();
  }

  createPost() {
    this.demoService.createPost(this.demoPost);
  }

  getPosts() {
    this.demoService.getPosts().subscribe(posts => {
      this.demoList = posts;
    });
  }
}
```

## Documentation
All documentation is auto-generated from the source via typedoc and can be viewed here:
https://hboylan.github.io/ng2-http/docs/

---

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (experts only)
```bash
npm run release
```

## License

MIT
