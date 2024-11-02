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
    'Workshop',
    'Events and Conference',
    'Unformal Education',
    'International cooperation',
    'Engaging young people',
    'Hackathon',
    'Communication and awareness',
    'Advocacy'
  ];

  displayedWords: string[] = this.words.slice(0, 4); // Start with the first 4 words
  currentIndex = 4;

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
      'Workshop': 'purple',
      'Events and Conference': 'yellow',
      'Unformal Education': 'blue',
      'International cooperation': 'green',
      'Engaging young people': 'purple',
      'Hackathon': 'yellow',
      'Communication and awareness': 'blue',
      'Advocacy': 'green'
    };
    return classes[word] || '';
  }

}
