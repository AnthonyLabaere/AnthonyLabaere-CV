import { Component, OnInit, AfterViewInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; // <-- do not forget to import

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  public fragment = 'home';

  public showMenu = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment && fragment !== null) {
        this.fragment = fragment;

        try {
          document.querySelector('#' + this.fragment).scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
        } catch (e) {}
      }

    });
  }

  ngAfterViewInit(): void {
    if (this.fragment !== null) {
      try {
        document.querySelector('#' + this.fragment).scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
      } catch (e) {}
    }
  }
}
