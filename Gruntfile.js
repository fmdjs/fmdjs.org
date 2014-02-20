/**
 * the Gruntfile for fmdjs.org
 * @author Edgar
 * @date 140218
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
                    dest: '../fmdjs/',
                    ext: '.html'
                },{
                    expand: true,
                    cwd: 'docs/',
                    src: ['*.md','!index.md'],
                    dest: '../fmdjs/docs/',
                    ext: '.html'
                },{
                    expand: true,
                    cwd: 'docs/api/',
                    src: '*.md',
                    dest: '../fmdjs/docs/api/',
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
                    dest: '../fmdjs/assets/'
                }]
            }
        }

    });

    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    grunt.registerTask('assets',['copy']);
    grunt.registerTask('default', ['markdown']);

};
