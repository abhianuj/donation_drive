pipeline {
    agent any
    stages {
        // stage('Lint') {
        //     parallel {
        //         stage('Ui Lint') {
        //             agent{
        //                 docker { image 'node:16.13.1-alpine' }
        //             }
        //             steps {
        //                 dir("ui"){
        //                     sh 'npm install -g eslint'
        //                     sh 'npm install eslint-plugin-react --save-dev'
        //                     sh 'eslint . --fix'
        //                 }
        //             }
        //         }
        //         stage('Server Lint') {
        //             agent{
        //                 docker {
        //                     image 'maven:3.8.1-adoptopenjdk-11'
        //                 }
        //             }
        //             steps {
        //                 dir("server"){
        //                     sh 'mvn pmd:pmd'
        //                 }
        //             }
        //         }
        //     }
        // }
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
                            stash includes: 'coverage/**', name: 'uiunit'
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
                            stash includes: 'target/**', name: 'serverunit'
                        }
                    }
                }
            }
        }
        stage('Sonar') {
            agent {
                docker {
                    image 'sonarsource/sonar-scanner-cli'
                }
            }
            steps {
                dir("ui"){
                    unstash name: 'uiunit'
                }
                dir("server"){
                    unstash name: 'serverunit'
                }
                sh "ls server/target"
                sh "ls ui/coverage"

                withCredentials([string(credentialsId: 'fundraiser_sonar', variable: 'token')]) {
                    sh "sonar-scanner -Dsonar.login=${token}"
                }
            }
        }
    }
}