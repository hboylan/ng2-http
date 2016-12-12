import {Injectable} from '@angular/core';
import {Http, Request, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {RESTClient, BaseUrl, DefaultHeaders, Produces, Query, Body, GET, POST} from '../src/rest.service';

@Injectable()
@BaseUrl('https://jsonplaceholder.typicode.com')
@DefaultHeaders({
  'Accept': 'application/json',
  'Content-Type': 'application/json'
})
export class DemoService extends RESTClient {

  constructor(protected http: Http) {super(http)}

  protected requestInterceptor(req: Request): Request {
    return req;
  }

  protected responseInterceptor(res: Observable<Response>): Observable<Response> {
    return res;
  }

  @GET('/posts')
  @Produces<Post[]>((res: Response) => {
    res.headers.forEach((values: string[], name: string) => {
      console.log(name, '=', values)
    })
  })
  public getPosts(@Query('$userId') userId?: number): Observable<Post[]> {
    return null;
  }

  @POST('/posts')
  @Produces<Post>()
  public createPost(@Body post: Post): Observable<Post> {
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
