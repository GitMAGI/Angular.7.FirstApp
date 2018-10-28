import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  funzioneClick(){
    return console.log("Chliccato ma sono in unservice");
  }

  async getGenricShitFromAPIREST(){
    console.log("Avvio getGenricShitFromAPIREST");

    let endpoint: string = "https://jsonplaceholder.typicode.com/";
    let verb: string = "GET";
    let body: string = null;
    let headers: {} = {};

    let data = await fetch(endpoint + "posts", {
      method: verb,
      body: body,
      headers: headers
    })
    .then(function(response) {
      let status = response.status;
      let statusText = response.statusText;
      let headers = response.headers;
      let url = response.url;

      // console.log("Response Log - BEGIN");
      // console.log("status");
      // console.log(status);
      // console.log("statusText");
      // console.log(statusText);
      // console.log("headers");
      // console.log(headers);
      // console.log("url");
      // console.log(url);
      // console.log("Response Log - END");

      return response.json();
    })
    .then(function(json){
      return json;
    });

    console.log("getGenricShitFromAPIREST completata");

    return data;
  }


  async RESTAPICaller(endpoint: string, uri: string, verb: string, body: string, headers: {}){
    console.log("Avvio RESTAPICaller");

    let data = await fetch(endpoint + uri, {
      method: verb,
      body: body,
      headers: headers
    })  
    .then(function(response){
      let status = response.status;
      let statusText = response.statusText;
      let headers = response.headers;
      let url = response.url;

      // console.log("Response Log - BEGIN");
      // console.log("status");
      // console.log(status);
      // console.log("statusText");
      // console.log(statusText);
      // console.log("headers");
      // console.log(headers);
      // console.log("url");
      // console.log(url);
      // console.log("Response Log - END");

      return response;
    })    
    .then(function(response) {
      return response.json();
    })    
    .then(function(json){
      return json;
    })
    .catch(function(err){
      console.log("Rilevato Errore: ", err);
    })
    .finally(function(){
      console.log("Esecuzione Finally");
    });

    console.log("RESTAPICaller completata");

    return data;
  }
  
}