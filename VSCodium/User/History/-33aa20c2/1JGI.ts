import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

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
    this.displayedWords = this.wordsList.slice(0, 4); // Start with the first four words
    this.cycleWords();
  }

  cycleWords(): void {
    let currentIndex = 4;

    setInterval(() => {
      // Replace one word at a time in displayedWords
      this.displayedWords = [
        ...this.displayedWords.slice(1),
        this.wordsList[currentIndex]
      ];
      currentIndex = (currentIndex + 1) % this.wordsList.length;
    }, 2000); // Adjust the interval (in milliseconds) to control how quickly words change
  }

}
