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
                            sh 'npm i -g eslint'
                            sh 'npx eslint . --fix'
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
    }
}