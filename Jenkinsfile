pipeline {
    agent any
    stages {
        stage('lint') {
            parallel {
                stage('Ui Lint') {
                    agent{
                        docker { image 'node:16.13.1-alpine' }
                    }
                    steps {
                        dir("ui"){
                            sh 'npm install -g eslint'
                            sh 'npm install eslint-plugin-react --save-dev'
                            sh 'eslint . --fix'
                        }
                    }
                }
                stage('Server Lint') {
                    agent{
                        docker {
                            image 'maven:3.8.1-adoptopenjdk-11'
                        }
                    }
                    steps {
                        dir("server"){
                            sh 'mvn pmd:pmd'
                        }
                    }
                }
            }
        }
        stage('Unit Test') {
            parallel {
                stage('Ui') {
                    agent{
                        docker { image 'node:16.13.1-alpine' }
                    }
                    steps {
                        dir("ui"){
                            sh 'npm install'
                            sh 'npm run test'
                        }
                    }
                }
                stage('Server') {
                    agent{
                        docker {
                            image 'maven:3.8.1-adoptopenjdk-11'
                        }
                    }
                    steps {
                        dir("server"){
                            sh 'mvn test'
                        }
                    }
                }
            }
        }
    }
}