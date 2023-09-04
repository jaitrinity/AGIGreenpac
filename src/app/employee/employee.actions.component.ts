import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ViewCell } from "ng2-smart-table";

@Component({
    selector: 'button-view',
    template: `
    <i class="fa fa-pencil empActionBtn" (click)="onClickOne()" *ngIf="rowData.active === '1'" title="Edit"></i> &nbsp; 
    <i class="fa fa-check empActionBtn" (click)="onClickTwo()" *ngIf="rowData.active === '0'" title="Active"></i>  &nbsp;
    <i class="fa fa-times empActionBtn" (click)="onClickThree()" *ngIf="rowData.active === '1'" title="Deactive"></i>
    `,
})

export class EmployeeActionComponent implements ViewCell, OnInit{
    renderValue: string;
    @Input() value: string | number;
    @Input() rowData: any;

    @Output() clickOne: EventEmitter<any> = new EventEmitter();
    @Output() clickTwo: EventEmitter<any> = new EventEmitter();
    @Output() clickThree: EventEmitter<any> = new EventEmitter();
    ngOnInit() {
        this.renderValue = this.value.toString().toUpperCase();
    }

    onClickOne() {
        this.clickOne.emit(this.rowData);
    }
    onClickTwo() {
        this.clickTwo.emit(this.rowData);
    }
    onClickThree() {
        this.clickThree.emit(this.rowData);
    }
}