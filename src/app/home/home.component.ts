import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isDanger: boolean = false;

  constructor(private service: DataService) { }

  ngOnInit() {
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
