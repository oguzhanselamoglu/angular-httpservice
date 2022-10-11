# Angular http Service

Base bir http service üzerinden aşağıdaki http methodlarını kullanarak http requestleri oluşturuldu

* Get 
* Post 
* Put 
* Patch 
* Delete 

# Base Http service

Projenin genelinde kullanılacak api istekleri için hazırlayacağımız servislerde extend edilerek kullanacağımız Custom http Service
 ```
export class BaseHttpService {

  apiAddress: string = environment.apiUrl;
  constructor(public httpClient: HttpClient) { }

  protected get<T>(url: string,options?: Object): Observable<T> {
    const fullUrl: string = this.apiAddress + url;
    return this.httpClient.get<T>(fullUrl,options);

  }
  ...
}
 ```

 ```
export class TestService extends BaseHttpService {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  ...
}
 ```
