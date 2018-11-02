import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  error: any;

  isDanger: boolean = false;

  constructor(private service: DataService) { }

  ngOnInit() {
    console.log("Home Component onInit called");
  }

  ngOnDestroy() {
    console.log("Home Component onDestroy called");
  }

  async toggleGeneriError_click(){
    if(this.error == null || this.error == '')
      this.error = "Test Errore Daje";
    else
      this.error = null;
  }

  async scaricaDatiAPIFetch_click(){
    this.isDanger = !this.isDanger;
    
    let data = await this.service.getGenricShitFromAPIREST();
    console.log(data);
  }

  async scaricaErroreDatiAPIFetch_click(){
    this.isDanger = !this.isDanger;
    
    let data = await this.service.RESTAPICaller("https://jsonplaceholder.typicode.com/", "posts", "GET", null, {});
    console.log(data);
  }

}
