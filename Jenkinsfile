pipeline {
    agent {
        node {label 'slave-build-node'}
    }

    stages {
        stage('clone') {
            steps {
                git branch: 'main', url: 'https://github.com/PriyankaMarreddy/Vardhan.git'
            }
        }
        stage("Build") {
            steps {
                sh "npm run build"
            }
        }
    }
}