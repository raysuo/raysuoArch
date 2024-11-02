import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

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

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.displayedWords = this.wordsList.slice(0, 4); // Initialize with the first four words
    this.cycleWords();
  }

  cycleWords(): void {
    let currentIndex = 4;

    setInterval(() => {
      // Update displayedWords by shifting one word at a time
      this.displayedWords = [
        ...this.displayedWords.slice(1),
        this.wordsList[currentIndex]
      ];

      // Cycle back to the start of the list when reaching the end
      currentIndex = (currentIndex + 1) % this.wordsList.length;

      // Trigger change detection
      this.cdr.detectChanges();
    }, 2000); // Adjust interval time as needed
  }

}
