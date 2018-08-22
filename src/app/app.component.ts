import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo1';
  imgUrl = '/assets/Spinner-1s-200px.svg';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.load_image();
  }

  load_image() {
    this.httpClient.get('/api/breeds/image/random').subscribe((v: any) => {
      this.imgUrl = v.message;
    });
  }
}
