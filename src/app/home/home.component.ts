import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  value = 1;
  constructor() { }

  ngOnInit(): void {
    this.slide();
  }
  @HostListener('window:scroll', ['$event']) 
  scrollHandler(event:any) {
    console.log(window.pageYOffset);

    if (window.pageYOffset > 585) {
      var header = document.getElementById("headerContent")!;
      header.setAttribute(
        "style", "position: fixed; background-color: white; color: black; box-shadow: 0px 4px 20px 0px #dccaca;");
    }else if (window.pageYOffset < 585) {
      var header = document.getElementById("headerContent")!;
      header.setAttribute(
        "style", "position: relative;");
    }
    
  }
 
  slide(){
    var header = document.getElementById("header-img")!;
    var images = header.getElementsByTagName("img");
    for (let index = 0; index < images.length; index++) {
      images[index].style.display = "none";
    }
    this.value++;
    if (this.value > images.length) {
      this.value = 1;
    }
    
    images[this.value -1].style.display = "block";
    setTimeout(() => {
      this.slide();
    }, 3000);
  }
}
