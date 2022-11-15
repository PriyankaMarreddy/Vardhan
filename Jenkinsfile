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
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}
