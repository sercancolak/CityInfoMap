import { Injectable } from '@angular/core';
import { IPosts } from '../models/posts';
import { MapService } from './map.service';
import { PostsService } from './posts.service';
declare var L: any;
@Injectable({
  providedIn: 'root'
})
export class HelperService {
  tableClickData: IPosts;
  dataSource: Array<IPosts>;
  constructor(private mapService: MapService, private postsService: PostsService) { }

  tableOnClick(e) {
    this.tableClickData = e;
    L.marker([e.lat, e.long]).addTo(this.mapService.mymap)
      .bindPopup(e.content).openPopup();
  }

  listPostsData() {
    this.postsService.listPosts().subscribe(res => {
      this.dataSource = res;
      res.forEach(element => {
        L.marker([element.lat, element.long]).addTo(this.mapService.mymap)
          .bindPopup(element.title);
        this.mapService.mymap.setView(new L.LatLng(element.lat, element.long), 4);

      });
    });
  }

}
