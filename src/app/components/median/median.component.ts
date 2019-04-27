import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-median',
  templateUrl: './median.component.html',
  styleUrls: ['./median.component.css']
})
export class MedianComponent implements OnInit {

  constructor() { }
 fileArray = [];
 medianArray = [];
 count = null;
  ngOnInit() {
  }
  renderFile(files: FileList) {
    if (files && files.length > 0) {
      this.fileArray = [];
      this.medianArray = [];
      const file = files.item(0);
      const scope = this;
      const reader  = new FileReader();
      reader.readAsText(file);
      reader.onload = function(e: any) {
        const result = e.target.result;
        const lines = result.split('\n');
        const  arr = [];
        for (let i = 0; i < lines.length; i++) {
          lines[i] = Number(lines[i]);
          if (i === 0) {
            scope.count = lines[i];
          } else {
            scope.fileArray.push(lines[i]);
            arr.push(lines[i]);
            scope.medianArray.push(scope.median(arr).toFixed(1));
          }
        }
      };
    }
  }
  median(values) {
    values.sort(function(a, b) {
      return a - b;
    });
    const half = Math.floor(values.length / 2);
    if (values.length % 2) {
      return values[half];
    } else {
      return (values[half - 1] + values[half]) / 2.0;
    }
  }
}
