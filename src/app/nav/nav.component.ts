import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  appTitle: string = 'appBinded';

  menuList: {}[] = null;

  constructor() { }

  ngOnInit() {
    console.log("Nav Component onInit called");
    // Simuliamo la chiamata all'API
    this.menuList = [
      {visible: true, enabled: true, title: "Voce1", icon: "bus-alt", href: "/voce1"},
      {visible: true, enabled: true, title: "Voce2", icon: "trash", href: "/voce2"},
      {visible: false, enabled: false, title: "Voce3", icon: "home", href: "/voce3"},
      {visible: true, enabled: false, title: "Voce4", icon: "tint", href: "/voce4"},
      {visible: true, enabled: false, title: "Voce5", icon: "headphones", href: "/voce5"},
      {visible: true, enabled: true, title: "Voce6", icon: "lock", href: "/voce6"},
    ];
  }

  ngOnDestroy() {
    console.log("Nav Component onDestroy called");
  }

}
