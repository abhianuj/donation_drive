From maven:3.8.4-eclipse-temurin-17-alpine as build
COPY . . 
WORKDIR server
RUN mvn clean install -Dmaven.test.skip=true -ntp 

FROM openjdk:11-jre-slim
COPY --from=build server/target/fundraiser-0.0.1-SNAPSHOT.jar .
ENTRYPOINT [ "java", "-jar", "fundraiser-0.0.1-SNAPSHOT.jar", "--spring.profiles.active=prod" ]