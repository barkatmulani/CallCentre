import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() orderList: any[];
  @Input() statusList: any[];
  @Output() rowClicked = new EventEmitter();

  activeRow: number = -1;

  constructor() { }

  ngOnInit() {
  }

  getStatusDesc(statusId: number) {
    let val = this.statusList.filter(s => s.statusId === statusId);
    return (val && (val.length > 0) ? val[0].statusDesc : '');
  }

  onRowClicked(i: any) {
    let val = (this.activeRow === i ? -1 : i);
    this.activeRow = val;
    this.rowClicked.emit(val);
  }
}
