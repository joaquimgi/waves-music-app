pipeline {
    agent { docker { image 'node:14-alpine' } }
    stages {
        stage('test') {
            steps {
                sh 'npm --version'
            }
        }
         stage('setup') {
            steps {
                sh 'npm install'
            }
        }
        stage('build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('deploy') {
            steps {
                echo 'Ready to be deployed'
            }
        }
    }
    post {
        always {
            echo 'This will always run'
        }
        success {
            echo 'This will run only if successful'
        }
        failure {
            echo 'This will run only if failed'
        }
    }
}