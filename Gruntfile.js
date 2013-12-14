module.exports = function ( grunt ) {

    grunt.initConfig ({
      connect: {
        server: {
          options: {
            port: 9002,
            base: '.',
            keepalive: true,
            open: true
          }
        }
      }
    });

    grunt.registerTask('default', ['connect']);

    grunt.loadNpmTasks('grunt-contrib-connect');
};
