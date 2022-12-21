import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/i-product';
import { ProductService } from 'src/app/services/product.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit{
  showMore: boolean = false;
  showToast: boolean = false;
  isConfirmDelete: boolean = false;

  @Input() product: IProduct = {} as IProduct;

  constructor(private productService: ProductService, private toastService: ToasterService){

  }

  ngOnInit(): void {
      
  }

  showToggle(): void{
    this.showMore = !this.showMore;
  }

  setProduct(product: IProduct){
    this.product = JSON.parse(JSON.stringify(product));
  }
  
  cancel(){
    this.product = {}as IProduct;
    this.showMore=false;
  }

  onCreate(){
    this.productService.create(this.product)
      .subscribe(
        (response: IProduct) => {
          this.showMore = false;
          this.product = {} as IProduct;
          this.toastService.showToast = true;
          this.toastService.message = `Berhasil menyimpan data ${response.title}`;
        }
      )
  }

  onUpdate(){
    this.productService.update(this.product)
    .subscribe(
      (response: IProduct) => {
        this.showMore = false;
        this.product = {} as IProduct;
        this.toastService.showToast = true;
        this.toastService.message = `Berhasil mengupdate data ${response.title}`;
      }
    )
  }

  onDelete(){
    this.productService.delete(this.product)
      .subscribe(
        (response: IProduct) => {
          this.showMore = false;
          this.product = {} as IProduct;
          this.toastService.showToast = true;
          this.isConfirmDelete = false;
          this.toastService.message = `Berhasil delete data ${response.title}`;
        }
      )
  }


  

}
