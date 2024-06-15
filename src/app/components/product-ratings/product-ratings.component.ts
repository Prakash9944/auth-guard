import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-ratings',
  templateUrl: './product-ratings.component.html',
  styleUrls: ['./product-ratings.component.css']
})
export class ProductRatingsComponent implements OnInit {
    private unsavedChanges = false;
    selectedRating: number | null = null;

    constructor() { }

    ngOnInit(): void {
    }

    rateProduct() {
        if (this.selectedRating !== null) {
            console.log('Rating:', this.selectedRating);
            this.unsavedChanges = true;
        }
    }

    saveChanges() {
        console.log('Saving changes...');
        this.unsavedChanges = false;
    }

    hasUnsavedChanges(): boolean {
        return this.unsavedChanges;
    }
}
