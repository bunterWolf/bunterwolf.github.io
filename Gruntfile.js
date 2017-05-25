module.exports = function(grunt) {
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          sizes: [
            {
              name: "100",
              width: 100,
              quality: 60
            },
            {
              name: "200",
              width: 200,
              quality: 85
            },
            {
              name: "400",
              width: 400,
              quality: 85
            },
            {
              name: "600",
              width: 600,
              quality: 85
            },
            {
              name: "800",
              width: 800,
              quality: 85
            },
            {
              name: "1200",
              width: 1200,
              quality: 85
            },
            {
              name: "1500",
              width: 1500,
              quality: 85
            },
            {
              name: "2000",
              width: 2000,
              quality: 85
            },
            {
              name: "2500",
              width: 2500,
              quality: 85
            }
          ],
          newFilesOnly: true
        },
        files: [
          {
            expand: true,
            src: ["**/*.{jpg,gif,png}"],
            cwd: "images-source/",
            dest: "images-responsive/"
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks("grunt-responsive-images");
  grunt.registerTask("default", ["responsive_images"]);
};
