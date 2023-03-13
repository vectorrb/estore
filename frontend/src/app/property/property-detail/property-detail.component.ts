import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.propertyId = this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id'];
      }
    );
  }
  onSelectNext(){
    this.propertyId = Number(this.propertyId) + 1;
    console.log(this.propertyId);
    this.router.navigate(['DetailProperty', this.propertyId]);
  }
}
