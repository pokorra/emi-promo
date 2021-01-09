const quiz = [
    {
        num: 1,
        question: "Jak brzmi pełne imię i nazwisko Emi?",
        answers: [
            {
            num: "a.",
            ans: "Aniela Kowalska"}, 
            {
            num: "b.",
            ans: "Stanisława Emilia Gacek"}, 
            {
            num: "c.",
            ans: "Agnieszka Zakrzewska"}],
        goodOne: "Stanisława Emilia Gacek"
    },
    {
        num: 2,
        question: "Jak nazywa się pies cioci Juli, który często bywa u Gacków?",
        answers: [
            {
                num: "a.",
                ans: "Czekolada"}, 
                {
                num: "b.",
                ans: "Żelek"}, 
                {
                num: "c.",
                ans: "Lizak"}],
        goodOne: "Czekolada"
    },
    {
        num: 3,
        question: "Gdzie w pierwszym tomie przygód cyklu „Dookoła świata” wyruszyli przyjaciele?",
        answers: [
            {
                num: "a.",
                ans: "Do Teksasu"}, 
                {
                num: "b.",
                ans: "Do Kalifornii"}, 
                {
                num: "c.",
                ans: "Na Alaskę"}],
        goodOne: "Do Kalifornii"
    },
    {
        num: 4,
        question: "Jak ma na imię jedyny chłopak, który należy do Klubu?",
        answers: [
            {
                num: "a.",
                ans: "Arek"}, 
                {
                num: "b.",
                ans: "Marek"}, 
                {
                num: "c.",
                ans: "Franek"}],
        goodOne: "Franek"
    },
    {
        num: 5,
        question: "Czego nie znosi Aniela?",
        answers: [
            {
                num: "a.",
                ans: "Księżniczek i koloru różowego"}, 
                {
                num: "b.",
                ans: "Szpinaku"}, 
                {
                num: "c.",
                ans: "Jazdy na rowerze"}],
        goodOne: "Księżniczek i koloru różowego"
    },
    {
        num: 6,
        question: "Jak nazywa się osiedle, na którym mieszka Emi?",
        answers: [
            {
                num: "a.",
                ans: "Brzozowy lasek"}, 
                {
                num: "b.",
                ans: "Na bateryjce"}, 
                {
                num: "c.",
                ans: "Choinkowy zagajnik"}],
        goodOne: "Na bateryjce"
    },
    {
        num: 7,
        question: "Jak brzmi motto Tajnego Klubu Superdziewczyn?",
        answers: [
            {
                num: "a.",
                ans: "Girl Power!"}, 
                {
                num: "b.",
                ans: "NIGDY WIĘCEJ NUDY!"}, 
                {
                num: "c.",
                ans: "Do przodu"}],
        goodOne: "NIGDY WIĘCEJ NUDY!"
    },
    {
        num: 8,
        question: "Dzięki któremu dorosłemu Emi i Tajny Klub Superdziewczyn odwiedzą Kalifornię?",
        answers: [
            {
                num: "a.",
                ans: "Mamie Emi"}, 
                {
                num: "b.",
                ans: "Tacie Emi"}, 
                {
                num: "c.",
                ans: "Profesorowi Kagankowi"}],
        goodOne: "Profesorowi Kagankowi"
    },
    {
        num: 9,
        question: "Którego miasta NIE odwiedzą przyjaciele w Kaliforni?",
        answers: [
            {
                num: "a.",
                ans: "Los Angeles"}, 
                {
                num: "b.",
                ans: "San Francisco"}, 
                {
                num: "c.",
                ans: "Sacramento"}],
        goodOne: "Sacramento"
    },
    {
        num: 10,
        question: "Jak się nazywa dzielnica L.A. znana przede wszystkim jako ośrodek amerykańskiego filmu?",
        answers: [
            {
                num: "a.",
                ans: "Hollywood"}, 
                {
                num: "b.",
                ans: "Rodeo Drive"}, 
                {
                num: "c.",
                ans: "Manhattan"}],
        goodOne: "Hollywood"
    }
];

const start = {
    date: "Premiera: 27 stycznia 2021 r.",
    inv: `Oho, wygląda na to, że to nie koniec przygód Emi i Tajnego Klubu Superdziewczyn w USA. Tym razem przyjaciele wybiorą się w podróż… do Nowego Jorku! Czy chcecie jako pierwsi dowiedzieć się, co spotka ich po drodze? Odpowiedzcie na pytania i odkryjcie pierwszy fragment najnowszego tomu „Emi i Tajnego Klubu Superdziewczyn. Dookoła świata” pt. Nowy Jork!`,
    btn: "Gotowi? do dzieła!"
}

const finish = [
    {
        num: 1,
        display: "UPS! Niewiele Ci zabrakło, aby odblokować dostęp do pierwszego rozdziału. Może spróbujesz ponownie?",
        btn: "Spróbuj jeszcze raz"
    },
    {
        num: 2,
        display: "Gratulujemy! Zapraszamy do wspólnej podróży!" ,
        btn: "Przeczytaj fragment"
    }
]

const all = [quiz, start, finish];
export default all;
