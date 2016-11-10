import {
  inject,
  ComponentFixture,
  TestBed
} from '@angular/core/testing'
import {assert, expect} from 'chai'
import {DemoService, Post} from '../demo/demo.service'
import {DemoModule} from '../demo/demo.module'

describe('demo component', () => {

  beforeEach(() => {
    return TestBed.configureTestingModule({ imports: [DemoModule] })
  })

  it('should get posts', inject([DemoService], (service: DemoService) => {
    service.getPosts().subscribe(posts => {
      assert.isNotNull(posts[0])
      assert.isString(posts[0].title)
      assert.isString(posts[0].body)
      assert.isNumber(posts[0].id)
    })
  }))

  it('should get posts for user 1', inject([DemoService], (service: DemoService) => {
    service.getPosts(1).subscribe(posts => {
      assert.equal(posts[0].userId, 1)
    })
  }))

  it('should create post', inject([DemoService], (service: DemoService) => {
    let post = new Post(1, 'Test Post', 'Test Body')
    service.createPost(post).subscribe(p => {
      assert.isNumber(p.id)
    })
  }))

})
