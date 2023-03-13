import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Property } from '../Models/Property';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) {
  }
  private Properties: Array<Property[]>;
  getAllProperties(SellRent: number): Observable<Property[]> {
    return this.http.get<Property[]>('data/properties.json').pipe(
      map(data =>{
        const propertiesArray: Array<Property> = [];
        for(const id in data){
          if(data.hasOwnProperty(id) && data[id].SellRent === SellRent){
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    )

  }

}
