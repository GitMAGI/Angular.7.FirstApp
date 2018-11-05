import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  /*
  * ANALISI DATATABLE
  * Sembra evidente che convenga usare le funzionalità ng (ng-repeat etc) direttamente nel template (html).
  * I principali inconvenienti sono:
  * 1. scrivere nel component codice html in formato stringa (vedi i bottoni delle actions)
  * 2. necessità di importare staticamente css (come font-awesome) nel template (html)
  * 3. semplicità di sviluppo nel gestire i bottoni delle actions non visibili o disabilitati in accordo ai permessi utente (vedi semplicità di uso nei nav)
  * 
  * Ciò che ci si limiterebbe a fare nel component sarebbe:
  * a. recuperare i dati e gli header
  * b. definire le options della datatable
  * c. recuperare i permessi utente per l'area operativa (attualmente sembra che questa area coincida con la porzione di uri dopo l'hostname  e.g. /foo/)
  */

  dtOptions: DataTables.Settings = { };
  dtHeaders: {}[];
  dtData: any[][];

  areaUri: string = "#";
  readPermission: boolean = true;
  writePermission: boolean = true;

  constructor() { }

  ngOnInit() {
    console.log("Contact Component onInit called");

    this.dtHeaders = getHeader();
    this.dtData = getData();
    
    this.dtOptions = {
      order: [[1, 'asc']],
      columnDefs: [
        { "orderable": false, "targets": [0, this.dtHeaders != null ? this.dtHeaders.length + 1 : 0 ]}
      ]
    };

  }

  ngAfterViewInit(){
    console.log("Contact Component afterViewInit called");
  }

  ngOnDestroy() {
    console.log("Contact Component onDestroy called");
  }
}

function getHeader(): {}[]{
  return [
    { 
      title: "Name"
    },
    { 
      title: "Position"
    },
    { 
      title: "Office"
    },
    { 
      title: "Extn."
    },
    { 
      title: "Start date"
    },
    { 
      title: "Salary"
    }    
  ];
}

function getData(): string[][]{
  return [
    [
      "Tiger Nixon",
      "System Architect",
      "Edinburgh",
      "5421",
      "2011/04/25",
      "$320,800"
    ],
    [
      "Garrett Winters",
      "Accountant",
      "Tokyo",
      "8422",
      "2011/07/25",
      "$170,750"
    ],
    [
      "Ashton Cox",
      "Junior Technical Author",
      "San Francisco",
      "1562",
      "2009/01/12",
      "$86,000"
    ],
    [
      "Cedric Kelly",
      "Senior Javascript Developer",
      "Edinburgh",
      "6224",
      "2012/03/29",
      "$433,060"
    ],
    [
      "Airi Satou",
      "Accountant",
      "Tokyo",
      "5407",
      "2008/11/28",
      "$162,700"
    ],
    [
      "Brielle Williamson",
      "Integration Specialist",
      "New York",
      "4804",
      "2012/12/02",
      "$372,000"
    ],
    [
      "Herrod Chandler",
      "Sales Assistant",
      "San Francisco",
      "9608",
      "2012/08/06",
      "$137,500"
    ],
    [
      "Rhona Davidson",
      "Integration Specialist",
      "Tokyo",
      "6200",
      "2010/10/14",
      "$327,900"
    ]
  ];
}