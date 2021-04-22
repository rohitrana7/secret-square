import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  scrollToTop(){
    console.log('inside button')
    // window.scroll(0,0);
    let elmt = document.getElementById("lelo");
    elmt.scrollIntoView();
    //elmt.scroll(0,0);
  }

  ngOnInit() {
  }

}
