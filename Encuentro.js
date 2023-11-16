//Copiar y pegar este codigo en la consolo de mongodb, de esta manera se creará y ejecutará.
//Creando así la base de datos y sus coleciiónes
use DATABASE_CampeonatoKarate

db.createCollection("Deportistas")

db.Deportistas.insertMany([
    {
        _id: "D01",
        nombre: "Juan Miguel Rodriguez",
        edad: 20,
        peso: 65,
        altura: 170,
        cinturon: "blanco",
        pais: "colombia"
    },
    {
        _id: "D02",
        nombre: "Daniel Fernando Uribe",
        edad: 21,
        peso: 66,
        altura: 170,
        cinturon: "blanco",
        pais: "colombia"
    },
    {
        _id: "D03",
        nombre: "jose firminho",
        edad: 19,
        peso: 68,
        altura: 175,
        cinturon: "rojo",
        pais: "brasil"
    },
    {
        _id: "D04",
        nombre: "Hugo pedraza",
        edad: 22,
        peso: 70,
        altura: 175,
        cinturon: "blanco",
        pais: "argentina"
    },
    {
        _id: "D05",
        nombre: "Richarlison Moreno",
        edad: 19,
        peso: 68,
        altura: 171,
        cinturon: "blanco",
        pais: "brasil"
    },
    {
        _id: "D06",
        nombre: "Hector lavoe",
        edad: 24,
        peso: 70,
        altura: 175,
        cinturon: "blanco",
        pais: "colombia"
    },
    {
        _id: "D07",
        nombre: "Julio Jaramillo",
        edad: 22,
        peso: 70,
        altura: 175,
        cinturon: "blanco",
        pais: "ecuador"
    },
    {
        _id: "D08",
        nombre: "Charlie Zaa",
        edad: 23,
        peso: 68,
        altura: 171,
        cinturon: "blanco",
        pais: "Colombia"
    }
]);


db.createCollection("Entrenadores")

db.Entrenadores.insertMany([{
   nombre: "John Martinez",
   edad: 55,
   pais: "Colombia",
   especialidad: "Karate"
},
{
   nombre: "Johny Rivera",
   edad: 60,
   pais: "Colombia",
   especialidad: "Karate"
},
{
   nombre: "Alci Acosta",
   edad: 48,
   pais: "Colombia",
   especialidad: "Karate"
},
{
   nombre: "Joe Arroyo",
   edad: 49,
   pais: "colombia",
   especialidad: "Karate"
},
{
   nombre: "Juan Gabriel",
   edad: 50,
   pais: "Mexico",
   especialidad: "Karate"
}
]);


db.createCollection("Arbitros")

db.Arbitros.insertMany([{
   _id: "AR01",
   nombre: "Vicente Fernadez",
   edad: 74,
   pais: "Mexico",
   especialidad: "Artes marciales mixtas"
},
{
   _id: "AR02",
   nombre: "Michael Jackson",
   edad: 38,
   pais: "EEUU",
   especialidad: "Karate"
},
{
   _id: "AR03",
   nombre: "Akimura yoshimoto",
   edad: 56,
   pais: "Japon",
   especialidad: "Karate"
},
{
   _id: "AR04",
   nombre: "xim pi ci",
   edad: 39,
   pais: "china",
   especialidad: "karate"
},
{
   _id: "AR05",
   nombre: "Brayan Galindo",
   edad: 38,
   pais: "colombia",
   especialidad: "Karate"
}
]);


db.createCollection("EncuentrosDeportivos")


db.EncuentrosDeportivos.insertMany([
    {
        _id: "ED01",
        deportistaLocal: "D01",
        deportistaVisitante: "D02",
        fecha: ISODate("2023-01-15T15:00:00Z"),
        lugar: "Gimnasio 1",
        resultado: "Por definir"
    },
    {
        _id: "ED02",
        deportistaLocal: "D03",
        deportistaVisitante: "D04",
        fecha: ISODate("2023-01-15T15:30:00Z"),
        lugar: "Gimnasio 2",
        resultado: "Por definir"
    },
    {
        _id: "ED03",
        deportistaLocal: "D05",
        deportistaVisitante: "D06",
        fecha: ISODate("2023-01-15T19:00:00Z"),
        lugar: "Gimnasio 1",
        resultado: "Por definir"
    },
    {
        _id: "ED04",
        deportistaLocal: "D07",
        deportistaVisitante: "D08",
        fecha: ISODate("2023-01-15T18:00:00Z"),
        lugar: "Gimnasio 2",
        resultado: "Por definir"
    },
    {
        _id: "ED05",
        deportistaLocal: "D01",
        deportistaVisitante: "D03",
        fecha: ISODate("2023-01-18T18:00:00Z"),
        lugar: "Gimnasio 1",
        resultado: "Por definir"
    },
    {
        _id: "ED06",
        deportistaLocal: "D05",
        deportistaVisitante: "D08",
        fecha: ISODate("2023-01-18T18:00:00Z"),
        lugar: "Gimnasio 2",
        resultado: "Por definir"
    },
    {
        _id: "ED07",
        deportistaLocal: "D01",
        deportistaVisitante: "D05",
        fecha: ISODate("2023-01-20T18:00:00Z"),
        lugar: "Coliseo Principal",
        resultado: "Por definir"
    },
    {
        _id: "ED08",
        deportistaLocal: "D03",
        deportistaVisitante: "D08",
        fecha: ISODate("2023-01-21T18:00:00Z"),
        lugar: "Coliseo Principal",
        resultado: "Por definir"
    }
    
]);


db.createCollection("Resultados")


db.Resultados.insertMany([
    {
        encuentro: "ED01",
        marcadorLocal: 6,
        marcadorVisitante: 0,
        ganador: "D01"
    },
    {
        encuentro: "ED02",
        marcadorLocal: 2,
        marcadorVisitante: 1,
        ganador: "D03"
    },
    {
        encuentro: "ED03",
        marcadorLocal: 4,
        marcadorVisitante: 3,
        ganador: "D05"
    },
    {
        encuentro: "ED04",
        marcadorLocal: 9,
        marcadorVisitante: 7,
        ganador: "D08"
    },
    {
        encuentro: "ED05",
        marcadorLocal: 3,
        marcadorVisitante: 5,
        ganador: "D03"
    },
    {
        encuentro: "ED06",
        marcadorLocal: 0,
        marcadorVisitante: 4,
        ganador: "D08"
    },
    {
        encuentro: "ED07",
        marcadorLocal: 4,
        marcadorVisitante: 0,
        ganador: "D01"
    },
    {
        encuentro: "ED08",
        marcadorLocal: 4,
        marcadorVisitante: 3,
        ganador: "D08"
    },
]);


db.createCollection("Posiciones")

db.Posiciones.insertMany([
    {
        deportista: "D01",
        puntos: 2,
        partidosJugados: 3,
        partidosGanados: 2,
        partidosEmpatados: 0,
        partidosPerdidos: 1
    },
    {
        deportista: "D02",
        puntos: 0,
        partidosJugados: 1,
        partidosGanados: 0,
        partidosEmpatados: 0,
        partidosPerdidos: 1
    },
    {
        deportista: "D03",
        puntos: 2,
        partidosJugados: 3,
        partidosGanados: 2,
        partidosEmpatados: 0,
        partidosPerdidos: 1
    },
    {
        deportista: "D04",
        puntos: 0,
        partidosJugados: 1,
        partidosGanados: 0,
        partidosEmpatados: 0,
        partidosPerdidos: 1
    },
    {
        deportista: "D05",
        puntos: 1,
        partidosJugados: 2,
        partidosGanados: 1,
        partidosEmpatados: 0,
        partidosPerdidos: 1
    },
    {
        deportista: "D06",
        puntos: 0,
        partidosJugados: 1,
        partidosGanados: 0,
        partidosEmpatados: 0,
        partidosPerdidos: 1
    },
    {
        deportista: "D07",
        puntos: 0,
        partidosJugados: 1,
        partidosGanados: 0,
        partidosEmpatados: 0,
        partidosPerdidos: 1
    },
    {
        deportista: "D08",
        puntos: 4,
        partidosJugados: 3,
        partidosGanados: 1,
        partidosEmpatados: 0,
        partidosPerdidos: 0
    },
]);
