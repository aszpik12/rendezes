export function rendezesSzoveg(list) {
  list.sort();
  console.log(list);
}

export function rendezesSzam(list) {
  list.sort(function (a, b) {
    console.log(a, b, a - b);
    return a - b;
  });
  console.log(list);
}

export function veletlenSorrend(list) {
  list.sort(function (a, b) {
    return Math.random() - 0.5;
  });
}

export function objRendezesKorSzerint(list) {
  list.sort(function (a, b) {
    console.log(a, b, a.kor - b.kor);
    return a.kor - b.kor;
  });
}
export function objRendezesNevSzerint(list) {
  list.sort(function (a, b) {
    let e = 1;
    console.log(a.nev < b.nev);
    if (a.nev < b.nev) {
      e = -1;
    }
    return e;
  });
}
export function objRendezesAkarmiSzerint(list, kulcs) {
  list.sort(function (a, b) {
    let e = 1;
    console.log(a[kulcs] < b[kulcs]);
    if (a[kulcs] < b[kulcs]) {
      e = -1;
    }
    return e;
  });
}

export function szuresKorSzerint(list, felt) {
  let szurtLista = list.filter(function (obj) {
    console.log(obj.kor + felt);
    return eval(obj.kor + felt);
  });
  return szurtLista;
}

export function szuresNevSzerint(list, felt) {
    let szurtLista = list.filter(function (obj) {
      
      return obj[kulcs].includes(felt);
    });
    console.log(szurtLista)
    return szurtLista;
  }
