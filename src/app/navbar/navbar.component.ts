import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  subCategories: any[] = [
    {
      name:'Beds & Wardrobes',
      routerLink : '/bedroom',
      routerLinkActive :'active'
    },
    {
      name:'Kitchen',
      routerLink : '/kitchen',
      routerLinkActive :'active'
    },
    {
      name:'Tables & Dinings',
      routerLink : '/tables',
      routerLinkActive :'active'
    },
    {
      name:'Living Room',
      routerLink : '/livingRoom',
      routerLinkActive :'active'
    },
    {
      name:'Offices',
      routerLink : '/offices',
      routerLinkActive :'active'
    },
    {
      name:'Others',
      routerLink : '/others',
      routerLinkActive :'active'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
