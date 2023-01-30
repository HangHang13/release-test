pipeline {
    agent any 
    stages {
        stage('Clean') {
            steps {
                script {
                    try {
                        sh "docker stop react_container"
                        sh "docker stop spring_container"
                        sleep 1  
                        sh "docker rm react_container"
                        sh "docker rm spring_container"
                    } catch (error) {
                        echo error
                        sh 'exit 0'
                    }
                }
            }
        }

        stage('Build') {
            steps {
                sh "docker build -t react ./todo-app"
                // sh "docker build -t motoo_fastapi ./back_fastapi"
                sh "docker build -t spring ./todo"
            }
        }

        stage('Deploy') {
            steps {
                sh "docker run -d  -e TZ=Asia/Seoul --name=react_container -p 3000:3000 react"
                // sh "docker run --env-file /home/.env -d --name=motoo_fastapi_container -p 8080:8000 motoo_fastapi"
                sh "docker run -d -e TZ=Asia/Seoul --name=spring_container -p 8080:8080 spring"
                sh "docker image prune --force"

            }
        }
    }
}