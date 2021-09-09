pipeline {
    agent any
    stages {
        stage('test') {
            steps {
                bat 'npm --version'
            }
        }
         stage('setup') {
            steps {
                bat 'npm install'
            }
        }
        stage('build') {
            steps {
                bat 'npm run build'
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
            emailext body: 'A Test EMail', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Test'
        }
        failure {
            echo 'This will run only if failed'
        }
    }
}