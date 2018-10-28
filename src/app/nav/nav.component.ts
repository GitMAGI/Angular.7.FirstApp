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
    // Simuliamo la chiamata all'API
    this.menuList = [
      {visible: true, enabled: true, title: "Voce1", icon: "glyphicon glyphicon-off", href: "/voce1"},
      {visible: true, enabled: true, title: "Voce2", icon: "glyphicon glyphicon-trash", href: "/voce2"},
      {visible: false, enabled: false, title: "Voce3", icon: "glyphicon glyphicon-home", href: "/voce3"},
      {visible: true, enabled: false, title: "Voce4", icon: "glyphicon glyphicon-tint", href: "/voce4"},
      {visible: true, enabled: false, title: "Voce5", icon: "glyphicon glyphicon-headphones", href: "/voce5"},
      {visible: true, enabled: true, title: "Voce6", icon: "glyphicon glyphicon-lock", href: "/voce6"},
    ];
  }

}
