import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from 'src/environments/environment';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: any =URL.live;
  constructor(public http: HttpClient,public util: UtilService) {}

  getData(url) {
    return this.http.get(this.baseUrl + url);
  }

  postData(url, data) {
    let headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin', '*'); 
    headers.set('Access-Control-Allow-Methods', 'DELETE, HEAD, GET, OPTIONS, POST, PUT');
    headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return this.http.post(this.baseUrl + url, data,{headers:headers});
  }

  public post(url, data) {
    let headers = new HttpHeaders();
    headers.set("Accept", "application/json");
    return this.http.post(this.baseUrl + url, data);
  }

  public extrapost(url, data) {
    let headers = new HttpHeaders();
    headers.set("Accept", "application/json");
    return this.http.post(this.baseUrl + url, data);
  }

  public getWithHeader(url) {
    let tok = "Bearer " + localStorage.getItem("token");
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", tok);
    return this.http.get(this.baseUrl + url, { headers: headers });
  }

  public onlyGet(url) {
    let tok = "Bearer " + localStorage.getItem("token");
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", tok);
    return this.http.get(url, { headers: headers });
  }

  public pdfHeader(url, data) {
    // let tok = "Bearer " + localStorage.getItem("token");
    let headers = new HttpHeaders();
    // headers = headers.set("Authorization", tok);
    headers = headers.set("Accept", "application/json");
    return this.http.post(url, data, { headers: headers });
  }

  public postWithHeader(url, data) {
    let tok = "Bearer " + localStorage.getItem("token");
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", tok);
    headers = headers.set("Accept", "application/json");
    return this.http.post(this.baseUrl + url, data, { headers: headers });
  }

  


}
