pipeline {
    agent any

    stages {
        stage('Docker Cleanup') {
            steps {
                bat '''
                docker stop food || echo Container not running
                docker rm food || echo No container to remove
                docker rmi -f food || echo No image to remove
                '''
            }
        }
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t project-sparkle .'
            }
        }
        stage('Run Container') {
            steps {
                bat 'docker run -d -p 3000:80 --name project-sparkle project-sparkle'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'Dockerhub-cred', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    bat '''
                        docker login -u %DOCKER_USER% -p %DOCKER_PASS%
                        docker tag project-sparkle %DOCKER_USER%/project-sparkle
                        docker push %DOCKER_USER%/project-sparkle
                    '''
                }
            }
        }        
    }
}