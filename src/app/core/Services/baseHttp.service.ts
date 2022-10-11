import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  apiAddress: string = environment.apiUrl;
  constructor(public httpClient: HttpClient) { }

  protected get<T>(url: string,options?: Object): Observable<T> {
    const fullUrl: string = this.apiAddress + url;
    return this.httpClient.get<T>(fullUrl,options);

  }

  protected pots<T>(url: string, body: any): Observable<T> {
    const fullUrl: string = this.apiAddress + url;
    return this.httpClient.post<T>(fullUrl, body);

  }
  protected put<T>(url: string, body: any): Observable<T> {
    const fullUrl: string = this.apiAddress + url;
    return this.httpClient.put<T>(fullUrl, body);

  }

  protected delete<T>(url: string, options?: Object):Observable<T> {
    const fullUrl: string = this.apiAddress + url;
		return this.httpClient.delete<T>(fullUrl, options);
	}
}
