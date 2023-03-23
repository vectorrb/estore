import { Injectable, LOCALE_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Property } from '../Models/Property';
import { Observable } from 'rxjs/internal/Observable';
import { JsonPipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) {
  }
  private Properties: Array<Property[]>;
  getAllProperties(SellRent?: number): Observable<Property[]> {
    return this.http.get<Property[]>('data/properties.json').pipe(
      map(data =>{
        const properties: Array<Property> = [];
        const localProperties: Array<Property> = JSON.parse(localStorage.getItem('Prop'));
        if(localProperties){
          for(const id in localProperties){
            if(SellRent){
              if(localProperties.hasOwnProperty(id)&&localProperties[id].SellRent === SellRent){
                properties.push(localProperties[id]);
              }
            }else{
              properties.push(localProperties[id]);
            }
          }
        }
        for(const id in data){
          if(data.hasOwnProperty(id) && data[id].SellRent === SellRent){
            properties.push(data[id]);
          }else
          properties.push(data[id]);
        }
        return properties;
      })
    );
    return this.http.get<Property[]>('data/properties.json');
  }

  addProperty(property: Property){
    let newProperty = [property];
    if(localStorage.getItem('Prop')){
      newProperty=[property,...JSON.parse(localStorage.getItem('Prop'))];
    }
    localStorage.setItem('Prop', JSON.stringify(newProperty));
  }

  newPropId(){
    if(localStorage.getItem('PID')){
      localStorage.setItem('PID', String(+localStorage.getItem('PID') + 1));
      console.log(+localStorage.getItem('PID'))
      return +localStorage.getItem('PID');
    } else{
      localStorage.setItem('PID', '101');
      console.log(101);
      return 101;
    }
  }

  getProperty(id: number){
    return this.getAllProperties().pipe(
      map(propertiesArray =>{
        console.log(propertiesArray);
        return propertiesArray.find(p=>p.Id == id);
      })
    );
  }


}
