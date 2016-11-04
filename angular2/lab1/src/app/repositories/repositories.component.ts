import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from './repositories.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})

export class RepositoriesComponent implements OnInit {

  repositories: any = [];
  repository: IRepository;
  newRepository: IRepository = { name: "", description: "" };

  constructor(private repositoriesService: RepositoriesService) { }

  ngOnInit() {
    setTimeout(() => {
      this.repositoriesService.getRepositories().subscribe((data) => {
        this.repositories = data.json();
        this.repository = this.repositories[0];
      })
    })

    /* setTimeout(() => {
       this.repositories = [
         { name: "Angular 2", description: "Proyecto Angular 2" },
         { name: "Python", description: "Proyecto Python" },
         { name: "Ruby", description: "Proyecto Ruby" },
         { name: "NodeJS", description: "Proyecto NodeJS" }
       ];
     }, 3000)
 
     */
  }

  setSelectedRepository(repository) {
    this.repository = repository;
  }

  addNewRepo() {
    this.repositories.unshift(this.newRepository);
    this.newRepository = { name: "", description: "" };
  }
}

interface IRepository {
  name: string,
  description: string
}
