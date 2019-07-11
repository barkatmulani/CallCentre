import {Component, Input, OnInit, OnChanges, Inject} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  frmGroup: FormGroup;
  fb = new FormBuilder();

  constructor(public dialogRef: MatDialogRef<CustomerComponent>,
              @Inject(MAT_DIALOG_DATA) public order: any) {}

  ngOnInit() {
    this.frmGroup = this.fb.group({
      title: '',
      firstName: '',
      surName: '',
      mobilePhone: '',
      homePhone: ''
    });

    this.frmGroup.patchValue(this.order);
  }

  onCallClicked(type: number) {
    this.order.statusId = 2;
  }

  onResetClicked() {
    this.frmGroup.patchValue(this.order);
  }

  onCallComplete() {
    let val = this.frmGroup.value
    val.statusId = 3;
    this.dialogRef.close(val);
  }
}