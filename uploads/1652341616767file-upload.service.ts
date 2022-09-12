import { Injectable } from '@angular/core';
//import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  // API url
  baseApiUrl = 'http://localhost:1869/api/v1/ticket/createEvent';

  url = 'http://localhost:1869/api/v1/ticket/getProfile';

  constructor(private http: HttpClient) {}

  getdata(data: any): Observable<any> {
    return this.http
      .get(this.url, data)
      .pipe(map(this.extractData), catchError(this.handleErrorObservable));
  }

  // Returns an observable
  upload(file, data): Observable<any> {
    //   const headers = { 'Content-Type': undefined}

    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append('file', file, file.name);
    formData.append('data', data);
    //   formData.append("name", this.form.get('name').value);
    //     formData.append("avatar", this.form.get('avatar').value);

    // Make http post request over api
    // with formData as req this.http.post<any>('https://reqres.in/api/posts', body, { headers }).subscribe(data => {
    //     this.postId = data.id;
    // });
    return this.http
      .post(this.baseApiUrl, formData)
      .pipe(map(this.extractData), catchError(this.handleErrorObservable));
  }
  private extractData(res: any) {
    let body = res;
    return body;
  }
  private handleErrorObservable(error: any) {
    console.error(error.message || error);
    return throwError(error);
  }
}
