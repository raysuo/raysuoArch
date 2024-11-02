import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  wordsList: string[] = [
    'Workshop',
    'Events and Conference',
    'Unformal Education',
    'International cooperation',
    'Engaging young people',
    'Hackathon',
    'Communication and awareness',
    'Advocacy'
  ];

  displayedWords: string[] = [];

  ngOnInit(): void {
    // Start with the first four words
    this.displayedWords = this.wordsList.slice(0, 4);

    let currentIndex = 4; // Start replacing words from the 5th element

    setInterval(() => {
      // Update one word at a time
      this.displayedWords = [
        ...this.displayedWords.slice(1), // Remove the first word
        this.wordsList[currentIndex] // Add the next word in the list
      ];

      // Increment index and loop back if needed
      currentIndex = (currentIndex + 1) % this.wordsList.length;
    }, 2000); // Adjust interval time as needed
  }

}
