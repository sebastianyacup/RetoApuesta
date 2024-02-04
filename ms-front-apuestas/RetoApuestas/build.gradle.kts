plugins {
	java
	id("org.springframework.boot") version "2.6.4"
	id("io.spring.dependency-management") version "1.1.4"
}

group = "com.apuestas"
version = "0.0.1-SNAPSHOT"

java {
	sourceCompatibility = JavaVersion.VERSION_11
	targetCompatibility = JavaVersion.VERSION_11
}


repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-data-jpa")
	implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.projectlombok:lombok:1.18.28")
	implementation ("org.postgresql:postgresql:42.6.0")

	compileOnly ("org.projectlombok:lombok:1.18.28")
	compileOnly ("org.projectlombok:lombok-mapstruct-binding:0.2.0")

	annotationProcessor("org.projectlombok:lombok:1.18.28")

	runtimeOnly ("org.postgresql:postgresql:42.6.0")
	testImplementation("org.springframework.boot:spring-boot-starter-test")
}

tasks.withType<Test> {
	useJUnitPlatform()
}

tasks {
	bootBuildImage {
		builder = "paketobuildpacks/builder:tiny"
	}
}

