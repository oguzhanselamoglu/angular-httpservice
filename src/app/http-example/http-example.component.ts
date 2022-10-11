import { Component, OnInit } from '@angular/core';
import { PostResponse } from './model/postResponse';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.scss']
})
export class HttpExampleComponent implements OnInit {

  result: any;
  constructor(private testService: TestService) { }

  ngOnInit(): void {
  }

  get(): void {
    this.testService.getRequest<PostResponse[]>().subscribe((response) => {
      this.result = response;
    })
  }

  post(): void {
    const model = new PostResponse();
    model.id=4;
    model.title ='deneme';
    this.testService.postRequest<PostResponse[]>(model).subscribe((response) => {
      this.result = response;
    })
  }
}
