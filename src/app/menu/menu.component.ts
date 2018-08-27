import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('appMenu', [
      state(MenuComponent.MENU_HIDDEN_STATE, style({transform: 'translateX(0)'})),
      transition(MenuComponent.MENU_HIDDEN_STATE + ' => ' + MenuComponent.MENU_DISPLAYED_STATE, [
        style({transform: 'translateX(0)'}),
        animate('250ms ease-out')
      ]),
      state(MenuComponent.MENU_DISPLAYED_STATE, style({transform: 'translateX(-150%)'})),
      transition(MenuComponent.MENU_DISPLAYED_STATE + ' => ' + MenuComponent.MENU_HIDDEN_STATE, [
        style({transform: 'translateX(-150%)'}),
        animate('250ms ease-out')
      ])
    ])
  ]
})
export class MenuComponent implements OnInit, AfterViewInit {
  
  public static MENU_HIDDEN_STATE = 'hidden';
  public static MENU_DISPLAYED_STATE = 'displayed';

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
