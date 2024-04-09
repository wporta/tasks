pipeline {
    agent {
        label "jenkins-slave-1"
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
                cd tasks
                pnpm install
                '''
            }
        }
        stage('Building') {
            steps {
                echo "Cloning the repo"
                sh '''
                cd tasks
                pnpm run build
                '''
            }
        }
    }
}