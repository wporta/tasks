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
        stage('Building') {
            steps {
                echo "Cloning the repo"
                sh '''
                git clone https://github.com/wporta/tasks.git
                pnpm install
                pnpm run build
                '''
            }
        }
    }
}