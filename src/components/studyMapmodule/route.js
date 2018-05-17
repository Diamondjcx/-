export default {
    name: "studyMapmodule",
    breadcrumbName: "学习地图",
    path: 'studyMapmodule',
    getIndexRoute(location, cb){
        require.ensure([], (require) => {
            cb(null, {
                component: require('./container/studyMapContainer')
            })
        }, './Container/studyMapList');
    },
    childRoutes: [
        {
            name: "maps",
            breadcrumbName: "地图",
            path: 'map(/:mapId)',
            getComponent(location, cb){
                require.ensure([], (require)=>{
                    cb(null, {
                        component: require('./container/studyMapContainer')
                    })
                }, './Container/studyMapList');
            }
        }
    ]
}