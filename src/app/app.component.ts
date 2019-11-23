import { Component, OnInit } from '@angular/core';
import { Tesseract } from 'tesseract.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'haya-project';
  image: any;
  text: string;

  ngOnInit() {
  }

  take_image(event: any) {
    if (event._imageAsDataUrl) {
      this.image = event._imageAsDataUrl;
      this.recognize();
    }
  }

  recognize() {
    Tesseract
      .recognize(this.image)
      .progress(console.log)
      .then((res: any) => {
          console.log(res);
          this.text = res.text;
      })
      .catch(console.error);
  }
}

