var path = require('path')

module.exports = {
    outputDir : path.resolve(__dirname,'../backend/public'),
    css : {
        loaderOptions : {
            sass : {
                additionalData : `@import "@/scss/_main.scss";`
            }

        }
    },
        devServer:{
            historyApiFallback:true,
            proxy:"http://localhost:4000",
        },
        
};
