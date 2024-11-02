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

  displayedWords: string[] = this.words.slice(0, 1); // Start with the first 4 words
  currentIndex = 1;

  ngOnInit(): void {
    this.startWordRotation();
  }

  startWordRotation() {
    setInterval(() => {
      // Rotate one word at a time
      this.displayedWords = [
        ...this.displayedWords.slice(1),
        this.words[this.currentIndex]
      ];
      this.currentIndex = (this.currentIndex + 1) % this.words.length;
    }, 2000); // Adjust the interval as needed
  }

  // Function to return the CSS class for each word
  getWordClass(word: string): string {
    const classes: { [key: string]: string } = {
      'WORKSHOP': 'yellow',
      'EVENTS AND CONFERENCES': 'blue',
      'UNFORMAL EDUCATION': 'purple',
      'INTERNATIONAL COOPERATION': 'green',
      'ENGAGING YOUNG PEOPLE': 'yellow',
      'HACKATHON': 'blue',
      'COMMUNICATION AND AWARENESS': 'purple',
      'ADVOCACY': 'green'
    };
    return classes[word] || '';
  }

}
