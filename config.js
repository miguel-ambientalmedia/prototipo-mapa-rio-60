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
            title: 'Ponto 1',
            image: './assets/placeholder_image.webp',
            description: 'Descrição ponto 1',
            location: {
                center: [-43.4096, -22.9035],
                zoom: 14,
                pitch: 60,
                bearing: -17.6
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
            title: 'Ponto 2',
            image: './assets/placeholder_image.webp',
            description: 'Descrição ponto 2',
            location: {
                center: [-43.3096, -22.9032],
                zoom: 13,
                pitch: 55,
                bearing: 180,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Ponto 3',
            image: './assets/placeholder_image.webp',
            description: 'Descrição ponto 3',
            location: {
                center: [ -43.2096, -22.9030],
                zoom: 12,
                pitch: 50,
                bearing: -90
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
            title: 'Ponto 4',
            image: './assets/placeholder_image.webp',
            description: 'Descrição ponto 4',
            location: {
                center: [-43.1096, -22.9028],
                zoom: 11,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
