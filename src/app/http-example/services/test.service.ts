import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from 'src/app/core/Services/baseHttp.service';


@Injectable({
  providedIn: 'root'
})
export class TestService extends BaseHttpService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getRequest<T>(): Observable<T>{

    return this.get<T>('Posts')
  }
  postRequest<T>(model: any): Observable<T>{

    return this.pots<T>('Posts',model);
  }
}
