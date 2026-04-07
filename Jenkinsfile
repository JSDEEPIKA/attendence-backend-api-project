pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'feature',
                    url: 'https://github.com/JSDEEPIKA/attendence-backend-api-project.git'
            }
        }

        stage('Install PHP Dependencies') {
            steps {
                bat 'composer install'   // ← MUST come first
            }
        }

        stage('Setup Environment') {
            steps {
                bat 'copy .env.example .env'
                bat 'php artisan key:generate'  // ← now vendor/ exists
            }
        }

        stage('Install Node Dependencies') {
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

        stage('Database Migration') {
            steps {
                bat 'php artisan migrate --force'
            }
        }

        stage('Test') {
            environment {
                LARAVEL_BYPASS_ENV_CHECK = '1'
            }
            steps {
                bat 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                bat 'php artisan serve'
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
