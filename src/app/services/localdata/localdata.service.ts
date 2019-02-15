import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocaldataService {

  constructor(
    private http: HttpClient
  ) { }

  /* 
   Gets data with a promise which will return with the data when the task is complete
   Uses generic type T to define schema interface to ensure returning json matches schema template.
*/
  public getJSONDataAsync(filePath: string): Promise<any> {
    console.log(filePath);
    return new Promise((resolve, reject) => {
      this.http.get(filePath)
        .subscribe(
          res => {
            resolve(res);
          }
        );
    }).catch((reason) => this.handleError(reason));
  }

  /* Takes an error, logs it to the console, and throws it */
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
