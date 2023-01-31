FROM openjdk:8-jdk-alpine
./gradlew build && java -jar build/libs/todo-0.1.0-SNAPSHOT.jar
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
CMD ["java","-jar","/app.jar"]
