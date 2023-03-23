import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/app/Models/Property';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties: Array<Property> = [];
  SellRent: number = 1;
  Today = new Date();
  City: string = '';
  SortParameter: string = '';
  SortDirection:string = 'asc';
  constructor(private housingService: HousingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent = 2;
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data => {
        this.Properties = data;
        console.log(this.Properties);
      }

    )
  }
  onSortDirection(){
    if(this.SortDirection === 'desc'){
      this.SortDirection = 'asc'
    } else
    this.SortDirection='desc';
  }

}
