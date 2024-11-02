import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [CommonModule],
  standalone: true,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  words = [
    'WORKSHOP',
    'EVENTS AND CONFERENCES',
    'UNFORMAL EDUCATION',
    'INTERNATIONAL COOPERATION',
    'ENGAGING YOUNG PEOPLE',
    'HACKATHON',
    'COMMUNICATION AND AWARENESS',
    'ADVOCACY'
  ];

  
  currentWord = this.words[0];
  currentIndex = 0;

  ngOnInit(): void {
    this.startWordRotation();
  }

  startWordRotation() {
    setInterval(() => {
      // Rotate one word at a time
      this.currentIndex = (this.currentIndex + 1) % this.words.length;
      this.currentWord = this.words[this.currentIndex];
    }, 2000); // Adjust the interval as needed
  }

  // Function to return the CSS class for each word
  getWordClass(word: string): string {
    const classes: { [key: string]: string } = {
      'WORKSHOP': 'yellow1',
      'EVENTS AND CONFERENCES': 'blue1',
      'UNFORMAL EDUCATION': 'purple1',
      'INTERNATIONAL COOPERATION': 'green1',
      'ENGAGING YOUNG PEOPLE': 'yellow1',
      'HACKATHON': 'blue1',
      'COMMUNICATION AND AWARENESS': 'purple1',
      'ADVOCACY': 'green1'
    };
    return classes[word] || '';
  }

}
