import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CustomerComponent } from '../customer/customer.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ApiService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Call List';
  closeResult: string;
  fb  = new FormBuilder;
  frmGroup: FormGroup;
  orderList = [];
  displayOrderList = [];
  statusList = [];
  callTypeList = [];

  selectedRow: number = -1;
  
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<CustomerComponent>, private apiService: ApiService) {

  }
  
  ngOnInit() {
    this.frmGroup = this.fb.group({
      callTypeId: 1,
      fromDate: '',
      toDate: '',
      statusId: 0,
    });

    let comp = this;
    comp.apiService.getStatuses().subscribe({
      next(statusList) { comp.statusList = statusList; },
      complete() {
        comp.apiService.getCallTypes().subscribe({
          next(callTypeList) { comp.callTypeList = callTypeList;},
          complete() {
            comp.apiService.getOrders().subscribe({
              next(orderList) {
                orderList.forEach(o => {o.name = comp.getName(o)});
                comp.orderList = orderList;
                comp.displayOrderList = orderList;
              }
          }).unsubscribe();
        }
      }).unsubscribe();
      }
    }).unsubscribe();

    this.onSearchClicked();
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(CustomerComponent, {
      width: '750px',
      data: this.displayOrderList[this.selectedRow]
    });

    let comp = this;
    
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        let order = comp.displayOrderList[comp.selectedRow];
        Object.assign(order, result);
        comp.displayOrderList[comp.selectedRow].name = comp.getName(result);
      }
    });
  }

  onSearchClicked() {
    this.displayOrderList = this.orderList.filter(o => {
      let val = this.frmGroup.controls;
      let fromDate = this.formatDate(val.fromDate.value);
      let toDate = this.formatDate(val.toDate.value);
      
      return (
        o.callTypeId === val.callTypeId.value &&
        (!val.statusId.value || (o.statusId === val.statusId.value)) &&
        (!fromDate || (this.revDate(o.datesold) >= fromDate)) &&
        (!toDate || (this.revDate(o.datesold) <= toDate))
      )
    });
  }

  onRowClicked(i: number) {
    this.selectedRow = i;
  }

  getName(cust: any) {
    return cust.title + ' ' + cust.firstName + ' ' + cust.surName
  }

  formatDate(date: Date) {
    if(date) {
      let mm = this.zeroFormat(date.getMonth() + 1);
      let dd = this.zeroFormat(date.getDate());

      return date.getFullYear() + '/' + mm + '/' + dd;
    }
    else {
      return '';
    }
  }

  zeroFormat(n) {
    return (n < 10 ? '0' : '') + n;
  }

  revDate(date) {
    let val = date.substring(6,10) + '/' + date.substring(3,5) + '/' + date.substring(0,2);
    return val;
  }
}
