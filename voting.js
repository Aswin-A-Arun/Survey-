// JavaScript source code
class Form {

    constructor() {
        this.input = createInput("Name");
        this.button = createButton('Submit');
        this.greeting = createElement('h2');
        this.text = createElement('h1', "Lets Do A Survey in Our School");
        this.question1 = createElement('h3', "1. Do we need free lunch meals in our school canteen for the kids who are poor?");
        this.Option = createOption('h3');
        this.Option.option('yes');
        this.Option.option('No');
        this.question2 = createElement('h3', "2. Will you contribute an amount every month for this?");
        this.Option1 = createOption('h3');
        this.Option1.option('yes');
        this.Option1.option('No');
        this.question3 = createElement('h3', "3. How much per month will you pay if you agree to this?");
        this.Option2 = createOption('h3');
        this.Option2.option('yes');
        this.Option2.option('No');
    }


    display() {
        this.input.position(670, 255)
        this.button.position(700, 700)
        this.greeting.position(600, 105)
        this.text.position(600, 5)
        this.question1.position(500, 360)
        this.Option.position(600, 420)
        this.question2.position(500, 450)
        this.Option1.position(600, 510)
        this.question3.position(500, 540)
        this.Option2.position(600, 600)

        this.button.mousePressed(() => {
            User.input = this.input.value();
            peopleCount += 1;
            User.index = peopleCount;
            User.update();
            User.updateCount(peopleCount);
        });

    }
}