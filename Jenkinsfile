pipeline {
    agent { label '36.50.177.111-dopi-interdata' }
    environment {
        APP_NAME = 'fe-uiflat-production'
        DOCKER_IMAGE = "${APP_NAME}-image"
        CONTAINER_NAME = "${APP_NAME}-container"
        PORT = '3839'
        TELEGRAM_BOT_TOKEN = '5877975516:AAFGwnK_jJFEVQE1a_vi74xBagDWIOIvGpo'
        TELEGRAM_CHAT_ID = '-4164783233'
    }
    stages {
        stage('Set Build Metadata') {
            steps {
                script {
                    env.DOCKER_TAG = "${BUILD_NUMBER}-${sh(script: 'date +%Y%m%d%H%M%S', returnStdout: true).trim()}"
                }
            }
        }
        stage('Checkout') {
            steps {
                git branch: 'main',
                    credentialsId: '701b76e7-5ffa-4f08-8feb-13991b08efa4',
                    url: 'https://github.com/nnhshu/uiflat.com.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh '''
                        #!/bin/bash
                        docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .
                    '''
                    echo "✅ Docker image built: ${DOCKER_IMAGE}:${DOCKER_TAG}"
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    sh """
                        docker stop ${CONTAINER_NAME} || true
                        docker rm ${CONTAINER_NAME} || true
                        docker run -d --network host --name ${CONTAINER_NAME} -p ${PORT}:${PORT} ${DOCKER_IMAGE}:${DOCKER_TAG}
                    """
                    echo "🚀 Container ${CONTAINER_NAME} started."
                }
            }
        }
        stage('Cleanup Unused Images') {
            steps {
                script {
                    sh 'docker image prune -af --filter "until=2h"'
                    echo "🧹 Docker images older than 2h cleaned."
                }
            }
        }
    }
    post {
        always {
            script {
                def commitId = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
                def branchName = sh(script: 'git rev-parse --abbrev-ref HEAD', returnStdout: true).trim()
                def buildStatus = currentBuild.currentResult ?: 'UNKNOWN'
                def statusIcon = buildStatus == 'SUCCESS' ? '✅' :
                                 buildStatus == 'FAILURE' ? '❌' :
                                 buildStatus == 'ABORTED' ? '🚫' : '❓'
                def message = "${statusIcon} *${buildStatus}*\n" +
                              "📦 *Job:* ${env.JOB_NAME} \n" +
                              "🔢 *Build #:* ${env.BUILD_NUMBER} \n" +
                              "🌿 *Branch:* ${branchName} \n" +
                              "Commit ID: ${commitId}\n" +
                              "🔗 ${env.BUILD_URL}"

                sh """
                    curl -s -X POST https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage \
                        -d chat_id=${env.TELEGRAM_CHAT_ID} \
                        -d parse_mode=Markdown \
                        -d text="${message}"
                """
            }
        }
    }
}
