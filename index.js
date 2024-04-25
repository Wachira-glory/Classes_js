class Car {
    constructor(make, model, year, isAvailable) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.isAvailable = isAvailable;
    }
  toggleAvailability() {
    this.isAvailable = !this.isAvailable;
  }
}
const toyota = new Car("Toyota", "Camry", 2020, true);
console.log(toyota.isAvailable);
toyota.toggleAvailability();
console.log(toyota.isAvailable);



// 2) Create a Rental class or function constructor that has the following properties: ● car (Car object): The car that has been rented.
// ● renterName (string): The name of the person who rented the car. ● rentalStartDate (Date object): The start date of the rental period. ● rentalEndDate
// (Date object): The end date of the rental period.
// The Rental class or function constructor should also have a method called calculateRentalDuration that returns the rental duration in days.
// class Rental {
//     constructor(car, renterName, rentalStartDate, rentalEndDate) {
//       this.car = car;
//       this.renterName = renterName;
//       this.rentalStartDate = rentalStartDate;
//       this.rentalEndDate = rentalEndDate;
//     }
//     calculateRentalDuration() {
//       const time = this.rentalEndDate - this.rentalStartDate;
//       const days = Math.ceil(time / (1000 * 60 * 60 * 24));
//       return days;
//     }
//   }
//   const subaru = new Car("Toyota", "Camry", 2009, true);
//   const subaru2 = new Rental(subaru, "Benz", new Date("2022-01-01"), new Date("2022-01-10"));
//   console.log(subaru2.calculateRentalDuration());

function Rental(car, renterName, rentalStartDate, rentalEndDate) {
    this.car = car;
    this.renterName = renterName;
    this.rentalStartDate = rentalStartDate;
    this.rentalEndDate = rentalEndDate;
  
    this.calculateRentalDuration = function() {
      const time = this.rentalEndDate - this.rentalStartDate;
      const days = Math.ceil(time / (1000 * 60 * 60 * 24));
      return days;
    }
  }
  
  const subaru = new Car("Toyota", "Camry", 2009, true);
  const subaru2 = new Rental(subaru, "Volvo", new Date("2022-01-01"), new Date("2022-01-10"));
  console.log(subaru2.calculateRentalDuration());
// 3) Create an instance of the Car class or function constructor for a car in the inventory. Then, create an instance of the Rental class or function constructor
// for a rental involving the car you created. Finally, calculate the rental duration using the calculateRentalDuration method.
const car = new Car("BMW", "X5", 2012, true);
console.log({car});
const rental = new Rental(car, "mazda", new Date("2024-02-28"), new Date("2024-04-26"));
const rentalDuration = rental.calculateRentalDuration();
console.log(rentalDuration);
// //You are building a simple quiz app that contains multiple-choice questions. Your task is to create two JavaScript classes: Question and Quiz.
// The Question class will represent individual questions, and the Quiz class will manage a collection of questions and the user's progress.
// 1. Create a Question class with the following properties:
// ● text(string): The text of the question.
// ● options(array): An array containing the multiple-choice options. ● correctAnswer(string): The correct answer to the question.
// The Question class should also have a method called checkAnswer that takes a user's answer as a parameter and returns true if the answer is correct and false otherwise.
class Question {
    constructor(text, options, correctAnswer) {
      this.text = text;
      this.options = options;
      this.correctAnswer = correctAnswer;
    }
    checkAnswer(userAnswer) {
      return userAnswer === this.correctAnswer;
    }
  }
//2. Create a Quiz class with the following properties:
// ● questions(array):An array of Question objects.
// ● currentQuestionIndex(number): The index of the current question in the questions array.
// ● score(number): The user’s current score.
// The Quiz class should have the following methods:
// ● addQuestion: Takes a Question object as a parameter and adds it to the questions array.
// ● nextQuestion: Advances to the next question in the quiz by incrementing the currentQuestionIndex.
// ● submitAnswer: Takes a user's answer as a parameter, checks if the answer is correct using the checkAnswer method of the Question class,
//  and updates the score if the answer is correct
class Quiz {
    constructor() {
      this.questions = [];
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
    addQuestion(question) {
      this.questions.push(question);
    }
    nextQuestion() {
      this.currentQuestionIndex++;
    }
    submitAnswer(userAnswer) {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      if (currentQuestion.checkAnswer(userAnswer)) {
        this.score++;
      }
    }
  }
  const question1 = new Question("What is your favorite name?", ["Robert", "Greene", "Steve", "Harvey"], "Faith");
const question2 = new Question("Where do you live?", ["Kakamega", "Kenya", "Kilifi", "Meru"], "Kikuyu");
const question3 = new Question("Which class are you in", ["Patience", "Love", "Faith"], "Patience")
const myQuiz = new Quiz();
myQuiz.addQuestion(question1);
myQuiz.addQuestion(question2);
myQuiz.submitAnswer("Robert");
myQuiz.submitAnswer("Kakamega");
myQuiz.nextQuestion();
myQuiz.submitAnswer("Adalab");
console.log(`Your final score is: ${myQuiz.score}`);
