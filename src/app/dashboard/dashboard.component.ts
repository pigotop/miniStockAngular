import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../api/product.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogProductComponent } from '../dialog-product/dialog-product.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  public results:string[];
  constructor(public router:Router, public productService:ProductService, public dialog:MatDialog) { }

  openDialog(){
    this.dialog.open(DialogProductComponent,{
      width : '500px'
    })
  }
  products:{};

  ngOnInit(): void {
    this.productService.getPorduct().subscribe((data:{})=>{
      console.log(data);
      this.products = data;
    });

  }
  backTOLogin(){
    this.router.navigate(['login']);
  }
  
}
