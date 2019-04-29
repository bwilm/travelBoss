import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { emit } from 'cluster';
import { SidenavListComponent } from 'src/app/navigation/sidenav-list/sidenav-list.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() SideNavigationToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onToggleOpenSideNav() {

    this.SideNavigationToggle.emit();

  }

}
