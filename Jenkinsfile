pipeline {
    agent any

    stages {
       stage('Checkout') {
            steps {
                git branch: 'feature', url:'https://github.com/JSDEEPIKA/attendence-backend-api-project.git'
            }
       }
       stage('Build') {
            steps {
                bat 'npm install'
                bat 'npm run build'
            }
       }
    post {
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
}
