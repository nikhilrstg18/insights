import { DBWidget } from './../../models/db-widget';
import { Component, Input, OnInit } from '@angular/core';
// import '@cds/core/icon/register.js';
// import { ClarityIcons, bellIcon } from '@cds/core/icon';

@Component({
  selector: 'i-dbwidget',
  templateUrl: './dbwidget.component.html',
  styleUrls: ['./dbwidget.component.scss'],
})
export class DBWidgetComponent implements OnInit {
  @Input() public issue: DBWidget = new DBWidget();
  constructor() {
    // ClarityIcons.addIcons(bellIcon);
  }

  ngOnInit(): void {}
}
