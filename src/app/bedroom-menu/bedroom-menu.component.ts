import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bedroom-menu',
  templateUrl: './bedroom-menu.component.html',
  styleUrls: ['./bedroom-menu.component.css']
})
export class BedroomMenuComponent implements OnInit {
  // driveLink:string = `https://drive.google.com/drive/folders/1idPvMRDHjWbjfoy_sbhONI3SRBttDSF3?usp=sharing`

  // linkObj = {
  //   'drive/folders/' : 'embeddedfolderview?id=',
  //   '?usp=sharing' : '#grid'
  // }
  // newVar:string;

  constructor() { }

  ngOnInit() {
    // this.driveLink = this.driveLink.replace('drive/folders/','embeddedfolderview?id=')
    // this.driveLink = this.driveLink.replace('?usp=sharing','#grid')
    // console.log(this.driveLink);
  }

}
