pipeline {
    agent{
        docker {
            image 'ppiper/action-runtime'
        }
    }
    stages {
        stage('lint') {
            parallel {
                stage('Ui Lint') {
                    steps {
                        dir("ui"){
                            sh 'npm install -g eslint'
                            sh 'npm install eslint-plugin-react --save-dev'
                            sh 'eslint . --fix'
                        }
                    }
                }
                stage('Server Lint') {
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