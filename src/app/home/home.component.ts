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
      var img = document.getElementById("logo")!;
      header.classList.add("additional");
      header.classList.remove("headerContent-additional");
        img.classList.add("logo-img");
    }else if (window.pageYOffset < 585) {
      var header = document.getElementById("headerContent")!;
      var img = document.getElementById("logo")!;
      header.classList.add("headerContent-additional");
      header.classList.remove("additional");
      img.classList.remove("logo-img");

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
