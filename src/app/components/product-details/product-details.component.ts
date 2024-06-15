import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
    productDetail? : any;

    constructor(private route: ActivatedRoute, private productService: ProductService) { }

    ngOnInit(): void {
        console.log("route", this.route)
        let productId = this.route.snapshot.params['id'];
        this.getProductDetailById(productId)
    }

    getProductDetailById(id: number) {
        this.productService.getProductDetailById(id).subscribe(res => {
            this.productDetail = res
            console.log(res)
        });
    }
}
