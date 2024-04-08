pipeline {
    agent {
        any {}
    }

    stages {
        stage('Clean Workspac') {
            cleanWs()
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