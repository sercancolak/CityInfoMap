import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { IPosts, IPostsDto } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private apiService: ApiService) { }
  listPosts(): Observable<Array<IPosts>> {
    const url = environment.serviceUrl + '/posts';
    return this.apiService.get(url).pipe(map((res: Array<IPosts>) => {
      return res;
    }));
  }

  createPosts(data: IPostsDto) {
    const url = environment.serviceUrl + '/posts';
    return this.apiService.post(url, data).pipe(map(res => {
      return res;
    }));
  }

  updatePosts(data: IPostsDto, id: string) {
    const url = environment.serviceUrl + '/posts/' + id;
    return this.apiService.put(url, data).pipe(map(res => {
      return res;
    }));
  }

  deletePosts(id: string) {
    const url = environment.serviceUrl + '/posts/' + id;
    return this.apiService.delete(url).pipe(map(res => {
      return res;
    }));
  }
}