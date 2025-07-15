function sendEmail(from, to, message) {}

class User {
    constructor({name, surname, email, role}) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.messages = [];
        this.courses = [];
    }

    addCourse(course, level) {
        for(let i = 0; i < this.courses.length; i++) {
            if(this.courses[i].course === course) {
                return;
            }
        }
        this.courses.push({course, level});
    }

    removeCourse(course) {
        for(let i = 0; i < this.courses.length; i++) {
            if(this.courses[i].course === course) {
                this.courses.splice(i, 1);
                break;
            }
        }
    }

    editCourse(course, level) {
        for(let i = 0; i < this.courses.length; i++) {
            if(this.courses[i].course === course) {
                this.courses[i].level = level;
                break;
            }
        }
    }

    sendMessage(from, message) {
        this.messages.push({from: from.email, to: this.email, content: message});
        sendEmail(from.email, this.email, message);
    }

    showMessagesHistory() {
        for(let message of this.messages) {
            console.log(`${message.from} -> ${message.to}: ${message.content}`)
        }
    }
}

class ExtendedUser extends User {
    constructor({name, surname, email, role}) {
        super({name, surname, email, role});
    }

    get fullName() {
        return `${this.name} ${this.surname}`
    }

    set fullName(fullName) {
        let names = fullName.split(' ');
        if(names[0] && names[1]) {
            this.name = names[0];
            this.surname = names[1];
        }
    }
}

class Teacher extends ExtendedUser {
    constructor({name, surname, email}) {
        super({name, surname, email, role: 'teacher'});
    }
}

class Student extends ExtendedUser {
    constructor({name, surname, email}) {
        super({name, surname, email, role: 'student'});
    }
}

let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@gmail.com', role: 'student'});
let student2 = new Student({name: 'Kelly', surname: 'Estes', email: 'kestes@gmail.com', role: 'student'});
let teacher1 = new Teacher({name: 'Paula', surname: 'Thompson', email: 'paula@gmail.com', role: 'teacher'});

student1.addCourse('maths', 2);
teacher1.addCourse('biology', 3);
teacher1.editCourse('chemistry', 4);
console.log(`${student1.fullName}: ${student1.courses.length} courses`);
console.log(`${teacher1.fullName}: ${teacher1.courses.length} courses`);
student1.fullName = 'Rafael Fifer';
console.log(`${student1.fullName}: ${student1.courses.length} courses`);