pipeline {
    agent {
        any {}
    }

    stages {
        stage('Clean Workspac') {
            steps {
                cleanWs()
            }
        }
        stage('Cloning the Repo') {
            steps {
                echo "Cloning the repo"
                sh '''
                git clone https://github.com/wporta/tasks.git
                '''
            }
        }
        stage('Installing Dependencies') {
            steps {
                echo "Installing Dependencies"
                sh '''
                npm install
                '''
            }
        }
        stage('Building') {
            steps {
                echo "Cloning the repo"
                sh '''
                npm run build
                '''
            }
        }
    }
}