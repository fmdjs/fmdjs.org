/**
 * the Gruntfile for fmdjs.org
 * @author Edgar
 * @date 140303
 * */

module.exports = function( grunt ){
    
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        markdown: {
            doc: {
                options: {
                    template: 'docs/template.html',
                    preCompile: function( src, context ){
                        var title = src.match(/#\s+(.+)/);
                        title = title ? title[1] : '';
                        title = title === 'fmd.js' ? '' : title + ' - ';
                        
                        context.title = title;
                    },
                    postCompile: function( src, context ){
                        return src.replace(/<pre>\s*<code>/g,'<pre class="sh_javascript">').replace(/<\/code>\s*<\/pre>/g,'</pre>');
                    }
                },
                files: [{
                    expand: true,
                    cwd: 'docs/',
                    src: 'index.md',
                    dest: '../fmd.js/',
                    ext: '.html'
                },{
                    expand: true,
                    cwd: 'docs/',
                    src: ['*.md','!index.md'],
                    dest: '../fmd.js/docs/',
                    ext: '.html'
                },{
                    expand: true,
                    cwd: 'docs/api/',
                    src: '*.md',
                    dest: '../fmd.js/docs/api/',
                    ext: '.html'
                }]
            }
        },
        copy: {
            assets: {
                files: [{
                    expand: true,
                    cwd: 'assets/',
                    src: ['*.*'],
                    dest: '../fmd.js/assets/'
                }]
            },
            examples: {
                files: [{
                    expand: true,
                    cwd: 'examples/',
                    src: ['*/*.*'],
                    dest: '../fmd.js/examples/'
                }]
            }
        }

    });

    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    grunt.registerTask('aid',['copy']);
    grunt.registerTask('default', ['markdown']);

};
