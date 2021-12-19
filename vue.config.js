module.exports = {
    lintOnSave: true,
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/styles/variables.scss";`,
            },
        }
    }
}