node {

    def imageTag = "peterngtr/rest-demo:${env.BUILD_NUMBER}"
    def dockerHome = tool 'myDocker'

    stage("Initializing") {
        cleanWs();
        checkout scm;
        sh 'git reset --hard'
        env.PATH = "${dockerHome}/bin:${env.PATH}"
    }

    stage("Building Images") {
        sh "docker build -t ${imageTag} -f docker/Dockerfile ."
    }

    stage("Running Tests") {
        try {
            sh "jenkins/run-tests.sh ${env.BUILD_NUMBER}"
        }
        finally {
            sh "ls report/"
            allure includeProperties: false, jdk: '', results: [[path: 'report']]
        }
    }


}
