import { Component, Input } from "@angular/core";
import { Property } from "src/app/Models/Property";

@Component({
  selector: 'app-property-card',
  // template: '<h1>I am a card</h1>',
  templateUrl: 'property-card.component.html',
  // styles: ['h3 { font-weight: normal}']
  styleUrls: ['property-card.component.css']
}

)
export class PropertyCardComponent{
@Input() property: Property;
@Input() hideIcons: boolean;
ngOnInit(): void {
console.log(this.property.Name);
}
}

