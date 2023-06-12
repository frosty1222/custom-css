import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})

export class DemoComponent {
  viewColumnStatus:boolean = true;

  header:any[] = [
    {name:"",status:true,subName:"status",className:"status"},
    {name:"",status:true,subName:"search",className:"search"},
    {name:"A",status:true},
    {name:"B",status:true},
    {name:"C",status:true},
    {name:"D",status:true},
    {name:"E",status:true},
  ];
  viewColumn:any[] = [
    {name:"STD",status:true},
    {name:"ATD",status:true},
    {name:"Nature",status:true},
    {name:"ETD",status:true},
    {name:"Bay",status:true}
  ]

  isChecked: boolean[] = [];

  toggleSwitch(index:number): void {
    this.isChecked[index] = !this.isChecked[index];
  }
  closeViewColumn(value:boolean){
    console.log("viewColumnStatus",value)
    this.viewColumnStatus = value;
  }
}
