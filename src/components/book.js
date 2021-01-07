const book = [
    {
        num: 1,
        content: 'Rozdział 1'
    },
    {
        num: 2,
        content: 'W którym docieramy do krainy tulipanów, bunia ma nowy plan, podziwiamy holenderskie ogródki, pojawiają się dwaj dziwni faceci i trzeba mieć oczy dookoła głowy.'
    },
    {
        num: 3,
        content: 'Jak pewnie pamiętacie, moja babcia Henrysia uwielbia kwiaty i często przywozi z podróży nowe sadzonki. Ja też lubię hodować rośliny, dlatego naszą wakacyjną podróż postanowiliśmy zacząć od Holandii.'
    },
    {
        num: 4,
        content: 'W krainie tulipanów mieliśmy spędzić zaledwie kilka dni i nic nie wskazywało, że w tym czasie zostaniemy wplątani w wir niesamowitych zdarzeń, zwłaszcza że pierwszy dzień naszej podróży minął zupełnie zwyczajnie.'
    },
    {
        num: 5,
        content: 'Po wielu godzinach jazdy zatrzymaliśmy się na dłuższy postój niedaleko Apeldoorn. Znajduje się tam pałac Het Loo – okazały budynek, w którym rezydowała rodzina królewska.'
    },
    {
        num: 6,
        content: 'Obecnie mieści się w nim muzeum, w którym można obejrzeć między innymi oryginalne pałacowe wyposażenie.'
    },
    {
        num: 8,
        content: 'Dziewczyny długo podziwiały meble, obrazy, eleganckie stroje i chińską porcelanę. Mnie za to najbardziej podobały się pojazdy używane przez rodzinę królewską: luksusowe zabytkowe auta, karety i sanie stojące w garażu i powozowni.'
    },
    {
        num: 10,
        content: 'Ale to, co przede wszystkim przyciągnęło nas do Het Loo, to słynne barokowe ogrody. Jest w nich mnóstwo kolorowych kwiatów i starannie utrzymane żywopłoty oraz piękne fontanny, wazony i rzeźby. Do ogrodów przylega rozległy park, pełen romantycznych altanek i tajemniczych zakamarków. Po długiej jeździe autem wreszcie znalazłem miejsce, w którym mogłem się wybiegać.'
    },
    {
        num: 11,
        content: '– Przysiądźmy tutaj na chwilę – zaproponowała bunia, gdy znaleźliśmy się przy romantycznej altance ozdobionej bujnie kwitnącymi fuksjami.'
    },
    {
        num: 12,
        content: 'Byliśmy już trochę zmęczeni, więc chętnie przystaliśmy na ten pomysł. Z altanki roztaczał się ładny widok na jezioro, po którym pływały kaczki.'
    },
    {
        num: 13,
        content: 'Gdy już nieco odpoczęliśmy, wróciliśmy na teren ogrodów, a tam w letniej kawiarence zamówiliśmy lody. Potem zaczęło zbierać się na burzę, więc mama zdecydowała, że czas ruszać dalej, żebyśmy zdążyli dotrzeć do hotelu przed zmierzchem.'
    },
    {
        num: 14,
        content: 'Późnym popołudniem dotarliśmy do Amersfoort. To spore miasto niedaleko Amsterdamu. Zameldowaliśmy się w hotelu, trochę odpoczęliśmy, a potem wyszliśmy na wieczorny spacer. Od razu zauważyłem, że Holendrzy lubią zieleń. Nawet najmniejsze balkony ozdabiają kwiatowymi kompozycjami.'
    },
    {
        num: 15,
        content: 'Rozglądałem się i podziwiałem te miniaturowe ogródki, ale jednocześnie musiałem uważać na rowerzystów. Było ich naprawdę wielu!'
    },
    {
        num: 16,
        content: '– Trzeba mieć oczy dookoła głowy! – powiedziała bunia, po czym na moment się zagapiła i omal nie została staranowana, gdy nieopatrznie stanęła na środku ścieżki rowerowej.'
    },
    {
        num: 17,
        content: 'Na ścieżce pierwszeństwo zawsze ma rowerzysta! Trzeba o tym pamiętać, zwłaszcza gdy jeździ się po holenderskich miastach samochodem. Jeśli ktoś nie jest przyzwyczajony do tak dużej liczby rowerów na drodze, może spowodować kolizję. Dlatego postanowiliśmy zwiedzać miasto na piechotę. Zresztą tak było o wiele przyjemniej.'
    },
    {
        num: 18,
        content: 'Gdy szliśmy do historycznej części miasta, w pewnej chwili zza zakrętu wyjechała grupa kobiet na skuterach. Wszystkie były mniej więcej w wieku buni i przejeżdżając pod wiaduktem, piszczały: „Jupiii!”, a echo niosło ich radosne głosy. Wszystkie wyglądały na szczęśliwe i wyluzowane.'
    },
    {
        num: 19,
        content: 'Bunia od razu pozazdrościła im tej swobody i zaraz po przyjeździe do Polski postanowiła założyć dla swoich koleżanek Klub Buń. Zaczęła też marzyć o różowym skuterze z szybką z przodu.'
    },
    {
        num: 20,
        content: '– Babciu, a co będziecie robić w tym klubie? – zaciekawiłem się, gdy podzieliła się z nami swoim pomysłem.'
    }, 
    {
        num: 21,
        content: '– Jeszcze nie wiem, ale na pewno wymyślę coś odjazdowego! – oznajmiła czupurnie.'
    },
    {
        num: 22,
        content: 'Domyślałem się, że nie poprzestanie na samym pomyśle i niebawem wcieli go w życie.'
    },
    {
        num: 23,
        content: 'Tymczasem doszliśmy do najstarszej części miasta. Zachowały się tam fragmenty murów miejskich z XIII wieku, stare budynki kościelne i klasztorne, a także bramy miejskie.'
    },
    {
        num: 24,
        content: 'Przyjemnie spacerowało się po wąskich uliczkach poprzecinanych kanałami, nad którymi wznosiły się jedno- lub dwupiętrowe domy. O tej porze nie było tu zbyt wielu turystów i spokojnie mogłem przyglądać się pięknie utrzymanym mikroskopijnym ogródkom. Niemal przed każdym domem znajdowało się mnóstwo zieleni ozdobionej ładnymi dekoracjami i pnącymi różami.'
    },
    {
        num: 25,
        content: 'Może kiedyś w naszych miastach i miasteczkach też zapanuje moda na takie kwietne dekoracje. Mam nadzieję, bo zauważyłem, że wystarczą dwie donice z kwiatami, a świat od razu wygląda piękniej!'
    },
    {
        num: 26,
        content: 'Wędrując nieśpiesznym krokiem, dotarliśmy w końcu do wizytówki Amersfoort, którą jest Koppelpoort – jedna z trzech zabytkowych bram miejskich. Ustawiliśmy się przed nią i poprosiliśmy przechodnia o zrobienie zdjęcia.'
    },
    {
        num: 27,
        content: 'W pewnym momencie zobaczyłem dwóch mężczyzn, którzy dość nietypowo ze sobą rozmawiali. Jeden był raczej niski, a drugi wysoki i nosił duży złoty zegarek na przegubie dłoni. Stali obok siebie, ale zachowywali się, jakby się nie znali, a potem szybko wymienili parę zdań jak w filmach sensacyjnych o agentach, a kiedy zaczęliśmy się do nich zbliżać, odeszli. Zaintrygowany ich zachowaniem, chyba zbyt intensywnie się w nich wpatrywałem, bo ten niższy rzucił mi krótkie, przenikliwe spojrzenie.'
    },
    {
        num: 28,
        content: 'Szybko odwróciłem wzrok i schowałem się za bunią. Gdy odważyłem się znowu spojrzeć w ich stronę, mężczyźni już odeszli i choć się rozglądałem, żadnego nie dostrzegłem.'
    },
    {
        num: 29,
        content: 'Po zwiedzaniu poszliśmy do restauracji na kolację, a potem wróciliśmy do hotelu. Następnego dnia musiałem wcześnie wstać, bo wybieraliśmy się na wycieczkę pociągiem do Amsterdamu.'
    },
    {
        num: 30,
        content: '– Pierwszy dzień wycieczki uważam za udany! – oświadczyła Marcela, gdy kładła się do łóżka.'
    },
    {
        num: 31,
        content: 'Chciałem jej opowiedzieć o podejrzanych facetach, których widziałem przy zabytkowej bramie, ale poczułem się bardzo senny i postanowiłem zrobić to rano.'
    }
];


export default book;