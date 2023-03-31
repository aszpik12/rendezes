import { OBJLISTA, SZOVEGLISTA, SZAMLISTA } from "./adat.js";
import {
  objRendezesAkarmiSzerint,
  objRendezesKorSzerint,
  objRendezesNevSzerint,
  rendezesSzam,
  rendezesSzoveg,
  szuresKorSzerint,
  szuresNevSzerint,
  veletlenSorrend,
} from "./adatkezeles.js";

$(function () {
  console.log(OBJLISTA);
  console.log(OBJLISTA[1].csaladiAllapot);

  let JSONobj = JSON.stringify(OBJLISTA);
  console.log(JSONobj);
  console.log(JSONobj.nev);
  veletlenSorrend(SZAMLISTA);

  rendezesSzoveg(SZOVEGLISTA);
  console.log(SZOVEGLISTA);
  rendezesSzam(SZAMLISTA);
  console.log(SZAMLISTA);
  veletlenSorrend(SZAMLISTA);
  console.log(SZAMLISTA);
  objRendezesKorSzerint(OBJLISTA);
  console.log(OBJLISTA);
  objRendezesNevSzerint(OBJLISTA);
  console.log(OBJLISTA);
  objRendezesAkarmiSzerint(OBJLISTA, "kor");
  console.log(OBJLISTA);
  const szurtLista = szuresKorSzerint(OBJLISTA,"<50");
  console.log(szurtLista);
  const szurtlista = szuresNevSzerint(OBJLISTA)
});
