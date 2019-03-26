const dockerCompose = require('docker-compose');

(async function run(){
    console.log('--- This will work without composeOptions ---');
    await dockerCompose.run('some-service', 'pwd', {
        log: true,
    });

    console.log('--- This will not work with composeOptions ---');
    console.log('It will show the documentation, maybe because the cat command gets the workdir param and doesn\'t understand it');
    await dockerCompose.run('some-service', 'cat hello.txt', {
        log: true,
        composeOptions: [['--workdir','/mountedvolume/nested/dir']]
    });
})();
