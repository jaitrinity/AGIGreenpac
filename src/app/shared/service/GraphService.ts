import { Injectable } from '@angular/core';
import { Http , RequestOptions , Response , Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Constant } from '../constant/Contant';

@Injectable({ providedIn: 'root'})
export class GraphService{
  
    private phpServicePoint;
    constructor(private http:Http){
        this.phpServicePoint = Constant.phpServiceURL;
    }
    
    public getAllListBySelectType(jsonData: any, selectType : string) {
        let bodyString = JSON.stringify(jsonData);
        return this.http.post(this.phpServicePoint+'getAllList.php?selectType='+selectType,bodyString)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public gererateGraph(jsonData : any){
        let bodyString = JSON.stringify(jsonData);
        return this.http.post(this.phpServicePoint+'generateGraph.php',bodyString)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}