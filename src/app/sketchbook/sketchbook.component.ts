import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sketchbook',
  templateUrl: './sketchbook.component.html',
  styleUrls: ['./sketchbook.component.css']
})
export class SketchbookComponent {
  index = 0;
  imgsIndex = 0;
  imgs1: string[] = [
    "../assets/sketchbook/s-02.png",
    "../assets/sketchbook/s-03.png",
    "../assets/sketchbook/s-04.png",
    "../assets/sketchbook/s-05.png",
    "../assets/sketchbook/s-06.png",
    "../assets/sketchbook/s-07.png",
    "../assets/sketchbook/s-08.png",
  ];
  imgs2: string[] = [
    "../assets/sketchbook/s-09.png",
    "../assets/sketchbook/s-10.png",
    "../assets/sketchbook/s-11.png",
    "../assets/sketchbook/s-12.png",
    "../assets/sketchbook/s-13.png",
    "../assets/sketchbook/s-14.png",
    "../assets/sketchbook/s-15.png",
    "../assets/sketchbook/s-16.png",
    "../assets/sketchbook/s-17.png",
    "../assets/sketchbook/s-18.png",
    "../assets/sketchbook/s-19.png",
  ];
  imgs3: string[] =[
    "../assets/sketchbook/s-20.png",
    "../assets/sketchbook/s-21.png",
    "../assets/sketchbook/s-22.png",
    "../assets/sketchbook/s-23.png",
    "../assets/sketchbook/s-24.png",
    "../assets/sketchbook/s-25.png",
    "../assets/sketchbook/s-26.png",
    "../assets/sketchbook/s-27.png",
    "../assets/sketchbook/s-28.png",
    "../assets/sketchbook/s-29.png",
    "../assets/sketchbook/s-30.png",
  ]
  imgs4: string[] =[
    "../assets/sketchbook/s-31.png",
    "../assets/sketchbook/s-32.png",
    "../assets/sketchbook/s-33.png",
    "../assets/sketchbook/s-36.png",
    "../assets/sketchbook/s-37.png",
    "../assets/sketchbook/s-38.png",
    "../assets/sketchbook/s-39.png",
    "../assets/sketchbook/s-40.png",
    "../assets/sketchbook/s-41.png",
    "../assets/sketchbook/s-42.png",
    "../assets/sketchbook/s-43.png",
  ]
  imgs5: string[] =[
    "../assets/sketchbook/s-44.png",
    "../assets/sketchbook/s-45.png",
    "../assets/sketchbook/s-46.png",
    "../assets/sketchbook/s-47.png",
    "../assets/sketchbook/s-48.png",
    "../assets/sketchbook/s-49.png",
    "../assets/sketchbook/s-50.png",
    "../assets/sketchbook/s-51.png",
    "../assets/sketchbook/s-52.png",
    "../assets/sketchbook/s-53.png",
    "../assets/sketchbook/s-54.png",
  ]
  imgs6: string[] =[
    "../assets/sketchbook/s-55.png",
    "../assets/sketchbook/s-56.png",
    "../assets/sketchbook/s-57.png",
    "../assets/sketchbook/s-58.png",
    "../assets/sketchbook/s-59.png",
    "../assets/sketchbook/s-60.png",
    "../assets/sketchbook/s-61.png",
    "../assets/sketchbook/s-62.png",
    "../assets/sketchbook/s-63.png",
    "../assets/sketchbook/s-64.png",
    "../assets/sketchbook/s-65.png",
    "../assets/sketchbook/s-66.png",
  ]
  imgs7: string[] =[
    "../assets/sketchbook/s-67.png",
    "../assets/sketchbook/s-68.png",
    "../assets/sketchbook/s-69.png",
    "../assets/sketchbook/s-70.png",
    "../assets/sketchbook/s-71.png",
    "../assets/sketchbook/s-72.png",
    "../assets/sketchbook/s-73.png",
    "../assets/sketchbook/s-74.png",
    "../assets/sketchbook/s-75.png",
  ]

  currentImgs: string[] = []; // Tracks the currently displayed images


  @ViewChild('page', { static: true }) 
  pageImage: ElementRef<HTMLImageElement> | undefined;

  ngAfterViewInit(): void {
    this.display();
  }

  display(): void {
    if(this.imgsIndex== 0){
      this.currentImgs = this.imgs1
    }
    if (this.pageImage) {

      this.pageImage.nativeElement.src = this.currentImgs[this.index];
    }
  }

  back(): void {
    if (this.index !== 0) {
      this.index = this.index - 1;
      this.display();
    }
  }

  forward(): void {
    if (this.index !== this.currentImgs.length - 1) {
      this.index = this.index + 1;
      this.display();
    }
  }

  switch1(): void {
    this.imgsIndex = 0;
    this.index = 0; // Reset the index when switching images
    this.currentImgs = this.imgs1
    this.display();
  }
  switch2(): void {

    this.imgsIndex = 1;
    this.index = 0; // Reset the index when switching images
    this.currentImgs = this.imgs2
    this.display();
  }
  switch3(): void {

    this.imgsIndex = 2;
    this.index = 0; // Reset the index when switching images
    this.currentImgs = this.imgs3
    this.display();
  }
  switch4(): void {

    this.imgsIndex = 3;
    this.index = 0; // Reset the index when switching images
    this.currentImgs = this.imgs4
    this.display();;
  }
  switch5(): void {

    this.imgsIndex = 4;
    this.index = 0; // Reset the index when switching images
    this.currentImgs = this.imgs5
    this.display();
  }
  switch6(): void {

    this.imgsIndex = 5;
    this.index = 0; // Reset the index when switching images
    this.currentImgs = this.imgs6
    this.display();
  }
  switch7(): void {

    this.imgsIndex = 6;
    this.index = 0; // Reset the index when switching images
    this.currentImgs = this.imgs7
    this.display();
  }
}