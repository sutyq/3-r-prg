class Student {
    constructor(id, známky, věk) {
      this.id = id;
      this.jméno = `Student${id}`;
      this.známky = známky;
      this.věk = věk;
    }
  
    získatPrůměrnouZnámku() {
      const součet = this.známky.reduce((acc, známka) => acc + známka, 0);
      return součet / this.známky.length;
    }
  }
  
  class Třída {
    constructor() {
      this.studenti = [];
  
      // Vytvoření 100 studentů
      for (let i = 1; i <= 100; i++) {
        const známky = Array.from({ length: 5 }, () => Math.floor(Math.random() * 5) + 1);
        const věk = Math.floor(Math.random() * 10) + 15;
        const student = new Student(i, známky, věk);
        this.studenti.push(student);
      }
    }
  
    přidatStudenta(student) {
      this.studenti.push(student);
    }
  
    získatStudentaPodleId(studentId) {
      return this.studenti.find((student) => student.id === studentId);
    }
  
    získatPrůměrnýVěk() {
      const celkovýVěk = this.studenti.reduce((acc, student) => acc + student.věk, 0);
      return celkovýVěk / this.studenti.length;
    }
  }
  
  const třída = new Třída();
  const hlavníFormulář = document.getElementById('hlavniFormular');
  const výstupDiv = document.getElementById('vystup');
  
  function zpracujPrikaz() {
    const vstup = hlavníFormulář.elements.vstup.value.trim();
    const [příkaz, parametr] = vstup.split(' ');
  
    switch (příkaz) {
      case 'vypsat':
        zobrazStudenty();
        break;
      case 'pridat':
        přidatStudenta();
        break;
      case 'prumer':
        vypocitatPrumernouZnamku(parametr);
        break;
      case 'prumerVek':
        zobrazPrumernyVek();
        break;
      default:
        vypisChybu('Neznámý příkaz.');
    }
  }
  
  function zobrazStudenty() {
    výstupDiv.innerHTML = '';
    třída.studenti.forEach((student) => {
      výstupDiv.innerHTML += `<p>Jméno: ${student.jméno}, Známky: ${student.známky.join(', ')}, Věk: ${student.věk}</p>`;
    });
  }
  
  function přidatStudenta() {
    const idStudenta = třída.studenti.length + 1;
    const známky = Array.from({ length: 5 }, () => Math.floor(Math.random() * 5) + 1);
    const věk = Math.floor(Math.random() * 10) + 15;
    const novýStudent = new Student(idStudenta, známky, věk);
    třída.přidatStudenta(novýStudent);
    výstupDiv.innerHTML = `<p>Nový student přidán: ${novýStudent.jméno}</p>`;
  }
  
  function vypocitatPrumernouZnamku(idStudenta) {
    const vybranýStudent = třída.získatStudentaPodleId(parseInt(idStudenta));
  
    if (vybranýStudent) {
      const průměrnáZnámka = vybranýStudent.získatPrůměrnouZnámku();
      výstupDiv.innerHTML = `<p>Průměrná známka pro ${vybranýStudent.jméno}: ${průměrnáZnámka.toFixed(2)}</p>`;
    } else {
      vypisChybu('Student neexistuje.');
    }
  }
  
  function zobrazPrumernyVek() {
    const průměrnýVěk = třída.získatPrůměrnýVěk();
    výstupDiv.innerHTML = `<p>Průměrný věk ve třídě: ${průměrnýVěk.toFixed(2)}</p>`;
  }
  
  function vypisChybu(zpráva) {
    výstupDiv.innerHTML = `<p style="color: red;">Chyba: ${zpráva}</p>`;
  }
  