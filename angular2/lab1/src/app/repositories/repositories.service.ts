import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class RepositoriesService {

  baseUrl: string = "https://api.github.com";
  username: string = "ingleo";

  constructor(private http: Http) {}

  getRepositories(){
    return  this.http.get(this.baseUrl+"/users/"+this.username+"/repos");
  }
}
