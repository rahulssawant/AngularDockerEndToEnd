import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDockerEndToEnd';

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get(`http://localhost:8081/WeatherForecast`).subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
        }
      )
  }
}
