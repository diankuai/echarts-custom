exports.modules = {
    main: {name: 'echarts/echarts'},
    parts: [
        {name: 'echarts/chart/line', weight: 100},
        {name: 'echarts/chart/bar', weight: 100},
        {name: 'echarts/chart/pie', weight: 90},
        {
            name: 'echarts/chart/map',
            weight: 90,
            includeShallow: [
                'echarts/util/mapData/geoJson/bei_jing_geo'
            ]
        }
    ]
};

exports.amd = {
    baseUrl: process.cwd(),
    packages: [
        {
            name: 'echarts',
            location: './echarts/src',
            main: 'echarts'
        },
        {
            name: 'zrender',
            location: './zrender/src',
            main: 'zrender'
        }
    ]
};
