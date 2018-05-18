export default {
    name: "taskTplmodule",
    breadcrumbName: "学习地图",
    path: 'taskTplmodule',
    getIndexRoute(location, cb){
        require.ensure([], (require) => {
            cb(null, {
                component: require('./container/taskTplContainer')
            })
        }, './Container/taskTplList');
    },
    childRoutes: [
        {
            name: "maps",
            breadcrumbName: "地图",
            path: 'map(/:mapId)',
            getComponent(location, cb){
                require.ensure([], (require)=>{
                    cb(null, {
                        component: require('./container/taskTplContainer')
                    })
                }, './Container/taskTplList');
            }
        }
    ]
}