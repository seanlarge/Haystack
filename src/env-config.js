angular.module("EnvironmentConfig", [])
.constant("local", {"EnvironmentConfig":{"api":"http://localhost:3000/"}})
.constant("production", {"EnvironmentConfig":{"api":"http://production.pddk5kiaw3.us-east-1.elasticbeanstalk.com/"}});
