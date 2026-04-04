pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'feature', url: 'https://github.com/JSDEEPIKA/attendence-backend-api-project.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npm install --save-dev vitest'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
