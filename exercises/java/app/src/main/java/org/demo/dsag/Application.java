package org.demo.dsag;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.sap.cloud.sdk", "org.demo.dsag"})
@ServletComponentScan({"com.sap.cloud.sdk", "org.demo.dsag"})
public class Application {

  public static void main(final String[] args) {
    SpringApplication.run(Application.class, args);
  }
}
