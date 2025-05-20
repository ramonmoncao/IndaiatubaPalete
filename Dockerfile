# Build stage
FROM maven:3.9.6-eclipse-temurin-21 as builder

WORKDIR /workspace

# 1. Configura ambiente UTF-8
ENV LANG C.UTF-8
ENV JAVA_TOOL_OPTIONS="-Dfile.encoding=UTF-8"

# 2. Copia primeiro os arquivos de build
COPY ip-back/indaiatubapalete/pom.xml .
COPY ip-back/indaiatubapalete/mvnw* .
COPY ip-back/indaiatubapalete/.mvn .mvn

# 3. Baixa dependências (cacheável)
RUN mvn dependency:go-offline -B

# 4. Copia o código fonte convertendo para UTF-8
COPY ip-back/indaiatubapalete/src ./src

# 5. Converte explicitamente o application.properties para UTF-8
RUN if [ -f src/main/resources/application.properties ]; then \
      iconv -f ISO-8859-1 -t UTF-8 src/main/resources/application.properties -o src/main/resources/application.properties.utf8 && \
      mv src/main/resources/application.properties.utf8 src/main/resources/application.properties; \
    fi

# 6. Build com encoding explícito
RUN mvn clean package -DskipTests -Dfile.encoding=UTF-8

# Runtime stage
FROM eclipse-temurin:21-jre-jammy
WORKDIR /app
COPY --from=builder /workspace/target/indaiatubapalete-*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-Dfile.encoding=UTF-8", "-jar", "app.jar"]