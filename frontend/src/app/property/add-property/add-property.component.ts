import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm} from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Property } from 'src/app/Models/Property';
import { IPropertyBase } from 'src/app/Models/IPropertyBase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs?: TabsetComponent;

  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex'];
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];
  constructor(private route: Router) { }
  propertyView: Property = {
    Id: null,
    Name: '',
    Price: null,
    SellRent: null,
    PropertyType: null,
    FurnishingType: null,
    BHK: null,
    BuiltArea: null,
    City: '',
    ReadyToMove: null,
    Description: null,
    Possession: null,
    Address: null,
    PostedBy: null,
    PostedOn: null
  };
  ngOnInit(): void {
  }

  onBack(){
    this.route.navigate(['/']);
  }
  onSubmit(form: NgForm){
    console.log('hello');
    console.log(form);
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    if (this.formTabs.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }
}
