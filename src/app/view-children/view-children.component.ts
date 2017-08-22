import { Component, OnInit, AfterViewInit, Directive, Input, QueryList, ViewChildren } from '@angular/core';
import { Pane } from '../content-child/content-child.component';

import stringify from 'json-stringify-safe';

@Component({
  selector: 'app-view-children',
  // templateUrl: './view-children.component.html',
  template: `
    <pane id="1"></pane>
    <pane id="2"></pane>
    <pane id="3" *ngIf="shouldShow"></pane>
    <button (click)="show()">Show 3</button>
    <div>panes: {{serializedPanes}}</div>
  `,
  styleUrls: ['./view-children.component.css']
})
export class ViewChildrenComponent implements OnInit, AfterViewInit {
  @ViewChildren(Pane) panes: QueryList<Pane>;
  serializedPanes: string = '';
  shouldShow = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.calculateSerializedPanes();
    this.panes.changes.subscribe((r) => {
      console.log(JSON.stringify(stringify(r)));
      this.calculateSerializedPanes();
    });
  }

  show() {
    this.shouldShow = true;
  }

  calculateSerializedPanes() {
    setTimeout(() => {
      this.serializedPanes = this.panes.map(p => p.id).join(', '); }, 0);
  }
}
