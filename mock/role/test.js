const list =  [
    {
    nick:'周杰伦',
    phone:12345678912311,
    name:'hhhhh',
    subjec:'物理',
    job:'aaaaa',
    year:22,
    updateTime:'2001-2-1', 
    },
    {
    nick:'周杰伦',
    phone:12345678912311,
    name:'hhhhh',
    subjec:'物理',
    job:'aaaaa',
    year:22,
    updateTime:'2001-2-1', 
    },
    {
    nick:'周杰伦',
    phone:12345678912311,
    name:'hhhhh',
    subjec:'物理',
    job:'aaaaa',
    year:22,
    updateTime:'2001-2-1', 
    },
    {
    nick:'周杰伦',
    phone:12345678912311,
    name:'hhhhh',
    subjec:'物理',
    job:'aaaaa',
    year:22,
    updateTime:'2001-2-1', 
    }
]



module.exports =[
    {
        url:'/vue-admin-template/test/list',
        type:'get',
        response:config =>{
            const items =data.items
            return{
                code:20000,
                data:{
                    total: items.length
                    items: items
                }
            }
        }
    }
]