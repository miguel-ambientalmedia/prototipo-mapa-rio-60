var config = {
    style: 'mapbox://styles/ambiental-media/cm4a0hl78017x01s33h6i0x7l',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiYW1iaWVudGFsLW1lZGlhIiwiYSI6ImNrY3FyOHIwZjByZzczMnFxcWRoZGNxNmIifQ.7n3z34gXpy2u_VmGV63rXQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Protótipo mapa rio 60',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            description: 'A exuberante geografia da cidade do Rio de Janeiro – com seus morros, maciços, baías, restingas e lagos – é um desafio para construção de moradias.',
            location: {
                center: [-43.16505, -22.95455],
                zoom: 14.28,
                pitch: 70.50,
                bearing: -115.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            description: 'Estas áreas marcadas em vermelho indicam a possibilidade de movimentos de massa de terra – quanto mais forte a cor, mais suscetível a deslizamentos.',
            location: {
                center: [-43.44196, -22.92151],
                zoom: 10.42,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            speed: 2,
            curve: 1,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            description: 'Já esta escala de amarelo mostra a vulnerabilidade da população – quanto mais forte o amarelo, mais pessoas em situação de vulnerabilidade socioeconômica.',
            location: {
                center: [-43.44196, -22.92151],
                zoom: 10.42,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            description: 'Quando cruzamos estas duas camadas, a cor resultante – o laranja – identifica as pessoas mais vulneráveis a deslizamentos de terra.',
            location: {
                center: [-43.44196, -22.92151],
                zoom: 10.42,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'fully',
            hidden: false,
            description: 'As áreas nas encostas dos grandes maciços estão entre as mais ameaçadas.',
            location: {
                center: [-43.46364, -22.93009],
                zoom: 10.70,
                pitch: 54.50,
                bearing: -8.80,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'fully',
            hidden: false,
            description: 'No Morro dos Prazeres, no maciço da Tijuca, uma chuva em 2010 causou deslizamentos que mataram 34 pessoas.',
            location: {
                center: [-43.19993, -22.93522],
                zoom: 16.21,
                pitch: 59.50,
                bearing: -102.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-chapter',
            alignment: 'fully',
            hidden: false,
            description: 'Essa tragédia levou a prefeitura a instalar sirenes, rotas de fuga e pontos de apoio para chuvas fortes em várias favelas.',
            location: {
                center: [-43.20115, -22.95099],
                zoom: 14.02,
                pitch: 50.98,
                bearing: -32.64
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eigth-chapter',
            alignment: 'fully',
            hidden: false,
            description: 'É o caso da Rocinha',
            location: {
                center: [-43.24971, -22.98945],
                zoom: 15.30,
                pitch: 58.48,
                bearing: -19.84
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'nineth-chapter',
            alignment: 'fully',
            hidden: false,
            description: 'e de Chapéu-Mangueira e Babilônia, na Zona Sul,',
            location: {
                center: [-43.17192, -22.96076],
                zoom: 15.69,
                pitch: 69.85,
                bearing: -42.08
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tenth-chapter',
            alignment: 'fully',
            hidden: false,
            description: 'E dos morros da Formiga',
            location: {
                center: [-43.24164, -22.94031],
                zoom: 15.55,
                pitch: 58.50,
                bearing: 142.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eleventh-chapter',
            alignment: 'fully',
            hidden: false,
            description: 'e do Borel, na Zona Norte.',
            location: {
                center: [-43.25490, -22.94024],
                zoom: 15.60,
                pitch: 64,
                bearing: -136.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twelth-chapter',
            alignment: 'fully',
            hidden: false,
            description: 'Mas no maciço da Pedra Branca, na Zona Oeste, a prefeitura não fez nem estudos de risco, quanto menos instalar sirenes.',
            location: {
                center: [-43.48089, -22.96425],
                zoom: 11.18,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'thirteenth-chapter',
            alignment: 'fully',
            hidden: false,
            description: 'Os bairros dessa região foram os que mais tiveram aumaneto populacional na última década e tem domicílios em áreas de alto risco de deslizamento.',
            location: {
                center: [-43.50401, -22.97135],
                zoom: 12.20,
                pitch: 37.48,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourteenth-chapter',
            alignment: 'fully',
            hidden: false,
            description: 'É o caso do Quilombo do Camorim, em Jacarépaguá,',
            location: {
                center: [-43.42930, -22.97008],
                zoom: 16.11,
                pitch: 71.30,
                bearing: -100.96
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifteenth-chapter',
            alignment: 'fully',
            hidden: false,
            description: 'e algumas casas no pé do maciço em Realengo.',
            location: {
                center: [-43.44375, -22.90112],
                zoom: 16.13,
                pitch: 71.88,
                bearing: -164.81
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

    ]
};
