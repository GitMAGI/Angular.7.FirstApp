import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  dtOptions: DataTables.Settings = {

  };

  constructor() { }

  ngOnInit() {
    console.log("Contact Component onInit called");
  }

  ngAfterViewInit(){
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

  ngOnDestroy() {
    console.log("Contact Component onDestroy called");
  }

}
