basePath = '../';

files = [
    ANGULAR_SCENARIO,
    ANGULAR_SCENARIO_ADAPTER,
    'public/test/e2e/scenarios.js'
];

autoWatch = false;

browsers = ['Chrome'];

singleRun = true;

proxies = {
    '/': 'http://localhost:3000/'
};

//logLevel = LOG_DEBUG;

urlRoot = '/_karma_/';